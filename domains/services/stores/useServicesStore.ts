import { defineStore } from 'pinia';

export const useServicesStore = defineStore('servicespageStore', {
  state: () => ({
    testimonials: [] as any[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async getTestimonials(numberOfTestimonials: number) {
      this.loading = true;
      this.error = null;
      try {
        const response = await GqlTestimonialsQuery({
          limit: numberOfTestimonials,
        });

        if (response && response.testimonials) {
          this.testimonials = response.testimonials.data;
        } else {
          this.error = 'No testimonials found.';
        }
      } catch (error: any) {
        this.error = error.message || 'Failed to fetch testimonials.';
      } finally {
        this.loading = false;
      }
    },
  }
});
