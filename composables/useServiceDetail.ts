/**
 * Service detail composable — fetches one service by slug from the gamma-api
 * GraphQL endpoint and adapts the API response to the legacy shape that
 * `domains/services/pages/service-detail.vue` expects.
 *
 * The adapter flattens the API's nested object arrays (e.g.,
 * `painPoints: [{ text }]`) into primitive string arrays (`painPoints: string[]`)
 * so the template can render `{{ point }}` unchanged.
 *
 * Locale: the underlying `useGraphql()` composable already sends
 * `Accept-Language` based on `useI18n().locale.value`, so the API returns
 * translations in the correct locale automatically.
 *
 * Fallback: callers can fall back to i18n-loaded content if this composable
 * returns null (e.g., API offline, service not seeded, network error). This
 * composable does NOT handle the fallback itself — see service-detail.vue
 * for the merging logic.
 */

export interface ApiService {
  id: string
  slug: string
  icon: string | null
  icon_color: string | null
  category: string | null
  is_active: boolean
  title: string
  short_description: string | null
  description: string | null
  meta_title: string | null
  meta_description: string | null
  meta_keywords: string | null
  hero: {
    tagline: string | null
    headline: string | null
    subheadline: string | null
    ctaPrimaryLabel: string | null
    ctaSecondaryLabel: string | null
    stats: Array<{ icon: string | null; value: string; label: string }>
  }
  challenge: {
    title: string | null
    description: string | null
    painPoints: Array<{ text: string }>
  } | null
  howWeDeliver: {
    title: string | null
    description: string | null
    items: Array<{ icon: string | null; text: string }>
  } | null
  capabilities: {
    title: string | null
    groups: Array<{
      icon: string | null
      name: string
      items: Array<{ name: string }>
    }>
  } | null
  keyUseCases: {
    title: string | null
    description: string | null
    items: Array<{ text: string }>
  } | null
  ourApproach: {
    title: string | null
    description: string | null
    items: Array<{
      icon: string | null
      title: string
      description: string | null
    }>
  } | null
  industryApplications: {
    title: string | null
    description: string | null
    industries: Array<{
      icon: string | null
      name: string
      description: string | null
      useCases: Array<{ text: string }>
    }>
  } | null
  technologies: {
    title: string | null
    description: string | null
    items: Array<{ icon: string | null; name: string }>
  } | null
  businessImpact: {
    title: string | null
    description: string | null
    items: Array<{
      icon: string | null
      title: string
      description: string | null
    }>
  } | null
  differentiators: {
    title: string | null
    points: Array<{
      icon: string | null
      title: string
      description: string | null
    }>
  } | null
  closing: {
    title: string | null
    subtitle: string | null
  }
  features: Array<{
    id: string
    title: string
    description: string | null
    icon: string | null
  }>
  benefits: Array<{
    id: string
    title: string
    description: string | null
    icon: string | null
  }>
}

/**
 * Legacy shape consumed by service-detail.vue (and service-detail.vue only).
 * Matches the shape that was previously read from `tm('services.details.items')`.
 */
export interface LegacyServiceDetail {
  name: string
  icon: string
  hero: {
    tagline: string
    headline: string
    subheadline: string
    ctaPrimary: string
    ctaSecondary: string
    stats: Array<{ value: string; label: string }>
  }
  challenge?: {
    title: string
    description: string
    painPoints: string[]
  }
  howWeDeliver: {
    title: string
    description: string
    items: string[]
  }
  capabilities?: {
    title: string
    groups: Array<{ name: string; icon: string; items: string[] }>
  }
  keyUseCases: {
    title: string
    description: string
    items: string[]
  }
  ourApproach: {
    title: string
    description: string
    items: Array<{ title: string; description: string }>
  }
  industryApplications?: {
    title: string
    description: string
    industries: Array<{
      name: string
      icon: string
      description: string
      useCases: string[]
    }>
  }
  technologies: {
    title: string
    description: string
    items: string[]
  }
  businessImpact: {
    title: string
    description: string
    items: string[]
  }
  differentiators?: {
    title: string
    points: Array<{ title: string; description: string; icon: string }>
  }
  closing: {
    title: string
    subtitle: string
  }
}

const SERVICE_DETAIL_QUERY = `
  query ServiceDetail($slug: String!) {
    service(slug: $slug) {
      id
      slug
      icon
      icon_color
      category
      is_active
      title
      short_description
      description
      meta_title
      meta_description
      meta_keywords
      hero {
        tagline
        headline
        subheadline
        ctaPrimaryLabel
        ctaSecondaryLabel
        stats {
          icon
          value
          label
        }
      }
      challenge {
        title
        description
        painPoints { text }
      }
      howWeDeliver {
        title
        description
        items { icon text }
      }
      capabilities {
        title
        groups {
          icon
          name
          items { name }
        }
      }
      keyUseCases {
        title
        description
        items { text }
      }
      ourApproach {
        title
        description
        items { icon title description }
      }
      industryApplications {
        title
        description
        industries {
          icon
          name
          description
          useCases { text }
        }
      }
      technologies {
        title
        description
        items { icon name }
      }
      businessImpact {
        title
        description
        items { icon title description }
      }
      differentiators {
        title
        points { icon title description }
      }
      closing {
        title
        subtitle
      }
      features {
        id
        title
        description
        icon
      }
      benefits {
        id
        title
        description
        icon
      }
    }
  }
`

