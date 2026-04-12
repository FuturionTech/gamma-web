# SEO Audit Report — gammaneutral.com

**Date**: 2026-04-11
**Overall SEO Health Score**: 38/100

---

## Executive Summary

Gamma Neutral Consulting (gammaneutral.com) is a Nuxt 3 site for a premium IT/management consulting firm in Toronto. The site has strong visual design and reasonable information architecture, but suffers from critical technical SEO issues that undermine indexability and content quality signals.

### Top 5 Critical Issues (Fixed)
1. Service detail pages had empty/generic meta tags at crawl time
2. Hreflang tags pointed French to English URLs (no French content exists)
3. og-image.png returned 404 (no social preview image)
4. Duplicate meta tag injection (useHead + usePageSeo conflict) on every page
5. Organization schema used SVG logo (Google requires raster images)

### Top 5 Content Issues (Require Manual Action)
1. Thin content across all pages (homepage ~350 words, services ~300)
2. Zero case studies, testimonials, or portfolio evidence
3. Single team member with placeholder avatar
4. No blog or thought leadership content
5. E-E-A-T score: 21.7/100

---

## Scoring Breakdown

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical SEO | 52/100 | 25% | 13.0 |
| Content Quality | 42/100 | 25% | 10.5 |
| On-Page SEO | 55/100 | 20% | 11.0 |
| Schema / Structured Data | 60/100 | 10% | 6.0 |
| Performance (CWV) | 40/100 | 10% | 4.0 |
| Images | 30/100 | 5% | 1.5 |
| AI Search Readiness | 28/100 | 5% | 1.4 |
| **TOTAL** | | | **47.4/100** |

---

## Fixes Applied (This Commit)

### 1. Reactive Meta Tags for Service Detail Pages
- **File**: `composables/usePageSeo.ts`
- **Change**: Rewrote to accept getter functions for reactive SSR-safe usage
- **File**: `domains/services/pages/service-detail.vue`
- **Change**: usePageSeo now uses `() =>` getters so meta tags update after GraphQL data loads
- **Impact**: Service pages now show correct title/description to crawlers

### 2. Removed Broken Hreflang Tags
- **File**: `composables/usePageSeo.ts`
- **Change**: Removed `hreflang="fr"` and `hreflang="x-default"` tags (no French content exists)
- **Change**: Removed `og:locale:alternate` for fr_CA
- **Impact**: Eliminates language targeting confusion for Google

### 3. Created og-image.png
- **File**: `public/og-image.png` (new, 1200x630px)
- **File**: `public/og-image.svg` (new, source)
- **Impact**: Social sharing now shows a branded preview image

### 4. Consolidated Duplicate Meta Tags
- **Files**: All page components (home, about, contact, services, careers, faq)
- **Change**: Title and description now use a single variable for both useHead and usePageSeo
- **Impact**: Eliminates conflicting titles between `<title>` and `og:title`

### 5. Fixed Organization Schema
- **File**: `composables/useSchemaOrg.ts`
- **Change**: Logo changed from SVG URL to ImageObject with raster PNG
- **Change**: Added `sameAs` array (populated from social links when available)
- **Change**: Changed `inLanguage` from `['en', 'fr']` to `'en'`
- **Impact**: Google can now properly parse the Organization logo

### 6. Added Service Schema to Detail Pages
- **File**: `domains/services/pages/service-detail.vue`
- **Change**: Added `@type: Service` JSON-LD with reactive data
- **Impact**: Service pages now have structured data for Google

### 7. Added WebPage Subtypes
- **File**: `domains/aboutus/pages/about.vue` — Added `AboutPage` schema
- **File**: `domains/contactus/pages/contact.vue` — Added `ContactPage` schema
- **Impact**: Google understands page purpose better

### 8. Fixed ProfessionalService @id
- **File**: `domains/homepage/pages/home.vue`
- **Change**: `@id` changed from `/#localbusiness` to `/#professionalservice`
- **Impact**: Consistent schema graph node naming

