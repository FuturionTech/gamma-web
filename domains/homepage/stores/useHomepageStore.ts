import { defineStore } from 'pinia';
import { useRuntimeConfig } from '#app';

export const useHomepageStore = defineStore('aboutusStore', {
    state: () => ({
        partners: [],
        banners: [],
        loading: false,
        error: null,
    }),

    actions: {
        async getPatners(numberOfPartners: number) {
            this.loading = true;
            this.error = null;

            try {
                // Check if running in client side and GraphQL is available
                if (process.client && typeof GqlPartnersQuery === 'function') {
                    const config = useRuntimeConfig();
                    const applicationId = config.public.applicationId;

                    const response = await GqlPartnersQuery({
                        first: numberOfPartners,
                        application_id: applicationId,
                    });

                    if (response && response.partners && response.partners.data) {
                        this.partners = response.partners.data;
                    } else {
                        this.error = 'No partners found.';
                    }
                } else {
                    // Fallback data for SSR/SSG
                    this.partners = [
                        {
                            id: 1,
                            name: 'Partner 1',
                            logo: '/assets/img/landing/corporate/partners/01.png'
                        },
                        {
                            id: 2,
                            name: 'Partner 2',
                            logo: '/assets/img/landing/corporate/partners/02.png'
                        }
                    ];
                }
            } catch (error) {
                this.error = error.message || 'Failed to fetch partners.';
                // Provide fallback on error
                this.partners = [
                    {
                        id: 1,
                        name: 'Partner 1',
                        logo: '/assets/img/landing/corporate/partners/01.png'
                    }
                ];
            } finally {
                this.loading = false;
            }
        },
        
        async getBanners() {
            this.loading = true;
            this.error = null;

            try {
                // Check if running in client side and GraphQL is available
                if (process.client && typeof GqlBannersQuery === 'function') {
                    const config = useRuntimeConfig();
                    const applicationId = config.public.applicationId;

                    const response = await GqlBannersQuery({
                        application_id: applicationId,
                    });

                    if (response && response.banners && response.banners.data) {
                        this.banners = response.banners.data;
                    } else {
                        this.error = 'No banners found.';
                    }
                } else {
                    // Fallback data for SSR/SSG
                    this.banners = [
                        {
                            id: 1,
                            imageUrl: '/assets/img/landing/corporate/hero-bg.jpg',
                            title: 'Gamma Neutral Consulting',
                            description: 'Expert consulting services for your business needs'
                        }
                    ];
                }
            } catch (error) {
                this.error = error.message || 'Failed to fetch banners.';
                // Provide fallback on error
                this.banners = [
                    {
                        id: 1,
                        imageUrl: '/assets/img/landing/corporate/hero-bg.jpg',
                        title: 'Gamma Neutral Consulting',
                        description: 'Expert consulting services for your business needs'
                    }
                ];
            } finally {
                this.loading = false;
            }
        }
    }
});
