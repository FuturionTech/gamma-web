import { defineStore } from 'pinia';
import { useRuntimeConfig } from '#app';

export const useApplicationStore = defineStore('applicationStore', {
  state: () => ({
    application: null,
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchApplication() {
      this.loading = true;
      this.error = null;

      try {
        const config = useRuntimeConfig();
        const response = await GqlGetApplication();

        if (response && response.application) {
          this.application = response.application;
        } else {
          this.error = 'Application not found.';
        }
      } catch (error: any) {
        this.error = error.message || 'Failed to fetch application.';
      } finally {
        this.loading = false;
      }
    },
  },
});
