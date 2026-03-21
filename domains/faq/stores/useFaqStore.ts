import { defineStore } from 'pinia'

interface Faq {
  id: string
  question: string
  answer: string
  category: string | null
  is_active: boolean
}

export const useFaqStore = defineStore('faqStore', {
  state: () => ({
    faqs: [] as Faq[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchFaqs(limit = 20) {
      this.loading = true
      this.error = null
      try {
        const { query } = useGraphql()
        const data = await query<{ faqs: Faq[] }>(`
          query Faqs($limit: Int) {
            faqs(limit: $limit) {
              id question answer category is_active
            }
          }
        `, { limit })
        this.faqs = (data.faqs ?? []).filter((f) => f.is_active)
      } catch (e: any) {
        this.error = e.message || 'Failed to fetch FAQs.'
        this.faqs = []
      } finally {
        this.loading = false
      }
    },
  },
})
