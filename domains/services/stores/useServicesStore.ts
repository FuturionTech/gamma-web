import { defineStore } from 'pinia';
import { useRuntimeConfig } from '#app'; 

export const useServicesStore = defineStore('servicespageStore', {
  state: () => ({
    testimonials: [], 
    loading: false,
    error: null,
  }),

  actions: {
    // Récupération des témoignages
    async getTestimonials(numberOfTestimonials) {
      this.loading = true;
      this.error = null;
      try {
        const config = useRuntimeConfig();
        const applicationId = config.public.applicationId;

        const response = await GqlTestimonialsQuery({
          limit: numberOfTestimonials,
          application_id: applicationId,
        });

        if (response && response.testimonials) {
          this.testimonials = response.testimonials.data;
          
        } else {
          this.error = 'Aucun témoignage trouvé.';
        }
      } catch (error) {
        this.error = error.message || 'Une erreur est survenue lors de la récupération des témoignages.';
      } finally {
        this.loading = false;
      }
    },
  }
});