### 9. Added BreadcrumbList to Career Position Page
- **File**: `domains/careers/pages/position.vue`
- **Change**: Added usePageSeo + useBreadcrumbSchema (was completely missing)
- **Impact**: Position pages now have OG tags, canonical, and breadcrumb schema

### 10. Removed Duplicate Swiper CSS
- **File**: `nuxt.config.ts`
- **Change**: Removed CDN Swiper CSS (already bundled via css array)
- **Impact**: Eliminates ~50KB duplicate download

### 11. Async-Loaded Icon Font CSS
- **File**: `nuxt.config.ts`
- **Change**: Font Awesome and Bootstrap Icons CSS now use `media="print" onload` pattern
- **Impact**: No longer render-blocking; improves FCP/LCP

### 12. Sitemap Improvements
- **File**: `nuxt.config.ts`
- **Change**: Added `lastmod` defaults, excluded `/about/team`, `/about/methodology`, `/en/**`
- **Impact**: Cleaner sitemap, no orphan URLs

### 13. Added /industries to Prerender
- **File**: `nuxt.config.ts`
- **Change**: Added `/industries` to `nitro.prerender.routes`
- **Impact**: Industries page now gets static HTML + security headers

### 14. Improved Careers Page Title
- **File**: `domains/careers/pages/careers.vue`
- **Change**: Title now includes "AI & Data Jobs Toronto" for better keyword targeting

---

## Remaining Issues (Manual Action Required)

### Critical — Content Strategy
| Issue | Recommendation | Priority |
|-------|---------------|----------|
| Thin content (all pages) | Add 500+ words per page, 800+ for services | P0 |
| No case studies | Create 2-3 anonymized engagement examples | P0 |
| Placeholder team photo | Add real founder photo + detailed bio with credentials | P0 |
| Missing phone number | Add phone to useCompanyInfo and display in footer | P0 |
| /industries duplicate content | Either 301 redirect to /services or create unique industry pages | P1 |

### High — Content & Authority
| Issue | Recommendation | Priority |
|-------|---------------|----------|
| No blog | Launch with 3-5 articles (1500+ words each) | P1 |
| No social media links | Create and link LinkedIn company page | P1 |
| Generic benefit claims | Replace with specific, provable claims | P1 |
| No testimonials | Add client references (even anonymized) | P1 |

### Medium — Technical
| Issue | Recommendation | Priority |
|-------|---------------|----------|
| i18n keys in SSR HTML | Ensure i18n resolves at SSR time for prerendered routes | P1 |
| 780KB homepage HTML | Audit inline CSS/JS, reduce DOM size | P2 |
| Trailing slash redirects | Configure Netlify to match sitemap URL format | P2 |
| `set-cookie: undefined` header | Fix server-side cookie logic | P2 |
| Missing CSP header | Add Content-Security-Policy to Netlify headers | P2 |
| /about/team, /about/methodology | Create dedicated pages or change 302 to 301 | P2 |

### Low
| Issue | Recommendation | Priority |
|-------|---------------|----------|
| Flag icons in image sitemap | Exclude decorative images from sitemap | P3 |
| Missing twitter:site | Add @handle when Twitter account exists | P3 |
| Image lazy loading | Verify below-fold images use loading="lazy" | P3 |

---

## E-E-A-T Assessment

| Factor | Score | Assessment |
|--------|-------|------------|
| Experience | 12/100 | No case studies, project examples, or portfolio |
| Expertise | 25/100 | One team member, no visible certifications, no thought leadership |
| Authoritativeness | 10/100 | No external recognition, media mentions, or industry memberships |
| Trustworthiness | 35/100 | Address provided, privacy policy exists, but no phone, no social proof |

---

## AI Citation Readiness: 28/100

- No quotable facts, statistics, or original data
- Content too generic to be cited as authoritative
- No named methodologies or proprietary frameworks
- Good: Schema.org markup, clear hierarchy, geographic specificity
