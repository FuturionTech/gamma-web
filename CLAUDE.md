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

## UI/UX Design System

### Bootstrap Theme Integration
- **Bootstrap 5.3.3** with built-in dark mode support via `data-bs-theme` attribute
- Use Bootstrap's theme-aware classes (`bg-light`, `bg-white`, `text-muted`) that automatically adapt to dark mode
- Avoid custom dark mode CSS overrides - let Bootstrap's theme system handle it
- Global dark mode styles are defined in `/components/selectors/ThemeToggle.vue`

### Color Scheme
- **Primary**: `#8b5cf6` (Purple) - Main brand color
- **Secondary**: `#6c757d` - Supporting elements
- **Success**: `#10b981` (Green) - Success states
- **Info**: `#0ea5e9` (Blue) - Information
- **Warning**: `#f59e0b` (Orange) - Warnings
- **Danger**: `#ef4444` (Red) - Errors

### Component Design Patterns

#### Cards
- Use `border-0` and `shadow-sm` for clean look
- Border radius: `1rem` or `0.75rem` for consistency
- Hover effect: `transform: translateY(-2px)` with subtle shadow
- Padding: `p-4` or `p-5` depending on content density

#### Forms
- Input border radius: `0.5rem`
- Focus state: Purple border with subtle shadow
- Submit buttons: Full width on mobile, auto width on desktop
- Validation: Bootstrap's `.needs-validation` with custom feedback messages

#### Typography
- Headings: Use `fw-bold` or `fw-700` for emphasis
- Body text: Default Bootstrap sizing with `fs-lg` (1.125rem) for larger text
- Small text: `fs-sm` (0.875rem) for labels and metadata

### Responsive Design
- Mobile-first approach using Bootstrap's grid system
- Breakpoints:
  - `sm`: 576px
  - `md`: 768px
  - `lg`: 992px
  - `xl`: 1200px
  - `xxl`: 1400px
- Use responsive utility classes (e.g., `py-5 py-lg-4`)

### Dark Mode Implementation
```css
/* Example dark mode support in components */
:global(.dark-mode) .bg-light {
  background-color: #0f0f0f !important;
}

:global(.dark-mode) .card {
  background-color: #1a1a1a !important;
  color: #e5e7eb !important;
}
```

### Common UI Issues Fixed
1. **Dark mode backgrounds not changing**: Use Bootstrap classes instead of inline styles
2. **Translation keys showing**: Replace i18n keys with actual English content
3. **Overlapping sections**: Avoid negative margins; use proper spacing utilities
4. **Form styling**: Consistent border radius and focus states across all inputs

## Development Best Practices

### Code Quality
- Run lint and typecheck commands before committing:
  - `pnpm run lint` (if available)
  - `pnpm run typecheck` (if available)
- Follow existing code conventions and patterns
- Use existing libraries and utilities rather than adding new dependencies

### Component Development
1. Check existing components first for patterns and conventions
2. Use Vue 3 Composition API with `<script setup>`
3. Keep styles scoped unless global styles are needed
4. Implement proper loading and error states

### Git Workflow
- Only commit when explicitly asked by the user
- Create descriptive commit messages
- Include all related changes in a single commit
- Never commit secrets or API keys

## Around Template Integration
When referencing Around Bootstrap template designs:
- Focus on clean, modern layouts with proper spacing
- Use card-based designs for information sections
- Implement subtle animations and micro-interactions
- Maintain consistent border radius and shadow styles
- Apply systematic typography scale

## Known Issues and Solutions

### Port Conflicts
- Development server may use alternate ports (3001, 3002) if 3000 is occupied
- Check terminal output for actual port being used

### Sass Deprecation Warnings
- Multiple deprecation warnings from Bootstrap Sass are expected
- These don't affect functionality and can be ignored

### Map Integration
- Google Maps embed zoom level can be adjusted via the URL parameter `1m3!1d[zoom_value]`
- Larger zoom values = more zoomed out view

## Contact Information
- **Company**: Gamma Neutral Consulting Inc.
- **Location**: 108 Redpath Ave, Suite 19, Toronto, ON M4S 2J7, Canada
- **Email**: info@gammaneutral.ca
- **Phone**: TBD (to be added when available)