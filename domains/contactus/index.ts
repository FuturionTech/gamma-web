import path from 'path'
import {defineNuxtModule} from "@nuxt/kit";


export default defineNuxtModule({
    // Default configuration options for your module
    defaults: {},
    hooks: {
        // ROUTES
        'pages:extend'(pages) {
            pages.push({
                    name: 'contact___fr',
                    path: '/contact',
                    file: path.resolve(__dirname, 'pages/index.vue'),
                },
                {
                    name: 'contact___en',
                    path: '/en/contact',
                    file: path.resolve(__dirname, 'pages/index.vue'),
                })
        },

        // COMPONENTS
        'components:dirs'(dirs) {
            // Add ./components dir to the list
            dirs.push({
                path: path.resolve(__dirname, 'components'),
            })
        },

        // COMPOSABLES
        /*'autoImports:dirs'(dirs) {
          dirs.push(path.resolve(__dirname, './composables'))
        },*/
    },
    async setup(moduleOptions, nuxt) {
        // -- Add your module logic here --
    },
})
