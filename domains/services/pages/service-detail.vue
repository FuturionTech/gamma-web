<template>
  <div class="service-detail-page">
    <!-- ========================================
         HERO — Impactful headline with stats
         ======================================== -->
    <section class="hero-gradient position-relative overflow-hidden hero-offset">
      <div class="hero-glow-orb hero-glow-1"></div>
      <div class="hero-glow-orb hero-glow-2"></div>

      <div class="container position-relative z-2 py-5">

        <!-- Breadcrumb — at container level to align with navbar logo -->
        <nav aria-label="breadcrumb" class="mb-4">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <NuxtLink to="/" class="text-white text-opacity-75 text-decoration-none">
                {{ $t('breadcrumbs.home') }}
              </NuxtLink>
            </li>
            <li class="breadcrumb-item">
              <NuxtLink to="/services" class="text-white text-opacity-75 text-decoration-none">
                {{ $t('breadcrumbs.services') }}
              </NuxtLink>
            </li>
            <li class="breadcrumb-item active text-white" aria-current="page">
              {{ detail?.name || slug }}
            </li>
          </ol>
        </nav>

        <div class="row align-items-center">
          <div class="col-lg-10">
            <!-- Tagline pill -->
            <div v-if="detail?.hero?.tagline" class="hero-tagline mb-3">
              <i :class="`bi ${detail.icon || 'bi-stars'} me-2`"></i>
              <span>{{ detail.hero.tagline }}</span>
            </div>

            <!-- Headline -->
            <h1 class="hero-headline text-white fw-bold mb-3">
              {{ detail?.hero?.headline || detail?.name }}
            </h1>

            <!-- Subheadline -->
            <p class="hero-subheadline text-white text-opacity-75 mb-4">
              {{ detail?.hero?.subheadline || detail?.howWeDeliver?.description }}
            </p>

            <!-- Dual CTAs -->
            <div class="d-flex flex-column flex-sm-row gap-3 mb-5">
              <NuxtLink to="/contact" class="btn btn-white btn-lg px-4 py-3 rounded-pill fw-semibold">
                <i class="bi bi-calendar-check me-2"></i>
                {{ detail?.hero?.ctaPrimary || $t('services.details.ctaContact') }}
              </NuxtLink>
              <a href="#methodology" class="btn btn-outline-light btn-lg px-4 py-3 rounded-pill fw-semibold">
                <i class="bi bi-compass me-2"></i>
                {{ detail?.hero?.ctaSecondary || $t('services.details.viewApproach') }}
              </a>
            </div>

            <!-- Stats Row -->
            <div v-if="detail?.hero?.stats && detail.hero.stats.length" class="hero-stats row g-3 g-lg-4">
              <div
                v-for="(stat, i) in detail.hero.stats"
                :key="i"
                class="col-6 col-lg-3"
              >
                <div class="stat-card">
                  <div class="stat-value">{{ stat.value }}</div>
                  <div class="stat-label">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Loading State -->
    <template v-if="loading">
      <section class="hero-gradient position-relative overflow-hidden hero-offset">
        <div class="container position-relative z-2 py-5">
          <nav aria-label="breadcrumb" class="mb-4">
            <Shimmer width="200px" height="1.5rem" pill />
          </nav>
          <div class="row align-items-center">
            <div class="col-lg-10">
              <Shimmer width="150px" height="2rem" pill class="mb-3" />
              <Shimmer width="60%" height="4rem" class="mb-3" />
              <Shimmer width="80%" height="1.5rem" class="mb-4" />
              <div class="d-flex gap-3 mb-5">
                <Shimmer width="180px" height="3.5rem" radius="100px" />
                <Shimmer width="180px" height="3.5rem" radius="100px" />
              </div>
              <div class="row g-3 g-lg-4">
                <div v-for="n in 4" :key="n" class="col-6 col-lg-3">
                  <div class="stat-card">
                    <Shimmer width="60%" height="2.5rem" class="mb-2" />
                    <Shimmer width="40%" height="1rem" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-5 bg-light">
        <div class="container py-5">
          <div class="row g-5 align-items-center">
            <div class="col-lg-5">
              <Shimmer width="120px" height="1rem" pill class="mb-2" />
              <Shimmer width="80%" height="2.5rem" class="mb-4" />
              <Shimmer width="100%" height="1.25rem" class="mb-2" />
              <Shimmer width="90%" height="1.25rem" />
            </div>
            <div class="col-lg-7">
              <div class="challenge-grid">
                <div v-for="n in 3" :key="n" class="challenge-item">
                  <Shimmer width="40px" height="2rem" class="me-3" />
                  <Shimmer width="100%" height="1.5rem" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>

    <!-- Not Found State -->
    <section v-else-if="!detail && !loading" class="py-5">
      <div class="container py-5 text-center">
        <i class="bi bi-exclamation-circle text-warning" style="font-size: 3rem;"></i>
        <h2 class="mt-3 mb-3">{{ $t('services.details.notFound') }}</h2>
        <NuxtLink to="/services" class="btn btn-primary">
          <i class="bi bi-arrow-left me-2"></i>{{ $t('services.details.backToServices') }}
        </NuxtLink>
      </div>
    </section>

    <template v-else-if="detail">
      <!-- ========================================
           THE CHALLENGE — Problem narrative
           ======================================== -->
      <section v-if="detail.challenge" class="py-5 bg-light">
        <div class="container py-4">
          <div class="row g-5 align-items-center">
            <div class="col-lg-5">
              <div class="section-eyebrow text-danger mb-2">
                <i class="bi bi-exclamation-diamond-fill me-2"></i>
                {{ $t('services.details.sectionLabels.challenge') }}
              </div>
              <h2 class="h2 fw-bold mb-4">{{ detail.challenge.title }}</h2>
              <p class="fs-5 text-muted mb-0">{{ detail.challenge.description }}</p>
            </div>
            <div class="col-lg-7">
              <div class="challenge-grid">
                <div
                  v-for="(point, i) in detail.challenge.painPoints"
                  :key="i"
                  class="challenge-item"
                >
                  <div class="challenge-number">{{ String(i + 1).padStart(2, '0') }}</div>
                  <p class="mb-0">{{ point }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================
           HOW WE DELIVER — Solution Overview
           ======================================== -->
      <section class="py-5">
        <div class="container py-4">
          <div class="row">
            <div class="col-lg-10 mx-auto">
              <div class="section-header text-center mb-5">
                <div class="section-eyebrow text-primary mb-2">
                  <i class="bi bi-rocket-takeoff-fill me-2"></i>
                  {{ $t('services.details.sectionLabels.solution') }}
                </div>
                <h2 class="h2 fw-bold mb-3">{{ detail.howWeDeliver.title }}</h2>
                <p class="fs-5 text-muted mx-auto" style="max-width: 720px;">
                  {{ detail.howWeDeliver.description }}
                </p>
              </div>
              <div class="row g-3">
                <div
                  v-for="(item, i) in detail.howWeDeliver.items"
                  :key="i"
                  class="col-md-6"
                >
                  <div class="detail-item">
                    <i class="bi bi-check-circle-fill detail-check me-3"></i>
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================
           CAPABILITIES MATRIX — Grouped services
           ======================================== -->
      <section v-if="detail.capabilities" class="bg-light py-5">
        <div class="container py-4">
          <div class="section-header text-center mb-5">
            <div class="section-eyebrow text-info mb-2">
              <i class="bi bi-grid-3x3-gap-fill me-2"></i>
              {{ $t('services.details.sectionLabels.capabilities') }}
            </div>
            <h2 class="h2 fw-bold mb-3">{{ detail.capabilities.title }}</h2>
          </div>
          <div class="row g-4">
            <div
              v-for="(group, i) in detail.capabilities.groups"
              :key="i"
              class="col-md-6 col-lg-4"
            >
              <div class="capability-card">
                <div class="capability-header">
                  <div class="capability-icon">
                    <i :class="`bi ${group.icon || 'bi-gear-fill'}`"></i>
                  </div>
                  <h4 class="capability-title">{{ group.name }}</h4>
                </div>
                <ul class="capability-list">
                  <li v-for="(item, j) in group.items" :key="j">
                    <i class="bi bi-arrow-right-short"></i>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================
           OUR APPROACH — Methodology timeline
           ======================================== -->
      <section id="methodology" class="py-5">
        <div class="container py-4">
          <div class="row">
            <div class="col-lg-10 mx-auto">
              <div class="section-header text-center mb-5">
                <div class="section-eyebrow text-success mb-2">
                  <i class="bi bi-diagram-3-fill me-2"></i>
                  {{ $t('services.details.sectionLabels.methodology') }}
                </div>
                <h2 class="h2 fw-bold mb-3">{{ detail.ourApproach.title }}</h2>
                <p class="fs-5 text-muted mx-auto" style="max-width: 720px;">
                  {{ detail.ourApproach.description }}
                </p>
              </div>
              <div class="approach-timeline">
                <div
                  v-for="(item, i) in detail.ourApproach.items"
                  :key="i"
                  class="approach-step-item"
                >
                  <div class="approach-number">{{ String(i + 1).padStart(2, '0') }}</div>
                  <div class="approach-content">
                    <h5 v-if="typeof item === 'object'" class="fw-bold mb-2">{{ item.title }}</h5>
                    <p v-if="typeof item === 'object'" class="mb-0 text-muted">{{ item.description }}</p>
                    <div v-else class="fw-semibold">{{ item }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================
           INDUSTRY APPLICATIONS — Vertical-specific
           ======================================== -->
      <section v-if="detail.industryApplications" class="bg-light py-5">
        <div class="container py-4">
          <div class="section-header text-center mb-5">
            <div class="section-eyebrow text-warning mb-2">
              <i class="bi bi-building-fill me-2"></i>
              {{ $t('services.details.sectionLabels.industries') }}
            </div>
            <h2 class="h2 fw-bold mb-3">{{ detail.industryApplications.title }}</h2>
            <p class="fs-5 text-muted mx-auto" style="max-width: 720px;">
              {{ detail.industryApplications.description }}
            </p>
          </div>
          <div class="row g-4">
            <div
              v-for="(industry, i) in detail.industryApplications.industries"
              :key="i"
              class="col-md-6 col-lg-4"
            >
              <div class="industry-app-card">
                <div class="industry-app-icon">
                  <i :class="`bi ${industry.icon || 'bi-building'}`"></i>
                </div>
                <h4 class="fw-bold mb-3">{{ industry.name }}</h4>
                <p class="text-muted mb-4">{{ industry.description }}</p>
                <ul class="industry-usecase-list">
                  <li v-for="(useCase, j) in industry.useCases" :key="j">
                    <i class="bi bi-check2-circle"></i>
                    <span>{{ useCase }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================
           TECHNOLOGY STACK — Grouped tools
           ======================================== -->
      <section class="py-5">
        <div class="container py-4">
          <div class="row">
            <div class="col-lg-10 mx-auto">
              <div class="section-header text-center mb-5">
                <div class="section-eyebrow text-primary mb-2">
                  <i class="bi bi-tools me-2"></i>
                  {{ $t('services.details.sectionLabels.techStack') }}
                </div>
                <h2 class="h2 fw-bold mb-3">{{ detail.technologies.title }}</h2>
                <p class="fs-5 text-muted mx-auto" style="max-width: 720px;">
                  {{ detail.technologies.description }}
                </p>
              </div>
              <div class="d-flex flex-wrap justify-content-center gap-3">
                <span
                  v-for="(item, i) in detail.technologies.items"
                  :key="i"
                  class="tech-badge"
                >
                  <i class="bi bi-gear-fill me-2"></i>{{ item }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================
           BUSINESS IMPACT — Results metrics
           ======================================== -->
      <section class="bg-light py-5">
        <div class="container py-4">
          <div class="row">
            <div class="col-lg-10 mx-auto">
              <div class="section-header text-center mb-5">
                <div class="section-eyebrow text-danger mb-2">
                  <i class="bi bi-graph-up-arrow me-2"></i>
                  {{ $t('services.details.sectionLabels.impact') }}
                </div>
                <h2 class="h2 fw-bold mb-3">{{ detail.businessImpact.title }}</h2>
                <p class="fs-5 text-muted mx-auto" style="max-width: 720px;">
                  {{ detail.businessImpact.description }}
                </p>
              </div>
              <div class="row g-3">
                <div
                  v-for="(item, i) in detail.businessImpact.items"
                  :key="i"
                  class="col-md-6 col-lg-4"
                >
                  <div class="impact-card">
                    <i :class="`bi ${impactIcons[i % impactIcons.length]} impact-icon`" aria-hidden="true"></i>
                    <p class="mb-0">{{ item }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================
           WHY CHOOSE US — Differentiators
           ======================================== -->
      <section v-if="detail.differentiators" class="py-5">
        <div class="container py-4">
          <div class="row">
            <div class="col-lg-10 mx-auto">
              <div class="section-header text-center mb-5">
                <div class="section-eyebrow text-primary mb-2">
                  <i class="bi bi-award-fill me-2"></i>
                  {{ $t('services.details.sectionLabels.whyUs') }}
                </div>
                <h2 class="h2 fw-bold mb-3">{{ detail.differentiators.title }}</h2>
              </div>
              <div class="row g-4">
                <div
                  v-for="(diff, i) in detail.differentiators.points"
                  :key="i"
                  class="col-md-6"
                >
                  <div class="diff-card">
                    <div class="diff-icon">
                      <i :class="`bi ${diff.icon || 'bi-check-circle-fill'}`"></i>
                    </div>
                    <div class="diff-content">
                      <h5 class="fw-bold mb-2">{{ diff.title }}</h5>
                      <p class="text-muted mb-0">{{ diff.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================
           CLOSING CTA — Strong finish
           ======================================== -->
      <section class="cta-gradient py-5 position-relative overflow-hidden">
        <div class="cta-glow-orb"></div>
        <div class="container position-relative z-2 py-4">
          <div class="row">
            <div class="col-lg-9 mx-auto text-center">
              <h2 class="display-5 fw-bold text-white mb-3">{{ detail.closing.title }}</h2>
              <p class="fs-5 text-white text-opacity-75 mb-4 mx-auto" style="max-width: 680px;">
                {{ detail.closing.subtitle }}
              </p>
              <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
                <NuxtLink to="/contact" class="btn btn-white btn-lg px-5 py-3 rounded-pill fw-semibold">
                  <i class="bi bi-calendar-check me-2"></i>
                  {{ $t('services.details.ctaContact') }}
                </NuxtLink>
                <NuxtLink to="/services" class="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-semibold">
                  <i class="bi bi-grid-3x3-gap me-2"></i>
                  {{ $t('services.details.ctaLearnAll') }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports'
import type { LegacyServiceDetail as ServiceDetail } from '~/composables/useServiceDetail'
import Shimmer from '~/components/shared/utils/Shimmer.vue'

const { t, locale } = useI18n()
const route = useRoute()

// Extract slug from route params (dynamic route: /services/[slug])
const slug = computed(() => String(route.params.slug || ''))

// Curated icons for business impact items (cycled by index)
const impactIcons = [
  'bi-lightning-charge-fill',
  'bi-graph-up-arrow',
  'bi-shield-check',
  'bi-person-heart',
  'bi-trophy-fill',
  'bi-file-earmark-check',
]

// Fetch service detail from the gamma-api GraphQL endpoint.
// On slug or locale change, the composable re-fetches automatically.
const { detail, loading, error } = useServiceDetail(slug)

// SEO meta — reactive getters so tags update once GraphQL data arrives
useHead(() => ({
  title: detail.value
    ? `${detail.value.name} | Gamma Neutral Consulting`
    : 'Service | Gamma Neutral Consulting',
  meta: [
    {
      name: 'description',
      content:
        detail.value?.hero?.subheadline ||
        detail.value?.howWeDeliver?.description ||
        '',
    },
    { name: 'author', content: 'Gamma Neutral Consulting Inc.' },
  ],
}))

usePageSeo({
  title: () => detail.value ? `${detail.value.name} | Gamma Neutral Consulting` : 'Service | Gamma Neutral Consulting',
  description: () => detail.value?.hero?.subheadline || detail.value?.howWeDeliver?.description || '',
  path: () => `/services/${slug.value}`,
})

// Breadcrumb — reactive via watch so the name populates after fetch
const breadcrumbItems = computed(() => [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: detail.value?.name || slug.value, url: `/services/${slug.value}` },
])
useBreadcrumbSchema(breadcrumbItems.value)
watch(breadcrumbItems, (items) => useBreadcrumbSchema(items), { deep: true })

// Service JSON-LD schema
useHead(() => {
  if (!detail.value) return {}
  const siteUrl = 'https://gammaneutral.com'
  return {
    script: [{
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: detail.value.name,
        description: detail.value.hero?.subheadline || detail.value.howWeDeliver?.description || '',
        url: `${siteUrl}/services/${slug.value}`,
        provider: { '@id': `${siteUrl}/#organization` },
        areaServed: [
          { '@type': 'Country', name: 'Canada' },
          { '@type': 'Country', name: 'United States' },
        ],
        category: 'Information Technology Consulting',
      }),
    }],
  }
})
</script>

<style scoped>
/* ========================================
   HERO
   ======================================== */
.hero-offset {
  margin-top: 80px;
}

.hero-gradient {
  background: linear-gradient(135deg, #0a0e27 0%, #1a1a2e 40%, #16213e 70%, #0f3460 100%);
  min-height: 520px;
}

.hero-glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.4;
  pointer-events: none;
}

.hero-glow-1 {
  width: 500px;
  height: 500px;
  background: #8b5cf6;
  top: -100px;
  right: -100px;
}

.hero-glow-2 {
  width: 400px;
  height: 400px;
  background: #3b82f6;
  bottom: -150px;
  left: -100px;
}

.hero-tagline {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: rgba(139, 92, 246, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 100px;
  color: #c4b5fd;
  font-size: 0.875rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
}

.hero-headline {
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.hero-subheadline {
  font-size: 1.125rem;
  line-height: 1.65;
  max-width: 660px;
}

.breadcrumb {
  background: transparent;
  padding: 0;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.5);
}

/* Hero Stats */
.hero-stats {
  margin-top: 1rem;
}

.stat-card {
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 0.875rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.stat-card:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(139, 92, 246, 0.4);
  transform: translateY(-2px);
}

.stat-value {
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #ffffff; /* fallback if background-clip: text not supported */
  line-height: 1;
  margin-bottom: 0.4rem;
  background: linear-gradient(135deg, #ffffff 0%, #c4b5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@supports not ((-webkit-background-clip: text) or (background-clip: text)) {
  .stat-value {
    background: none;
    color: #ffffff;
  }
}

.stat-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.35;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

/* ========================================
   SECTION EYEBROWS / HEADERS
   ======================================== */
.section-eyebrow {
  display: inline-flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.section-header {
  max-width: 900px;
  margin: 0 auto;
}

/* ========================================
   CHALLENGE SECTION
   ======================================== */
.challenge-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.challenge-item {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.25rem 1.5rem;
  background: var(--bs-body-bg, #ffffff);
  border-left: 4px solid #dc2626;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.challenge-item:hover {
  transform: translateX(4px);
  box-shadow: 0 8px 24px rgba(220, 38, 38, 0.1);
}

.challenge-number {
  font-size: 1.5rem;
  font-weight: 800;
  color: #dc2626;
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
  opacity: 0.6;
}

/* ========================================
   HOW WE DELIVER — Detail items
   ======================================== */
.detail-item {
  display: flex;
  align-items: flex-start;
  padding: 1.125rem 1.25rem;
  background: var(--bs-body-bg, #ffffff);
  border: 1px solid var(--bs-border-color, #e5e7eb);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  height: 100%;
}

.detail-item:hover {
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 8px 24px rgba(139, 92, 246, 0.08);
  transform: translateY(-2px);
}

.detail-check {
  color: #8b5cf6;
  font-size: 1.25rem;
  flex-shrink: 0;
  margin-top: 2px;
}

/* ========================================
   CAPABILITIES MATRIX
   ======================================== */
.capability-card {
  padding: 1.75rem;
  background: var(--bs-body-bg, #ffffff);
  border: 1px solid var(--bs-border-color, #e5e7eb);
  border-radius: 1rem;
  height: 100%;
  transition: all 0.3s ease;
}

.capability-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(14, 165, 233, 0.1);
  border-color: rgba(14, 165, 233, 0.3);
}

.capability-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--bs-border-color, #e5e7eb);
}

.capability-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(14, 165, 233, 0.1);
  color: #0ea5e9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.capability-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--bs-heading-color, #1f2937);
  margin: 0;
}

.capability-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.capability-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.45rem 0;
  font-size: 0.9rem;
  color: var(--bs-body-color);
}

.capability-list i {
  color: #0ea5e9;
  font-size: 1rem;
  flex-shrink: 0;
  line-height: 1.4;
}

/* ========================================
   APPROACH TIMELINE
   ======================================== */
.approach-timeline {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 820px;
  margin: 0 auto;
  position: relative;
}

.approach-step-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem 1.75rem;
  background: var(--bs-body-bg, #ffffff);
  border: 1px solid var(--bs-border-color, #e5e7eb);
  border-radius: 1rem;
  transition: all 0.3s ease;
}

.approach-step-item:hover {
  transform: translateX(6px);
  border-color: rgba(16, 185, 129, 0.3);
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.08);
}

.approach-number {
  font-size: 1.5rem;
  font-weight: 800;
  color: #10b981;
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
  line-height: 1.1;
  min-width: 3rem;
}

.approach-content {
  flex: 1;
}

/* ========================================
   INDUSTRY APPLICATIONS
   ======================================== */
.industry-app-card {
  padding: 2rem;
  background: var(--bs-body-bg, #ffffff);
  border: 1px solid var(--bs-border-color, #e5e7eb);
  border-radius: 1rem;
  height: 100%;
  transition: all 0.3s ease;
}

.industry-app-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(217, 119, 6, 0.1);
  border-color: rgba(217, 119, 6, 0.25);
}

.industry-app-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(217, 119, 6, 0.1), rgba(245, 158, 11, 0.15));
  color: #d97706;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
}

.industry-usecase-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.industry-usecase-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  padding: 0.55rem 0;
  font-size: 0.9rem;
  color: var(--bs-body-color);
  border-top: 1px solid var(--bs-border-color, #e5e7eb);
}

.industry-usecase-list li:first-child {
  border-top: none;
  padding-top: 0;
}

.industry-usecase-list i {
  color: #d97706;
  font-size: 1.1rem;
  flex-shrink: 0;
  line-height: 1.3;
}

/* ========================================
   TECHNOLOGY BADGES
   ======================================== */
.tech-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.65rem 1.25rem;
  background: var(--bs-body-bg, #ffffff);
  border: 1px solid var(--bs-border-color, #e5e7eb);
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--bs-body-color);
  transition: all 0.3s ease;
}

.tech-badge:hover {
  border-color: rgba(245, 158, 11, 0.4);
  background: rgba(245, 158, 11, 0.05);
  transform: translateY(-2px);
}

.tech-badge i {
  color: #f59e0b;
}

/* ========================================
   IMPACT CARDS
   ======================================== */
.impact-card {
  padding: 1.75rem;
  background: var(--bs-body-bg, #ffffff);
  border: 1px solid var(--bs-border-color, #e5e7eb);
  border-radius: 1rem;
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.impact-card:hover {
  transform: translateY(-4px);
  border-color: rgba(220, 38, 38, 0.25);
  box-shadow: 0 12px 32px rgba(220, 38, 38, 0.08);
}

.impact-icon {
  color: #dc2626;
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
}

/* ========================================
   DIFFERENTIATORS
   ======================================== */
.diff-card {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.75rem;
  background: var(--bs-body-bg, #ffffff);
  border: 1px solid var(--bs-border-color, #e5e7eb);
  border-radius: 1rem;
  height: 100%;
  transition: all 0.3s ease;
}

.diff-card:hover {
  transform: translateY(-3px);
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 12px 32px rgba(139, 92, 246, 0.1);
}

.diff-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.diff-content {
  flex: 1;
}

/* ========================================
   CLOSING CTA
   ======================================== */
.cta-gradient {
  background: linear-gradient(135deg, #0a0e27 0%, #1a1a2e 40%, #16213e 100%);
  position: relative;
}

.cta-glow-orb {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: blur(80px);
  pointer-events: none;
}

.btn-white {
  background: #ffffff;
  color: #1a1a2e;
  border: none;
  transition: all 0.3s ease;
}

.btn-white:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
  background: #ffffff;
  color: #0f3460;
}

.btn-outline-light {
  border: 2px solid rgba(255, 255, 255, 0.4);
  color: #ffffff;
  background: transparent;
  transition: all 0.3s ease;
}

.btn-outline-light:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #ffffff;
  transform: translateY(-2px);
  color: #ffffff;
}

/* ========================================
   DARK MODE
   ======================================== */
[data-bs-theme="dark"] .bg-light {
  background-color: rgba(255, 255, 255, 0.03) !important;
}

[data-bs-theme="dark"] .detail-item,
[data-bs-theme="dark"] .capability-card,
[data-bs-theme="dark"] .approach-step-item,
[data-bs-theme="dark"] .industry-app-card,
[data-bs-theme="dark"] .tech-badge,
[data-bs-theme="dark"] .impact-card,
[data-bs-theme="dark"] .diff-card,
[data-bs-theme="dark"] .challenge-item {
  background: rgba(255, 255, 255, 0.04) !important;
  border-color: rgba(255, 255, 255, 0.08) !important;
}

/* Preserve challenge item left-border accent color in dark mode */
[data-bs-theme="dark"] .challenge-item {
  border-left-color: rgba(220, 38, 38, 0.7) !important;
}

/* Strengthen hover shadow in dark mode for visibility */
[data-bs-theme="dark"] .approach-step-item:hover {
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.18) !important;
}

[data-bs-theme="dark"] .text-muted {
  color: rgba(255, 255, 255, 0.65) !important;
}

[data-bs-theme="dark"] .capability-title,
[data-bs-theme="dark"] .industry-app-card h4,
[data-bs-theme="dark"] .diff-card h5,
[data-bs-theme="dark"] .approach-content h5 {
  color: #ffffff !important;
}

[data-bs-theme="dark"] .capability-header {
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

[data-bs-theme="dark"] .industry-usecase-list li {
  border-top-color: rgba(255, 255, 255, 0.08);
}

/* ========================================
   RESPONSIVE
   ======================================== */
@media (max-width: 991.98px) {
  /* Add divider between narrative and pain points on tablet/mobile */
  .challenge-grid {
    padding-top: 1.5rem;
    margin-top: 0.5rem;
    border-top: 1px solid var(--bs-border-color, #e5e7eb);
  }
}

[data-bs-theme="dark"] .challenge-grid {
  border-top-color: rgba(255, 255, 255, 0.08);
}

@media (max-width: 767.98px) {
  .hero-offset {
    margin-top: 64px;
  }

  .hero-gradient {
    min-height: auto;
  }

  .hero-headline {
    font-size: 1.875rem;
  }

  .approach-step-item {
    flex-direction: column;
    text-align: left;
    gap: 0.5rem;
  }

  /* Disable horizontal-shift hovers on touch devices (prevents horizontal overflow) */
  .approach-step-item:hover,
  .challenge-item:hover {
    transform: none;
  }

  .diff-card {
    flex-direction: column;
  }
}

/* ========================================
   ACCESSIBILITY
   ======================================== */
@media (prefers-reduced-motion: reduce) {
  .detail-item,
  .capability-card,
  .approach-step-item,
  .industry-app-card,
  .tech-badge,
  .impact-card,
  .diff-card,
  .challenge-item,
  .stat-card,
  .btn-white,
  .btn-outline-light {
    transition: none !important;
  }
}
</style>
