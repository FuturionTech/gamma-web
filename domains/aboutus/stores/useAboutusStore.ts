import { defineStore } from 'pinia';
import { useRuntimeConfig } from '#app';

export const useAboutusStore = defineStore('aboutusStore', {
    state: () => ({
        teams: [],
        certifications : [],
        loading: false,
        error: null,
    }),

    actions: {
        async getTeams(numberOfTeams: number) {
            this.loading = true;
            this.error = null;

            try {
                const config = useRuntimeConfig();
                const applicationId = config.public.applicationId;

                const response = await GqlTeamsQuery({
                    first: numberOfTeams,
                    application_id: applicationId,
                });
                this.teams = response.teams.data;
            } catch (error) {
                this.error = error.message || 'Failed to fetch teams.';
            } finally {
                this.loading = false;
            }
        },

        async getCertifications() {
            this.loading = true;
            this.error = null;

            try {
                const config = useRuntimeConfig();
                const applicationId = config.public.applicationId;

                const response = await GqlCertificationsQuery({
                    application_id: applicationId,
                });
                this.certifications = response.certifications.data;
            } catch (error) {
                this.error = error.message || 'Failed to fetch certifications.';
            } finally {
                this.loading = false;
            }
        },
        
    }
});
