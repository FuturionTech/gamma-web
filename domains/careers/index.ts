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
                name: 'careers',
                path: '/careers',
                file: resolve(__dirname, 'pages/careers.vue'),
            },
            {
                name: 'careers-position',
                path: '/careers/:id',
                file: resolve(__dirname, 'pages/position.vue'),
            })
        },
    },
})