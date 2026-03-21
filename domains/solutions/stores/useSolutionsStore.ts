import { defineStore } from 'pinia'

export interface ApiSolutionFeature {
  id: string
  title: string
  description: string
}

export interface ApiSolution {
  id: string
  title: string
  description: string
  slug: string
  is_active: boolean
  features: ApiSolutionFeature[]
  benefits: ApiSolutionFeature[]
}

export const useSolutionsStore = defineStore('solutionsStore', {
  state: () => ({
    solutions: [] as ApiSolution[],
    currentSolution: null as ApiSolution | null,
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchSolutions(limit = 10) {
      this.loading = true
      this.error = null
      try {
        const { query } = useGraphql()
        const data = await query<{ solutions: ApiSolution[] }>(`
          query Solutions($limit: Int) {
            solutions(limit: $limit) {
              id title description slug is_active
              features { id title description }
              benefits { id title description }
            }
          }
        `, { limit })
        this.solutions = data.solutions ?? []
      } catch (e: any) {
        this.error = e.message || 'Failed to fetch solutions.'
        this.solutions = []
      } finally {
        this.loading = false
      }
    },

    async fetchSolutionBySlug(slug: string) {
      this.loading = true
      this.error = null
      this.currentSolution = null
      try {
        const { query } = useGraphql()
        const data = await query<{ solution: ApiSolution | null }>(`
          query Solution($slug: String!) {
            solution(slug: $slug) {
              id title description slug is_active
              features { id title description }
              benefits { id title description }
            }
          }
        `, { slug })
        this.currentSolution = data.solution ?? null
      } catch (e: any) {
        this.error = e.message || 'Failed to fetch solution.'
        this.currentSolution = null
      } finally {
        this.loading = false
      }
    },
  },
})
