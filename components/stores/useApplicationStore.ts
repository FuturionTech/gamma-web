import { defineStore } from 'pinia';
import Swal from 'sweetalert2';
import { useRuntimeConfig } from '#app';

export const useApplicationStore = defineStore('applicationStore', {
  state: () => ({
    application: null,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchApplication() {
      this.loading = true;
      this.error = null;

      try {
        const config = useRuntimeConfig();
        const applicationId = config.public.applicationId;
        const response = await GqlGetApplication({ id: applicationId });

        if (response && response.application) {
          this.application = response.application; 
          
        } else {
          this.error = 'Application not found.';
          
        }
      } catch (error) {
        this.error = error.message || 'Failed to fetch application.';
        
      } finally {
        this.loading = false;
      }
    },
  },
});