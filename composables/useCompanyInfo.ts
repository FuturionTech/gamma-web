/**
 * Centralized company information — single source of truth.
 *
 * Fetches live data from the SiteSettings GraphQL API on first call
 * (lazy singleton pattern). Hardcoded values serve as fallbacks when
 * the API is unreachable.
 *
 * Callers access the same property shape as before (plain object with
 * nested `address` and `social` objects, `mailtoHref`/`telHref` getters).
 * Values update reactively once the API responds.
 */
export const useCompanyInfo = () => {
  const { query } = useGraphql()

  // ── Lazy singleton: fetch once per SSR/client lifecycle ──────────
  const settings = useState<Record<string, string>>('siteSettings', () => ({}))
  const loaded = useState('siteSettingsLoaded', () => false)

  if (!loaded.value) {
    loaded.value = true
    query<{ siteSettings: Array<{ key: string; value: string }> }>(`
      query SiteSettings { siteSettings { key value } }
    `)
      .then((data) => {
        const map: Record<string, string> = {}
        for (const s of data.siteSettings ?? []) {
          map[s.key] = s.value
        }
        settings.value = map
      })
      .catch(() => {
        // API unreachable — hardcoded fallbacks will be used
      })
  }

  // ── Helper: read from API data with hardcoded fallback ───────────
  const get = (key: string, fallback: string): string =>
    settings.value[key] || fallback

  // ── Build the same shape existing callers depend on ──────────────
  return reactive({
    // Legal / brand
    name: computed(() => get('company_name', 'Gamma Neutral Consulting Inc.')),
    shortName: computed(() => get('company_short_name', 'Gamma Neutral')),

    // Primary contact
    email: computed(() => get('company_email', 'info@gammaneutral.com')),

    // Phone
    phone: computed(() => get('company_phone', '')),
    phoneHref: computed(() => {
      const ph = get('company_phone', '')
      return ph ? ph.replace(/[\s()-]/g, '') : ''
    }),

    // Physical address — nested object for backward compatibility
    address: reactive({
      street: computed(() => get('address_street', '108 Redpath Ave')),
      city: computed(() => get('address_city', 'Toronto')),
      province: computed(() => get('address_province', 'ON')),
      postalCode: computed(() => get('address_postal_code', 'M4S 2J7')),
      country: computed(() => get('address_country', 'Canada')),
      // Pre-formatted strings
      line1: computed(() => get('address_street', '108 Redpath Ave')),
      line2: computed(() => {
        const city = get('address_city', 'Toronto')
        const prov = get('address_province', 'ON')
        const postal = get('address_postal_code', 'M4S 2J7')
        return `${city}, ${prov} ${postal}`
      }),
      full: computed(() => {
        const street = get('address_street', '108 Redpath Ave')
        const city = get('address_city', 'Toronto')
        const prov = get('address_province', 'ON')
        const postal = get('address_postal_code', 'M4S 2J7')
        const country = get('address_country', 'Canada')
        return `${street}, ${city}, ${prov} ${postal}, ${country}`
      }),
      googleMapsUrl: computed(() =>
        get(
          'address_google_maps_url',
          'https://www.google.com/maps/place/108+Redpath+Ave,+Toronto,+ON+M4S+2J7,+Canada',
        ),
      ),
    }),

    // Web / external links
    website: computed(() => get('company_website', 'https://gammaneutral.com')),
    social: reactive({
      linkedin: computed(() => get('social_linkedin', '') || null),
      twitter: computed(() => get('social_twitter', '') || null),
      facebook: computed(() => get('social_facebook', '') || null),
      instagram: computed(() => get('social_instagram', '') || null),
      github: computed(() => get('social_github', '') || null),
    }),

    // Copyright
    copyrightText: computed(() => get('copyright_text', '')),

    // Helper computed hrefs
    mailtoHref: computed(() => `mailto:${get('company_email', 'info@gammaneutral.com')}`),
    telHref: computed(() => {
      const ph = get('company_phone', '')
      return ph ? `tel:${ph.replace(/[\s()-]/g, '')}` : ''
    }),
  })
}
