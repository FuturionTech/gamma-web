/**
 * Client-only Nuxt plugin that wires up automatic page-view tracking,
 * scroll depth tracking, time-on-page tracking, and provides a global
 * `$trackEvent` helper.
 *
 * Page views are recorded on every route change (via router.afterEach)
 * and once on the initial page load.
 *
 * Engagement tracking (scroll depth + time-on-page) is started on each
 * navigation and cleaned up on the next route change, ensuring no
 * leaked observers or timers during SPA navigation.
 */
export default defineNuxtPlugin(() => {
  const { trackPageView, trackEvent, trackScrollDepth, trackTimeOnPage } = useAnalytics()

  const router = useRouter()

  // Hold cleanup functions for the current page's engagement trackers
  let scrollCleanup: (() => void) | null = null
  let timeCleanup: (() => void) | null = null

  /** Tear down engagement trackers for the previous page. */
  const cleanupEngagement = () => {
    try {
      scrollCleanup?.()
      scrollCleanup = null
      timeCleanup?.()
      timeCleanup = null
    } catch {
      // Silently ignore
    }
  }

  /** Start engagement tracking for a given path. */
  const startEngagement = (path: string) => {
    try {
      const scroll = trackScrollDepth(path)
      scrollCleanup = scroll.cleanup

      const time = trackTimeOnPage(path)
      timeCleanup = time.cleanup
    } catch {
      // Silently ignore
    }
  }

  /** Send page_load_ms after window.onload when the timing data is available. */
  const sendPageLoadTime = (path: string) => {
    try {
      // On initial load, loadEventEnd may not be set yet — wait for window.onload
      if (document.readyState === 'complete') {
        // Already loaded, send immediately if timing is available
        trackPageView(path)
      } else {
        window.addEventListener(
          'load',
          () => {
            // Small delay to ensure loadEventEnd is populated
            setTimeout(() => {
              trackPageView(path)
            }, 50)
          },
          { once: true },
        )
      }
    } catch {
      // Fall back to immediate tracking without page_load_ms
      trackPageView(path)
    }
  }

  // Track every client-side navigation
  router.afterEach((to) => {
    // Clean up engagement trackers from the previous page first
    cleanupEngagement()

    // Small delay so the page title / DOM have settled
    setTimeout(() => {
      trackPageView(to.path)
      startEngagement(to.path)
    }, 100)
  })

  // Track the very first page load with page_load_ms timing
  sendPageLoadTime(window.location.pathname)
  startEngagement(window.location.pathname)

  // Expose $trackEvent for use via useNuxtApp()
  return {
    provide: {
      trackEvent,
    },
  }
})
