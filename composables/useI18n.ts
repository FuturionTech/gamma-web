import { useI18n as useVueI18n } from 'vue-i18n'

export const useI18n = () => {
  // Simple fallback for SSR
  if (process.server) {
    const locale = ref('en')
    const t = (key: string, params?: any) => key
    const setLocale = (newLocale: string) => {
      locale.value = newLocale
    }
    const availableLocales = computed(() => ['en', 'fr'])
    const initializeLocale = () => {}

    return {
      locale: readonly(locale),
      t,
      rt: t,
      d: t,
      n: t,
      tm: t,
      te: () => true,
      setLocale,
      availableLocales,
      initializeLocale
    }
  }

  const { locale, t, rt, d, n, tm, te } = useVueI18n()

  // Locale switching function
  const setLocale = (newLocale: string) => {
    locale.value = newLocale

    // Optional: Persist locale to localStorage
    if (process.client) {
      localStorage.setItem('locale', newLocale)
    }
  }

  // Get available locales
  const availableLocales = computed(() => ['en', 'fr'])

  // Initialize locale from localStorage or browser
  const initializeLocale = () => {
    if (process.client) {
      const savedLocale = localStorage.getItem('locale')
      if (savedLocale && availableLocales.value.includes(savedLocale)) {
        locale.value = savedLocale
      } else {
        // Detect browser language
        const browserLocale = navigator.language.split('-')[0]
        if (availableLocales.value.includes(browserLocale)) {
          locale.value = browserLocale
        }
      }
    }
  }

  return {
    locale: readonly(locale),
    t,
    rt,
    d,
    n,
    tm,
    te,
    setLocale,
    availableLocales,
    initializeLocale
  }
}