interface SeoMetaOptions {
  title: string
  description: string
  path: string
  ogType?: string
  ogImage?: string
  noindex?: boolean
}

/**
 * Adds Open Graph, Twitter Card, canonical, and hreflang tags.
 * Call from every page's <script setup>.
 */
export const usePageSeo = (options: SeoMetaOptions) => {
  const siteUrl = 'https://gammaneutral.com'
  const canonicalUrl = `${siteUrl}${options.path}`
  const ogImage = options.ogImage || `${siteUrl}/og-image.png`

  useHead({
    link: [
      { rel: 'canonical', href: canonicalUrl },
      { rel: 'alternate', hreflang: 'en', href: canonicalUrl },
      { rel: 'alternate', hreflang: 'fr', href: canonicalUrl },
      { rel: 'alternate', hreflang: 'x-default', href: canonicalUrl },
    ],
    meta: [
      { property: 'og:type', content: options.ogType || 'website' },
      { property: 'og:title', content: options.title },
      { property: 'og:description', content: options.description },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:image', content: ogImage },
      { property: 'og:site_name', content: 'Gamma Neutral Consulting' },
      { property: 'og:locale', content: 'en_CA' },
      { property: 'og:locale:alternate', content: 'fr_CA' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: options.title },
      { name: 'twitter:description', content: options.description },
      { name: 'twitter:image', content: ogImage },
      ...(options.noindex ? [{ name: 'robots', content: 'noindex, nofollow' }] : []),
    ],
    htmlAttrs: {
      lang: 'en',
    },
  })
}
