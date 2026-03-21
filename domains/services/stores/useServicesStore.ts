import { defineStore } from 'pinia'

interface Service {
  id: string
  title: string
  description: string
  slug: string
  icon: string | null
  category: string | null
  short_description: string | null
  is_active: boolean
}

interface Testimonial {
  id: string
  name: string
  content: string
  position: string | null
  company: string | null
  rating: number | null
  image_url: string | null
}

export const useServicesStore = defineStore('servicespageStore', {
  state: () => ({
    services: [] as Service[],
    testimonials: [] as Testimonial[],
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
          query Services($limit: Int) {
            services(limit: $limit) {
              id title description slug icon category short_description is_active
            }
          }
        `, { limit })
        this.services = data.services ?? []
      } catch (e: any) {
        this.error = e.message || 'Failed to fetch services.'
        this.services = []
      } finally {
        this.loading = false
      }
    },

    async fetchTestimonials(limit = 10) {
      this.loading = true
      this.error = null
      try {
        const { query } = useGraphql()
        const data = await query<{ testimonials: Testimonial[] }>(`
          query Testimonials($limit: Int) {
            testimonials(limit: $limit) {
              id name content position company rating image_url
            }
          }
        `, { limit })
        this.testimonials = data.testimonials ?? []
      } catch (e: any) {
        this.error = e.message || 'Failed to fetch testimonials.'
        this.testimonials = []
      } finally {
        this.loading = false
      }
    },
  },
})
