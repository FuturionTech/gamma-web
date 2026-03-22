import { defineStore } from 'pinia'

interface ServiceFeature {
  id: string
  title: string
  description: string | null
}

interface Service {
  id: string
  title: string
  title_fr: string | null
  description: string
  description_fr: string | null
  slug: string
  icon: string | null
  category: string | null
  short_description: string | null
  short_description_fr: string | null
  is_active: boolean
  order: number
  features: ServiceFeature[]
  benefits: ServiceFeature[]
}

export const useServicesStore = defineStore('servicespageStore', {
  state: () => ({
    services: [] as Service[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchServices(limit = 10) {
      this.loading = true
      this.error = null
      try {
        const { query } = useGraphql()
        const data = await query<{ services: Service[] }>(`
          query Services($limit: Int, $is_active: Boolean) {
            services(limit: $limit, is_active: $is_active) {
              id title title_fr description description_fr slug icon category short_description short_description_fr is_active order
              features { id title description }
              benefits { id title description }
            }
          }
        `, { limit, is_active: true })
        this.services = data.services ?? []
      } catch (e: any) {
        this.error = e.message || 'Failed to fetch services.'
        this.services = []
      } finally {
        this.loading = false
      }
    },
  },
})
