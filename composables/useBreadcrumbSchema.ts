interface BreadcrumbItem {
  name: string
  url: string
}

/**
 * Injects BreadcrumbList JSON-LD.
 * Pass items from root to current page.
 */
export const useBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  const siteUrl = 'https://gammaneutral.com'

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`,
    })),
  }

  useHead({
    script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }],
  })
}
