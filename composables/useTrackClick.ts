/**
 * Composable for tracking click events on any element.
 *
 * Usage:
 * ```vue
 * <script setup>
 * const { trackClick } = useTrackClick()
 * </script>
 * <template>
 *   <button @click="trackClick('cta_click', { label: 'Get Started' })">
 *     Get Started
 *   </button>
 * </template>
 * ```
 */
export function useTrackClick() {
  const trackClick = (eventName: string, data?: Record<string, unknown>) => {
    if (import.meta.server) return

    try {
      const { $trackEvent } = useNuxtApp()
      ;($trackEvent as ((name: string, data?: Record<string, unknown>) => void) | undefined)?.(eventName, data)
    } catch {
      // Silently ignore — analytics should never break the app
    }
  }

  return { trackClick }
}
