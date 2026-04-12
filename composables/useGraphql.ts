/**
 * Shared GraphQL composable for making queries/mutations
 * against the gamma-api GraphQL endpoint.
 *
 * Uses $fetch directly against the GraphQL endpoint from runtimeConfig.
 * Automatically sends the current i18n locale via the Accept-Language
 * header so the backend returns translated content without a locale
 * parameter in the query.
 *
 * The locale is resolved at REQUEST TIME (not at composable init time)
 * to ensure that locale switches mid-session are picked up by subsequent
 * API calls — even when called from Pinia store actions or watchers
 * where the Vue component context may not be available.
 */
export function useGraphql() {
  const config = useRuntimeConfig()
  const endpoint = config.public.graphqlEndpoint as string

  /**
   * Resolve the current locale at request time from multiple sources:
   * 1. vue-i18n instance (if available in current context)
   * 2. localStorage (persisted by useI18n().setLocale)
   * 3. Fallback to 'en'
   */
  function getCurrentLocale(): string {
    // Try the vue-i18n reactive ref first
    try {
      const { locale } = useI18n()
      if (locale.value && locale.value !== 'en') return locale.value
      if (locale.value === 'en') return 'en'
    } catch {
      // useI18n() may throw outside component context — that's OK
    }

    // Fallback: read from localStorage (set by useI18n().setLocale)
    if (process.client) {
      const saved = localStorage.getItem('locale')
      if (saved) return saved
    }

    return 'en'
  }

  async function query<T = any>(
    gqlQuery: string,
    variables: Record<string, unknown> = {}
  ): Promise<T> {
    const response = await $fetch<{ data: T; errors?: { message: string }[] }>(
      endpoint,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': getCurrentLocale(),
        },
        body: JSON.stringify({ query: gqlQuery, variables }),
      }
    )

    if (response.errors?.length) {
      const msg = response.errors.map((e) => e.message).join(', ')
      throw new Error(msg)
    }

    return response.data
  }

  async function mutation<T = any>(
    gqlMutation: string,
    variables: Record<string, unknown> = {}
  ): Promise<T> {
    return query<T>(gqlMutation, variables)
  }

  return { query, mutation }
}
