import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import {defineNuxtModule} from "@nuxt/kit";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineNuxtModule({
    // Default configuration options for your module
    defaults: {},
    hooks: {
        // ROUTES
        'pages:extend'(pages) {
            pages.push(
            // Privacy Policy
            {
                name: 'privacy-policy___fr',
                path: '/privacy-policy',
                file: resolve(__dirname, 'pages/privacy.vue'),
            },
            {
                name: 'privacy-policy___en',
                path: '/en/privacy-policy',
                file: resolve(__dirname, 'pages/privacy.vue'),
            },
            // Terms and Conditions
            {
                name: 'terms-of-service___fr',
                path: '/terms-of-service',
                file: resolve(__dirname, 'pages/terms.vue'),
            },
            {
                name: 'terms-of-service___en',
                path: '/en/terms-of-service',
                file: resolve(__dirname, 'pages/terms.vue'),
            })
        },

        // COMPONENTS
        'components:dirs'(dirs) {
            // Add ./components dir to the list
            dirs.push({
                path: resolve(__dirname, 'components'),
            })
        },

        // COMPOSABLES
        /*'autoImports:dirs'(dirs) {
          dirs.push(resolve(__dirname, './composables'))
        },*/
    },
    async setup(moduleOptions, nuxt) {
        // -- Add your module logic here --
    },
})
