/**
 * Global Schema.org JSON-LD for Organization and WebSite.
 * Call once from layouts/default.vue — injected on every page.
 */
export const useSchemaOrg = () => {
  const company = useCompanyInfo()
  const siteUrl = 'https://gammaneutral.com'

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: company.name,
    url: siteUrl,
    logo: `${siteUrl}/gamma-favicon.svg`,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.province,
      postalCode: company.address.postalCode,
      addressCountry: 'CA',
    },
    areaServed: [
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Country', name: 'United States' },
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Data Engineering',
      'Cloud Architecture',
      'Cybersecurity',
      'Business Intelligence',
      'Big Data',
      'Machine Learning',
    ],
    foundingDate: '2025',
    foundingLocation: {
      '@type': 'Place',
      name: 'Toronto, Ontario, Canada',
    },
  }

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'Gamma Neutral Consulting',
    url: siteUrl,
    publisher: { '@id': `${siteUrl}/#organization` },
    inLanguage: ['en', 'fr'],
  }

  useHead({
    script: [
      { type: 'application/ld+json', innerHTML: JSON.stringify(organizationSchema) },
      { type: 'application/ld+json', innerHTML: JSON.stringify(webSiteSchema) },
    ],
  })
}
