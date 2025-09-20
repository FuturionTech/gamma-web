# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### Development
- `pnpm dev` - Start development server on http://localhost:3000
- `pnpm build` - Build for production
- `pnpm prd` - Generate static site
- `pnpm preview` - Preview production build locally

### Installation
- `pnpm install` - Install dependencies
- `pnpm postinstall` - Prepare Nuxt (runs automatically after install)

## Architecture Overview

This is a Nuxt 3 application with a domain-driven architecture using custom modules.

### Key Technologies
- **Nuxt 3** - Vue.js framework with SSR (currently disabled in config)
- **TypeScript** - Full TypeScript support
- **Pinia** - State management
- **Bootstrap 5.3.3** - CSS framework
- **Sass/SCSS** - CSS preprocessing
- **GraphQL** - API client via nuxt-graphql-client
- **Swiper** - Carousel/slider components
- **Cloudinary** - Image optimization

### Domain Structure
The application uses a modular domain architecture where each feature is organized as a separate Nuxt module:

- `domains/` - Feature modules (aboutus, blogs, careers, contactus, faq, homepage, privacy-policy, products, services)
- Each domain has its own `index.ts` file that defines:
  - Routes via `pages:extend` hook
  - Components via `components:dirs` hook
  - Domain-specific logic

### Directory Structure
- `app/` - Nuxt 3 app directory with main app.vue
- `components/` - Global Vue components (Header, Footer, menus, selectors)
- `domains/` - Domain-specific modules with their own pages and components
- `assets/` - Static assets, SCSS, vendor libraries
- `public/` - Public static files
- `composables/` - Vue composables
- `layouts/` - Nuxt layouts
- `locales/` - Internationalization files
- `plugins/` - Nuxt plugins
- `server/` - Server-side code

### Configuration Notes
- SSR is disabled (`ssr: false`) for stable production builds
- Bootstrap and various vendor libraries are loaded via CDN
- Cloudinary is configured for image optimization
- Environment variables: `APPLICATION_ID`, `NUXT_PUBLIC_SITE_URL`
- Sass variables are globally available via `@import "@/assets/scss/variables.scss"`

### Domain Module Pattern
When adding new domains, follow the existing pattern:
1. Create a new directory in `domains/`
2. Add an `index.ts` file with defineNuxtModule
3. Define routes, components, and composables in the module
4. Register the module in `nuxt.config.ts` modules array (keep alphabetical order)