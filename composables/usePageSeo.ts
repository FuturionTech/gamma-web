interface SeoMetaOptions {
  title: string | (() => string)
  description: string | (() => string)
  path: string | (() => string)
  ogType?: string
  ogImage?: string
  noindex?: boolean
}

/**
 * Adds Open Graph, Twitter Card, canonical, and lang tags.
 * Supports both static strings and getter functions for reactive SSR-safe usage.
 * Call from every page's <script setup>.
 */
export const usePageSeo = (options: SeoMetaOptions) => {
  const siteUrl = 'https://gammaneutral.com'

  const resolve = (v: string | (() => string)): string =>
    typeof v === 'function' ? v() : v

  useHead(() => {
    const title = resolve(options.title)
    const description = resolve(options.description)
    const path = resolve(options.path)
    const canonicalUrl = `${siteUrl}${path}`
    const ogImage = options.ogImage || `${siteUrl}/og-image.png`

    return {
      link: [
        { rel: 'canonical', href: canonicalUrl },
      ],
      meta: [
        { property: 'og:type', content: options.ogType || 'website' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: canonicalUrl },
        { property: 'og:image', content: ogImage },
        { property: 'og:site_name', content: 'Gamma Neutral Consulting' },
        { property: 'og:locale', content: 'en_CA' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: ogImage },
        ...(options.noindex ? [{ name: 'robots', content: 'noindex, nofollow' }] : []),
      ],
      htmlAttrs: {
        lang: 'en',
      },
    }
  })
}
