/**
 * Lightweight analytics composable for tracking user behavior.
 *
 * - Generates a random session_id in sessionStorage (no cookies).
 * - Detects device type, browser, and OS from client APIs.
 * - Extracts UTM parameters from the URL query string.
 * - Sends data to gamma-api via GraphQL mutations using sendBeacon (non-blocking).
 * - Falls back to fetch with keepalive when sendBeacon is unavailable.
 * - Tracks scroll depth and time-on-page engagement metrics.
 * - All errors are silently caught so analytics never break the app.
 */

interface TrackEventOptions {
  /** Arbitrary key-value metadata attached to the event */
  [key: string]: unknown
}

interface AnalyticsReturn {
  trackPageView: (path: string) => void
  trackEvent: (eventName: string, eventData?: TrackEventOptions) => void
  trackScrollDepth: (path: string) => { cleanup: () => void }
  trackTimeOnPage: (path: string) => { cleanup: () => void }
}

/** No-op return used on the server side */
const NOOP_ANALYTICS: AnalyticsReturn = {
  trackPageView: () => {},
  trackEvent: () => {},
  trackScrollDepth: () => ({ cleanup: () => {} }),
  trackTimeOnPage: () => ({ cleanup: () => {} }),
}

export function useAnalytics(): AnalyticsReturn {
  // SSR guard — analytics is client-only
  if (import.meta.server) return NOOP_ANALYTICS

  const config = useRuntimeConfig()
  const gqlEndpoint = (config.public.graphqlEndpoint as string) || 'https://gamma.ngrok.app/graphql'

  // ------------------------------------------------------------------ helpers

  /** Unique per browser-session identifier (no cookies). */
  const getSessionId = (): string => {
    const KEY = 'gamma_sid'
    let sid = sessionStorage.getItem(KEY)
    if (!sid) {
      sid = crypto.randomUUID()
      sessionStorage.setItem(KEY, sid)
    }
    return sid
  }

  /** Coarse device bucket based on viewport width. */
  const getDeviceType = (): string => {
    const width = window.innerWidth
    if (width < 768) return 'mobile'
    if (width < 1024) return 'tablet'
    return 'desktop'
  }

  /** Simple browser detection — no heavy UA-parsing library. */
  const getBrowser = (): string => {
    const ua = navigator.userAgent
    if (ua.includes('Edg')) return 'Edge'
    if (ua.includes('Chrome') && !ua.includes('Edg')) return 'Chrome'
    if (ua.includes('Firefox')) return 'Firefox'
    if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari'
    return 'Other'
  }

  /** Simple OS detection from userAgent. */
  const getOS = (): string => {
    const ua = navigator.userAgent
    if (ua.includes('Windows')) return 'Windows'
    if (ua.includes('Mac')) return 'macOS'
    if (ua.includes('Android')) return 'Android'
    if (ua.includes('iPhone') || ua.includes('iPad')) return 'iOS'
    if (ua.includes('Linux')) return 'Linux'
    return 'Other'
  }

  /** Get the user's preferred language (e.g., "en-US", "fr"). */
  const getLanguage = (): string => {
    return navigator.language || 'unknown'
  }

  /** Extract standard UTM query parameters from the current URL. */
  const getUtmParams = () => {
    const params = new URLSearchParams(window.location.search)
    return {
      utm_source: params.get('utm_source') || null,
      utm_medium: params.get('utm_medium') || null,
      utm_campaign: params.get('utm_campaign') || null,
    }
  }

  /** Total page load time in ms from Navigation Timing API. Returns null if not yet available. */
  const getPageLoadTime = (): number | null => {
    try {
      const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (nav && nav.loadEventEnd > 0) {
        return Math.round(nav.loadEventEnd - nav.startTime)
      }
    } catch {
      // API not available
    }
    return null
  }

  /** Network connection type (e.g., "4g", "3g"). Null on Safari/Firefox. */
  const getConnectionType = (): string | null => {
    try {
      const conn = (navigator as any).connection
      return conn?.effectiveType || null
    } catch {
      // API not available
    }
    return null
  }

  // ------------------------------------------------------- transport layer

  /**
   * Fire-and-forget GraphQL mutation via sendBeacon (preferred) or fetch.
   * Never throws — analytics must not impact the user experience.
   */
  const sendTracking = (query: string, variables: Record<string, unknown>): void => {
    try {
      const body = JSON.stringify({ query, variables })

      if (navigator.sendBeacon) {
        const blob = new Blob([body], { type: 'application/json' })
        navigator.sendBeacon(gqlEndpoint, blob)
      } else {
        fetch(gqlEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body,
          keepalive: true,
        }).catch(() => {})
      }
    } catch {
      // Silently swallow — analytics should never break the app
    }
  }

  // --------------------------------------------------------- public API

  /** Track a page view with device / referrer / UTM / performance metadata. */
  const trackPageView = (path: string): void => {
    const utm = getUtmParams()
    const mutation = `
      mutation TrackPageView($input: TrackPageViewInput!) {
        trackPageView(input: $input)
      }
    `
    sendTracking(mutation, {
      input: {
        session_id: getSessionId(),
        path,
        referrer: document.referrer || null,
        device_type: getDeviceType(),
        browser: getBrowser(),
        os: getOS(),
        screen_width: window.innerWidth,
        language: getLanguage(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        page_load_ms: getPageLoadTime(),
        connection_type: getConnectionType(),
        ...utm,
      },
    })
  }

  /** Track a custom named event with optional metadata. */
  const trackEvent = (eventName: string, eventData?: TrackEventOptions): void => {
    const mutation = `
      mutation TrackEvent($input: TrackEventInput!) {
        trackEvent(input: $input)
      }
    `
    sendTracking(mutation, {
      input: {
        session_id: getSessionId(),
        event_name: eventName,
        event_data: eventData ?? null,
        path: window.location.pathname,
      },
    })
  }

  /**
   * Track scroll depth using IntersectionObserver on sentinel elements.
   * Creates invisible divs at 25%, 50%, 75%, 100% of page height.
   * Sends a single scroll_depth event on page unload with the max depth reached.
   * Returns a cleanup function to remove sentinels and observers on SPA navigation.
   */
  const trackScrollDepth = (path: string): { cleanup: () => void } => {
    let maxDepth = 0
    const sentinels: HTMLDivElement[] = []
    let observer: IntersectionObserver | null = null
    let hasSent = false

    const sendScrollDepth = () => {
      if (hasSent || maxDepth === 0) return
      hasSent = true
      trackEvent('scroll_depth', { max_depth: maxDepth, path })
    }

    const onBeforeUnload = () => sendScrollDepth()
    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendScrollDepth()
      }
    }

    try {
      const depthMarks = [25, 50, 75, 100]

      // Place sentinels after a short delay so the DOM has settled
      const placeSentinels = () => {
        const docHeight = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
        )

        observer = new IntersectionObserver(
          (entries) => {
            try {
              for (const entry of entries) {
                if (entry.isIntersecting) {
                  const depth = Number(entry.target.getAttribute('data-depth'))
                  if (depth > maxDepth) {
                    maxDepth = depth
                  }
                }
              }
            } catch {
              // Silently ignore
            }
          },
          { threshold: 0 },
        )

        for (const depth of depthMarks) {
          const sentinel = document.createElement('div')
          sentinel.setAttribute('data-depth', String(depth))
          sentinel.setAttribute('data-analytics-sentinel', 'true')
          sentinel.style.cssText = 'position:absolute;left:0;width:1px;height:1px;pointer-events:none;opacity:0;'
          sentinel.style.top = `${(depth / 100) * docHeight}px`
          document.body.appendChild(sentinel)
          sentinels.push(sentinel)
          observer.observe(sentinel)
        }
      }

      // Wait for DOM to settle before placing sentinels
      setTimeout(placeSentinels, 500)

      window.addEventListener('beforeunload', onBeforeUnload)
      document.addEventListener('visibilitychange', onVisibilityChange)
    } catch {
      // Silently ignore — analytics should never break the app
    }

    const cleanup = () => {
      try {
        sendScrollDepth()
        if (observer) {
          observer.disconnect()
          observer = null
        }
        for (const sentinel of sentinels) {
          sentinel.remove()
        }
        sentinels.length = 0
        window.removeEventListener('beforeunload', onBeforeUnload)
        document.removeEventListener('visibilitychange', onVisibilityChange)
      } catch {
        // Silently ignore
      }
    }

    return { cleanup }
  }

  /**
   * Track active time on page.
   * Pauses when the tab is hidden (user switched tabs), resumes when visible.
   * Sends a trackPageView update with duration_ms on unload via sendBeacon.
   * Returns a cleanup function to stop tracking on SPA navigation.
   */
  const trackTimeOnPage = (path: string): { cleanup: () => void } => {
    let totalMs = 0
    let startTime = Date.now()
    let isActive = true
    let hasSent = false

    const pause = () => {
      if (isActive) {
        totalMs += Date.now() - startTime
        isActive = false
      }
    }

    const resume = () => {
      if (!isActive) {
        startTime = Date.now()
        isActive = true
      }
    }

    const sendDuration = () => {
      if (hasSent) return
      hasSent = true

      // Capture final active time
      if (isActive) {
        totalMs += Date.now() - startTime
        isActive = false
      }

      if (totalMs <= 0) return

      const mutation = `
        mutation TrackPageView($input: TrackPageViewInput!) {
          trackPageView(input: $input)
        }
      `
      const body = JSON.stringify({
        query: mutation,
        variables: {
          input: {
            session_id: getSessionId(),
            path,
            duration_ms: Math.round(totalMs),
          },
        },
      })

      try {
        if (navigator.sendBeacon) {
          const blob = new Blob([body], { type: 'application/json' })
          navigator.sendBeacon(gqlEndpoint, blob)
        } else {
          fetch(gqlEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body,
            keepalive: true,
          }).catch(() => {})
        }
      } catch {
        // Silently ignore
      }
    }

    const onVisibilityChange = () => {
      try {
        if (document.visibilityState === 'hidden') {
          pause()
        } else {
          resume()
        }
      } catch {
        // Silently ignore
      }
    }

    const onBeforeUnload = () => sendDuration()

    try {
      document.addEventListener('visibilitychange', onVisibilityChange)
      window.addEventListener('beforeunload', onBeforeUnload)
    } catch {
      // Silently ignore
    }

    const cleanup = () => {
      try {
        sendDuration()
        document.removeEventListener('visibilitychange', onVisibilityChange)
        window.removeEventListener('beforeunload', onBeforeUnload)
      } catch {
        // Silently ignore
      }
    }

    return { cleanup }
  }

  return { trackPageView, trackEvent, trackScrollDepth, trackTimeOnPage }
}
