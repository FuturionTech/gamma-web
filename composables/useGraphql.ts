/**
 * Shared GraphQL composable for making queries/mutations
 * against the gamma-api GraphQL endpoint.
 *
 * Uses $fetch directly against the GraphQL endpoint from runtimeConfig.
 */
export function useGraphql() {
  const config = useRuntimeConfig()
  const endpoint = config.public.graphqlEndpoint as string

  async function query<T = any>(
    gqlQuery: string,
    variables: Record<string, unknown> = {}
  ): Promise<T> {
    const response = await $fetch<{ data: T; errors?: { message: string }[] }>(
      endpoint,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
