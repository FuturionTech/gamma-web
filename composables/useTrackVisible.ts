/**
 * Composable that tracks when an element becomes visible in the viewport.
 * Fires the event exactly once using IntersectionObserver.
 *
 * Usage:
 * ```vue
 * <script setup>
 * const targetRef = useTrackVisible('pricing_section_viewed', {
 *   threshold: 0.5,
 *   data: { section: 'pricing' },
 * })
 * </script>
 * <template>
 *   <section ref="targetRef">...</section>
 * </template>
 * ```
 */
import { ref, onMounted, onBeforeUnmount, type Ref } from 'vue'

interface UseTrackVisibleOptions {
  /** Intersection threshold (0-1). Defaults to 0.1 (10% visible). */
  threshold?: number
  /** Additional data to include with the event. */
  data?: Record<string, unknown>
}

export function useTrackVisible(
  eventName: string,
  options?: UseTrackVisibleOptions,
): Ref<HTMLElement | null> {
  const targetRef = ref<HTMLElement | null>(null)

  if (import.meta.server) return targetRef

  let observer: IntersectionObserver | null = null
  let hasFired = false

  onMounted(() => {
    try {
      if (!targetRef.value) return

      observer = new IntersectionObserver(
        (entries) => {
          try {
            for (const entry of entries) {
              if (entry.isIntersecting && !hasFired) {
                hasFired = true
                const { $trackEvent } = useNuxtApp()
                ;($trackEvent as ((name: string, data?: Record<string, unknown>) => void) | undefined)?.(
                  eventName,
                  {
                    path: window.location.pathname,
                    ...options?.data,
                  },
                )
                // Stop observing after firing once
                observer?.disconnect()
                observer = null
              }
            }
          } catch {
            // Silently ignore
          }
        },
        { threshold: options?.threshold ?? 0.1 },
      )

      observer.observe(targetRef.value)
    } catch {
      // Silently ignore — analytics should never break the app
    }
  })

  onBeforeUnmount(() => {
    try {
      observer?.disconnect()
      observer = null
    } catch {
      // Silently ignore
    }
  })

  return targetRef
}
