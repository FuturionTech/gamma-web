import { defineStore } from 'pinia'

export interface JobPosition {
  id: string
  title: string
  department: string
  location: string
  job_type: string
  is_remote: boolean
  description: string
  status: string
}

export const useCareersStore = defineStore('careersStore', {
  state: () => ({
    positions: [] as JobPosition[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchPositions() {
      this.loading = true
      this.error = null
      try {
        const { query } = useGraphql()
        const data = await query<{ jobPositions: JobPosition[] }>(`
          query JobPositions {
            jobPositions {
              id title department location job_type is_remote description status
            }
          }
        `)
        this.positions = (data.jobPositions ?? []).filter(
          (p) => p.status === 'ACTIVE',
        )
      } catch (e: unknown) {
        this.error =
          e instanceof Error ? e.message : 'Failed to fetch job positions.'
        this.positions = []
      } finally {
        this.loading = false
      }
    },
  },
})
