import { createI18n } from 'vue-i18n'

// Import locale messages
import en from '~/locales/en.json'
import fr from '~/locales/fr.json'

/** Detect initial locale: localStorage > browser language > default 'en' */
function detectInitialLocale(): string {
  if (import.meta.client) {
    const saved = localStorage.getItem('locale')
    if (saved && ['en', 'fr'].includes(saved)) return saved

    const browser = navigator.language.split('-')[0]
    if (['en', 'fr'].includes(browser)) return browser
  }
  return 'en'
}

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false, // Use Composition API mode (Vue I18n v11)
    locale: detectInitialLocale(),
    fallbackLocale: 'en',
    messages: {
      en,
      fr,
    },
    // Performance optimization
    globalInjection: true,
    // Disable fallback warnings in development
    silentFallbackWarn: true,
    silentTranslationWarn: true,
    // SSR compatibility
    missingWarn: false,
    fallbackWarn: false,
  })

  vueApp.use(i18n)

  return {
    provide: {
      i18n,
    },
  }
})