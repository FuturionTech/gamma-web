import { defineStore } from 'pinia'

interface Partner {
  id: string
  name: string
  logo_url: string | null
  website_url: string | null
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

interface Stat {
  id: string
  label: string
  value: string
  icon: string | null
}

export const useHomepageStore = defineStore('homepageStore', {
  state: () => ({
    partners: [] as Partner[],
    testimonials: [] as Testimonial[],
    stats: [] as Stat[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchPartners(limit = 10) {
      this.loading = true
      this.error = null
      try {
        const { query } = useGraphql()
        const data = await query<{ partners: Partner[] }>(`
          query Partners($limit: Int) {
            partners(limit: $limit) {
              id name logo_url website_url is_active
            }
          }
        `, { limit })
        this.partners = data.partners ?? []
      } catch (e: any) {
        this.error = e.message || 'Failed to fetch partners.'
        this.partners = []
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

    async fetchStats(limit = 10) {
      this.loading = true
      this.error = null
      try {
        const { query } = useGraphql()
        const data = await query<{ stats: Stat[] }>(`
          query Stats($limit: Int) {
            stats(limit: $limit) {
              id label value icon
            }
          }
        `, { limit })
        this.stats = data.stats ?? []
      } catch (e: any) {
        this.error = e.message || 'Failed to fetch stats.'
        this.stats = []
      } finally {
        this.loading = false
      }
    },
  },
})
