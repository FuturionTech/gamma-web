import { defineStore } from 'pinia';

export const useAboutusStore = defineStore('aboutusStore', {
    state: () => ({
        teams: [] as any[],
        certifications: [] as any[],
        loading: false,
        error: null as string | null,
    }),

    actions: {
        async getTeams(numberOfTeams: number) {
            this.loading = true;
            this.error = null;

            try {
                const response = await GqlTeamsQuery({
                    first: numberOfTeams,
                });
                this.teams = response.teams.data;
            } catch (error: any) {
                this.error = error.message || 'Failed to fetch teams.';
            } finally {
                this.loading = false;
            }
        },

        async getCertifications() {
            this.loading = true;
            this.error = null;

            try {
                const response = await GqlCertificationsQuery();
                this.certifications = response.certifications.data;
            } catch (error: any) {
                this.error = error.message || 'Failed to fetch certifications.';
            } finally {
                this.loading = false;
            }
        },
    }
});
