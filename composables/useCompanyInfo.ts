/**
 * Centralized company information — single source of truth.
 *
 * Update contact details HERE and they propagate across the entire site:
 * footer, contact page, privacy policy, terms, about page, emails, etc.
 *
 * Factual data (email, address, phone) lives here as plain strings since
 * it does not change between languages. Localized LABELS (like "Email us",
 * "Our office") stay in locales/*.json.
 */
export const useCompanyInfo = () => {
  const info = {
    // Legal / brand
    name: 'Gamma Neutral Consulting Inc.',
    shortName: 'Gamma Neutral',

    // Primary contact — one functional email for all inquiries
    email: 'info@gammaneutral.com',

    // Phone (placeholder — update when phone line is live)
    phone: '+1 (416) 555-1234',
    phoneHref: '+14165551234',

    // Physical address
    address: {
      street: '108 Redpath Ave',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M4S 2J7',
      country: 'Canada',
      // Pre-formatted strings for common display patterns
      line1: '108 Redpath Ave',
      line2: 'Toronto, ON M4S 2J7',
      full: '108 Redpath Ave, Toronto, ON M4S 2J7, Canada',
      googleMapsUrl:
        'https://www.google.com/maps/place/108+Redpath+Ave,+Toronto,+ON+M4S+2J7,+Canada',
    },

    // Web / external links
    website: 'https://gammaneutral.com',
    social: {
      linkedin: null as string | null,
    },

    // Helper computed hrefs
    get mailtoHref() {
      return `mailto:${this.email}`
    },
    get telHref() {
      return `tel:${this.phoneHref}`
    },
  }

  return info
}