/**
 * Adapt the API response to the legacy shape used by service-detail.vue.
 * Returns null if `api` is null (service not found).
 */
export function adaptServiceDetail(api: ApiService | null): LegacyServiceDetail | null {
  if (!api) return null

  return {
    name: api.title,
    icon: api.icon ?? '',
    hero: {
      tagline: api.hero.tagline ?? '',
      headline: api.hero.headline ?? api.title,
      subheadline: api.hero.subheadline ?? '',
      ctaPrimary: api.hero.ctaPrimaryLabel ?? '',
      ctaSecondary: api.hero.ctaSecondaryLabel ?? '',
      stats: api.hero.stats.map((s) => ({
        value: s.value,
        label: s.label,
      })),
    },
    challenge: api.challenge
      ? {
          title: api.challenge.title ?? '',
          description: api.challenge.description ?? '',
          painPoints: api.challenge.painPoints.map((p) => p.text),
        }
      : undefined,
    howWeDeliver: api.howWeDeliver
      ? {
          title: api.howWeDeliver.title ?? '',
          description: api.howWeDeliver.description ?? '',
          items: api.howWeDeliver.items.map((i) => i.text),
        }
      : { title: '', description: '', items: [] },
    capabilities: api.capabilities
      ? {
          title: api.capabilities.title ?? '',
          groups: api.capabilities.groups.map((g) => ({
            name: g.name,
            icon: g.icon ?? '',
            items: g.items.map((i) => i.name),
          })),
        }
      : undefined,
    keyUseCases: api.keyUseCases
      ? {
          title: api.keyUseCases.title ?? '',
          description: api.keyUseCases.description ?? '',
          items: api.keyUseCases.items.map((u) => u.text),
        }
      : { title: '', description: '', items: [] },
    ourApproach: api.ourApproach
      ? {
          title: api.ourApproach.title ?? '',
          description: api.ourApproach.description ?? '',
          items: api.ourApproach.items.map((s) => ({
            title: s.title,
            description: s.description ?? '',
          })),
        }
      : { title: '', description: '', items: [] },
    industryApplications: api.industryApplications
      ? {
          title: api.industryApplications.title ?? '',
          description: api.industryApplications.description ?? '',
          industries: api.industryApplications.industries.map((ind) => ({
            name: ind.name,
            icon: ind.icon ?? '',
            description: ind.description ?? '',
            useCases: ind.useCases.map((uc) => uc.text),
          })),
        }
      : undefined,
    technologies: api.technologies
      ? {
          title: api.technologies.title ?? '',
          description: api.technologies.description ?? '',
          items: api.technologies.items.map((t) => t.name),
        }
      : { title: '', description: '', items: [] },
    businessImpact: api.businessImpact
      ? {
          title: api.businessImpact.title ?? '',
          description: api.businessImpact.description ?? '',
          // Template renders each item as a string; flatten to title.
          items: api.businessImpact.items.map((b) => b.title),
        }
      : { title: '', description: '', items: [] },
    differentiators: api.differentiators
      ? {
          title: api.differentiators.title ?? '',
          points: api.differentiators.points.map((d) => ({
            title: d.title,
            description: d.description ?? '',
            icon: d.icon ?? '',
          })),
        }
      : undefined,
    closing: {
      title: api.closing.title ?? '',
      subtitle: api.closing.subtitle ?? '',
    },
  }
}

/**
 * Fetch a single service's detail tree by slug.
 *
 * Returns reactive state:
 * - `detail`: the adapted legacy-shape detail or null if not found
 * - `loading`: true while the fetch is in flight
 * - `error`: Error message string if the fetch failed, else null
 * - `refresh`: re-fetch the current slug (e.g., on locale change)
 */
export function useServiceDetail(slug: Ref<string> | string) {
  const slugRef = typeof slug === 'string' ? ref(slug) : slug
  const { query } = useGraphql()

  const detail = ref<LegacyServiceDetail | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchDetail() {
    if (!slugRef.value) {
      detail.value = null
      return
    }
    loading.value = true
    error.value = null
    try {
      const data = await query<{ service: ApiService | null }>(
        SERVICE_DETAIL_QUERY,
        { slug: slugRef.value }
      )
      detail.value = adaptServiceDetail(data.service ?? null)
    } catch (e: any) {
      error.value = e?.message ?? 'Failed to fetch service detail.'
      detail.value = null
    } finally {
      loading.value = false
    }
  }

  // Fetch on mount and on slug change
  watchEffect(() => {
    if (slugRef.value) {
      void fetchDetail()
    } else {
      detail.value = null
    }
  })

  // Also re-fetch when the current i18n locale changes
  const { locale } = useI18n()
  watch(locale, () => {
    void fetchDetail()
  })

  return {
    detail,
    loading,
    error,
    refresh: fetchDetail,
  }
}
