// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-09-18',
    devtools: { enabled: true },
    ssr: false, // Temporarily disable SSR for stable production build

    runtimeConfig: {
      public: {
        applicationId: process.env.APPLICATION_ID,
        siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
        graphqlEndpoint: process.env.GQL_HOST || 'https://gamma.ngrok.app/graphql'
      },
    },
    site: {
      url: process.env.NUXT_PUBLIC_SITE_URL,
    },
    sitemap: {
      hostname: process.env.NUXT_PUBLIC_SITE_URL,
    },
    imports: {
        autoImport: true,
    },
    app: {
        head: {
            title: 'Gamma Neutral Consulting Inc.',
            meta: [
                { name: 'theme-color', content: '#8b5cf6' },
                { name: 'msapplication-TileColor', content: '#8b5cf6' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ],
            script: [
                {src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', tagPosition: 'bodyClose'},
                {src: '/assets/vendor/parallax-js/dist/parallax.min.js', tagPosition: 'bodyClose'},
                {src: '/assets/vendor/swiper/swiper-bundle.min.js', tagPosition: 'bodyClose'},
                {src: '/assets/vendor/aos/dist/aos.js', tagPosition: 'bodyClose'},
                {src: '/assets/vendor/@lottiefiles/lottie-player/dist/lottie-player.js', tagPosition: 'bodyClose'},
                {src: '/assets/vendor/img-comparison-slider/dist/index.js', tagPosition: 'bodyClose'},
                {src: '/assets/js/theme.js', tagPosition: 'bodyClose'},
                {src: '/assets/js/theme-switcher.js', tagPosition: 'bodyClose'},
                {src: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.min.js', tagPosition: 'bodyClose'},
            ],
            link: [
                {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css'},
                {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css'},
                {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css'}
            ]
        },
    },
    modules: [
        // Core modules first
        '@pinia/nuxt',

        // Load internal feature modules. Please keep this list
        // ordered by alphabetic order A-Z
        '~/domains/aboutus/index.ts',
        '~/domains/careers/index.ts',
        '~/domains/contactus/index.ts',
        '~/domains/faq/index.ts',
        '~/domains/homepage/index.ts',
        '~/domains/privacy-policy/index.ts',
        '~/domains/services/index.ts',
        '~/domains/solutions/index.ts',

        'nuxt-swiper',
        "@nuxt/image",
        'nuxt-simple-sitemap',
        '@i2d/nuxt-pdf-frame'
    ],

    css: [
        "bootstrap/dist/css/bootstrap.min.css",
        "~/assets/scss/theme.scss",  // Existing stylesheet
        "~/assets/vendor/swiper/swiper-bundle.min.css",  // Swiper styles
        "~/assets/vendor/aos/src/sass/aos.scss",  // AOS animation styles
        "~/assets/icons/around-icons.min.css",  // Icon font styles
    ],

    vite: {
        resolve: {
            alias: {
                // assets alias
                '@assets': '/assets',
            },
        },
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@import "@/assets/scss/variables.scss";',
                },
            },
        },
    },
    image: {
        cloudinary: {
          baseURL: 'https://res.cloudinary.com/dsj9xpvap/image/fetch/'
        },
        domains: ['https://arndhub-prod.s3.eu-west-3.amazonaws.com'],
        provider: 'cloudinary',
        loading:"lazy",
        modifiers: {
          effect: 'sharpen:100',
          quality: 'auto:best',
        },
      },


})
