import { defineStore } from 'pinia';

export const useHomepageStore = defineStore('homepageStore', {
    state: () => ({
        partners: [] as any[],
        banners: [] as any[],
        loading: false,
        error: null as string | null,
    }),

    actions: {
        async getPatners(numberOfPartners: number) {
            this.loading = true;
            this.error = null;

            try {
                if (process.client && typeof GqlPartnersQuery === 'function') {
                    const response = await GqlPartnersQuery({
                        first: numberOfPartners,
                    });

                    if (response && response.partners && response.partners.data) {
                        this.partners = response.partners.data;
                    } else {
                        this.error = 'No partners found.';
                    }
                } else {
                    this.partners = [];
                }
            } catch (error: any) {
                this.error = error.message || 'Failed to fetch partners.';
                this.partners = [];
            } finally {
                this.loading = false;
            }
        },

        async getBanners() {
            this.loading = true;
            this.error = null;

            try {
                if (process.client && typeof GqlBannersQuery === 'function') {
                    const response = await GqlBannersQuery();

                    if (response && response.banners && response.banners.data) {
                        this.banners = response.banners.data;
                    } else {
                        this.error = 'No banners found.';
                    }
                } else {
                    this.banners = [];
                }
            } catch (error: any) {
                this.error = error.message || 'Failed to fetch banners.';
                this.banners = [];
            } finally {
                this.loading = false;
            }
        }
    }
});
