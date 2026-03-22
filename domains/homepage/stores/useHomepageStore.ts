import { defineStore } from 'pinia'

interface Service {
  id: string
  title: string
  description: string
  slug: string
  icon: string | null
  short_description: string | null
  category: string | null
  is_active: boolean
  order: number
  features: { id: string; title: string; description: string | null }[]
}

interface Solution {
  id: string
  title: string
  subtitle: string | null
  description: string | null
  slug: string
  icon: string | null
  icon_color: string | null
  is_active: boolean
  order: number
}

interface Partner {
  id: string
  name: string
  logo_url: string | null
  website_url: string | null
  is_active: boolean
  order: number
}

interface Client {
  id: string
  name: string
  logo_url: string | null
  industry: string | null
  website_url: string | null
  is_active: boolean
  order: number
}

interface Testimonial {
  id: string
  name: string
  content: string
  position: string | null
  company: string | null
  rating: number | null
  image_url: string | null
  is_active: boolean
}

interface Stat {
  id: string
  label: string
  value: string
  icon: string | null
  is_active: boolean
  order: number
}

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string | null
  category: string | null
  status: string
  featured_image_url: string | null
  published_at: string | null
  author: { name: string; role: string | null } | null
}

export const useHomepageStore = defineStore('homepageStore', {
  state: () => ({
    services: [] as Service[],
    solutions: [] as Solution[],
    partners: [] as Partner[],
    clients: [] as Client[],
    testimonials: [] as Testimonial[],
    stats: [] as Stat[],
    blogPosts: [] as BlogPost[],
    loadingServices: false,
    loadingSolutions: false,
    loadingPartners: false,
    loadingClients: false,
    loadingTestimonials: false,
    loadingStats: false,
    loadingBlogPosts: false,
    error: null as string | null,
  }),

  actions: {
    async fetchServices(limit = 6, locale = 'en') {
      this.loadingServices = true
      try {
        const { query } = useGraphql()
        const data = await query<{ services: Service[] }>(`
          query Services($limit: Int, $is_active: Boolean, $locale: String) {
            services(limit: $limit, is_active: $is_active, locale: $locale) {
              id title description slug icon short_description category is_active order
              features { id title description }
            }
          }
        `, { limit, is_active: true, locale })
        this.services = data.services ?? []
      } catch (e: any) {
        this.error = e.message || 'Failed to fetch services.'
      } finally {
        this.loadingServices = false
      }
    },

    async fetchSolutions(limit = 6, locale = 'en') {
      this.loadingSolutions = true
      try {
        const { query } = useGraphql()
        const data = await query<{ solutions: Solution[] }>(`
          query Solutions($limit: Int, $is_active: Boolean, $locale: String) {
            solutions(limit: $limit, is_active: $is_active, locale: $locale) {
              id title subtitle description slug icon icon_color is_active order
            }
          }
        `, { limit, is_active: true, locale })
        this.solutions = data.solutions ?? []
      } catch (e: any) {
        this.error = e.message || 'Failed to fetch solutions.'
      } finally {
        this.loadingSolutions = false
      }
    },

    async fetchPartners(first = 10) {
      this.loadingPartners = true
      try {
        const { query } = useGraphql()
        const data = await query<{ partners: { data: Partner[] } }>(`
          query Partners($first: Int!) {
            partners(first: $first) {
              data { id name logo_url website_url is_active order }
            }
          }
        `, { first })
        this.partners = data.partners?.data ?? []
      } catch (e: any) {
        this.error = e.message || 'Failed to fetch partners.'
      } finally {
        this.loadingPartners = false
      }
    },

    async fetchClients(limit = 10) {
      this.loadingClients = true
      try {
        const { query } = useGraphql()
        const data = await query<{ clients: Client[] }>(`
          query Clients($limit: Int, $is_active: Boolean) {
            clients(limit: $limit, is_active: $is_active) {
              id name logo_url industry website_url is_active order
            }
          }
        `, { limit, is_active: true })
        this.clients = data.clients ?? []
      } catch (e: any) {
        this.error = e.message || 'Failed to fetch clients.'
      } finally {
        this.loadingClients = false
      }
    },

    async fetchTestimonials(first = 10) {
      this.loadingTestimonials = true
      try {
        const { query } = useGraphql()
        const data = await query<{ testimonials: { data: Testimonial[] } }>(`
          query Testimonials($first: Int!) {
            testimonials(first: $first) {
              data { id name content position company rating image_url is_active }
            }
          }
        `, { first })
        this.testimonials = (data.testimonials?.data ?? []).filter(t => t.is_active)
      } catch (e: any) {
        this.error = e.message || 'Failed to fetch testimonials.'
      } finally {
        this.loadingTestimonials = false
      }
    },

    async fetchStats(limit = 10) {
      this.loadingStats = true
      try {
        const { query } = useGraphql()
        const data = await query<{ stats: Stat[] }>(`
          query Stats($limit: Int, $is_active: Boolean) {
            stats(limit: $limit, is_active: $is_active) {
              id label value icon is_active order
            }
          }
        `, { limit, is_active: true })
        this.stats = data.stats ?? []
      } catch (e: any) {
        this.error = e.message || 'Failed to fetch stats.'
      } finally {
        this.loadingStats = false
      }
    },

    async fetchBlogPosts(limit = 3) {
      this.loadingBlogPosts = true
      try {
        const { query } = useGraphql()
        const data = await query<{ blogPosts: BlogPost[] }>(`
          query BlogPosts($limit: Int, $status: PostStatus) {
            blogPosts(limit: $limit, status: $status) {
              id title slug excerpt category status featured_image_url published_at
              author { name role }
            }
          }
        `, { limit, status: 'PUBLISHED' })
        this.blogPosts = data.blogPosts ?? []
      } catch (e: any) {
        this.error = e.message || 'Failed to fetch blog posts.'
      } finally {
        this.loadingBlogPosts = false
      }
    },

    /** Fetch all homepage data in parallel */
    async fetchAll(locale = 'en') {
      await Promise.allSettled([
        this.fetchServices(6, locale),
        this.fetchSolutions(6, locale),
        this.fetchStats(10),
        this.fetchTestimonials(10),
        this.fetchPartners(10),
        this.fetchClients(10),
        this.fetchBlogPosts(3),
      ])
    },
  },
})
