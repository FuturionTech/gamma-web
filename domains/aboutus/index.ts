import path from 'path'
import {defineNuxtModule} from "@nuxt/kit";


export default defineNuxtModule({
    // Default configuration options for your module
    defaults: {},
    hooks: {
        // ROUTES
        'pages:extend'(pages) {
            pages.push({
                name: 'about___fr',
                path: '/about',
                file: path.resolve(__dirname, 'pages/aboutUs.vue'),
            },
            {
                name: 'about___en',
                path: '/en/about',
                file: path.resolve(__dirname, 'pages/aboutUs.vue'),
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
