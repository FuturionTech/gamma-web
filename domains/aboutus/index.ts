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
                name: 'about',
                path: '/about',
                file: resolve(__dirname, 'pages/about.vue'),
            },
            {
                name: 'about-team',
                path: '/about/team',
                redirect: '/about',
            },
            {
                name: 'about-methodology',
                path: '/about/methodology',
                redirect: '/about',
            })
        },

       
    },
    
})
