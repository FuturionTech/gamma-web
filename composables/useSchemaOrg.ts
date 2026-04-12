/**
 * Global Schema.org JSON-LD for Organization and WebSite.
 * Call once from layouts/default.vue — injected on every page.
 */
export const useSchemaOrg = () => {
  const company = useCompanyInfo()
  const siteUrl = 'https://gammaneutral.com'

  // Collect non-null social profile URLs for sameAs
  const sameAs: string[] = []
  if (company.social.linkedin) sameAs.push(company.social.linkedin)
  if (company.social.twitter) sameAs.push(company.social.twitter)
  if (company.social.facebook) sameAs.push(company.social.facebook)
  if (company.social.instagram) sameAs.push(company.social.instagram)
  if (company.social.github) sameAs.push(company.social.github)

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: company.name,
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/og-image.png`,
      width: 1200,
      height: 630,
    },
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.province,
      postalCode: company.address.postalCode,
      addressCountry: 'CA',
    },
    ...(sameAs.length > 0 && { sameAs }),
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
    inLanguage: 'en',
  }

  useHead({
    script: [
      { type: 'application/ld+json', innerHTML: JSON.stringify(organizationSchema) },
      { type: 'application/ld+json', innerHTML: JSON.stringify(webSiteSchema) },
    ],
  })
}
