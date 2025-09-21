import path from 'path'
import {defineNuxtModule} from "@nuxt/kit";

export default defineNuxtModule({
    // Default configuration options for your module
    defaults: {},
    hooks: {
        // ROUTES
        'pages:extend'(pages) {
            pages.push({
                name: 'careers',
                path: '/careers',
                file: path.resolve(__dirname, 'pages/careers.vue'),
            },
            {
                name: 'careers-position',
                path: '/careers/:id',
                file: path.resolve(__dirname, 'pages/position.vue'),
            })
        },
    },
})