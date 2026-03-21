import { defineStore } from 'pinia'

interface Solution {
  id: string
  title: string
  description: string
  slug: string
  industry: string | null
  category: string | null
  is_active: boolean
}

export const useSolutionsStore = defineStore('solutionsStore', {
  state: () => ({
    solutions: [] as Solution[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchSolutions(limit = 10) {
      this.loading = true
      this.error = null
      try {
        const { query } = useGraphql()
        const data = await query<{ solutions: Solution[] }>(`
          query Solutions($limit: Int) {
            solutions(limit: $limit) {
              id title description slug industry category is_active
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
  },
})
