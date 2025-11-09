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
            pages.push({
                name: 'industries___fr',
                path: '/industries',
                file: resolve(__dirname, 'pages/services.vue'),
            },
            {
                name: 'industries___en',
                path: '/en/industries',
                file: resolve(__dirname, 'pages/services.vue'),
            },
            // Keep legacy services routes for backward compatibility
            {
                name: 'services___fr',
                path: '/services',
                file: resolve(__dirname, 'pages/services.vue'),
            },
            {
                name: 'services___en',
                path: '/en/services',
                file: resolve(__dirname, 'pages/services.vue'),
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
