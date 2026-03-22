import { useI18n as useVueI18n } from 'vue-i18n'

const AVAILABLE_LOCALES = ['en', 'fr'] as const
type SupportedLocale = (typeof AVAILABLE_LOCALES)[number]

export const useI18n = () => {
  // Simple fallback for SSR
  if (process.server) {
    const locale = ref<string>('en')
    const t = (key: string, _params?: any) => key
    const setLocale = (newLocale: string) => {
      locale.value = newLocale
    }
    const availableLocales = computed(() => [...AVAILABLE_LOCALES])
    const initializeLocale = () => {}

    return {
      locale,
      t,
      rt: t,
      d: t,
      n: t,
      tm: t,
      te: () => true,
      setLocale,
      availableLocales,
      initializeLocale,
    }
  }

  const { locale, t, rt, d, n, tm, te } = useVueI18n()

  // Locale switching function
  const setLocale = (newLocale: string) => {
    locale.value = newLocale

    // Persist locale to localStorage
    if (process.client) {
      localStorage.setItem('locale', newLocale)
    }
  }

  // Available locales
  const availableLocales = computed(() => [...AVAILABLE_LOCALES])

  // Initialize locale from localStorage or browser preference
  const initializeLocale = () => {
    if (process.client) {
      const savedLocale = localStorage.getItem('locale')
      if (savedLocale && (AVAILABLE_LOCALES as readonly string[]).includes(savedLocale)) {
        locale.value = savedLocale
      } else {
        const browserLocale = navigator.language.split('-')[0]
        if ((AVAILABLE_LOCALES as readonly string[]).includes(browserLocale)) {
          locale.value = browserLocale
        }
      }
    }
  }

  return {
    locale,
    t,
    rt,
    d,
    n,
    tm,
    te,
    setLocale,
    availableLocales,
    initializeLocale,
  }
}