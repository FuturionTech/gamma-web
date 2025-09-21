import path from 'path'
import {defineNuxtModule} from "@nuxt/kit";


export default defineNuxtModule({
    // Default configuration options for your module
    defaults: {},
    hooks: {
        // ROUTES
        'pages:extend'(pages) {
            pages.push({
                name: 'about',
                path: '/about',
                file: path.resolve(__dirname, 'pages/about.vue'),
            },
            {
                name: 'about-team',
                path: '/about/team',
                file: path.resolve(__dirname, 'pages/team.vue'),
            },
            {
                name: 'about-methodology',
                path: '/about/methodology',
                file: path.resolve(__dirname, 'pages/methodology.vue'),
            },
            {
                name: 'qhse___fr',
                path: '/qhse',
                file: path.resolve(__dirname, 'pages/QHSECertificates.vue'),
            },
            {
                name: 'qhse___en',
                path: '/en/qhse',
                file: path.resolve(__dirname, 'pages/QHSECertificates.vue'),
            },
            {
                name: 'licensesAndApprovals___fr',
                path: '/licenses_and_approvals',
                file: path.resolve(__dirname, 'pages/licensesAndApprovals.vue'),
            },
            {
                name: 'licensesAndApprovals___en',
                path: '/en/licenses_and_approvals',
                file: path.resolve(__dirname, 'pages/licensesAndApprovals.vue'),
            })
        },

       
    },
    
})
