<template>
  <div class="service-detail-page">
    <!-- ========================================
         HERO — Impactful headline with stats
         ======================================== -->
    <section class="hero-gradient position-relative overflow-hidden hero-offset">
      <div class="hero-glow-orb hero-glow-1"></div>
      <div class="hero-glow-orb hero-glow-2"></div>

      <div class="container position-relative z-2 py-5">
        <div class="row align-items-center">
          <div class="col-lg-10 mx-auto">
            <!-- Breadcrumb -->
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
            <div v-if="detail?.hero?.stats" class="hero-stats row g-3 g-lg-4">
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

    <!-- Not Found State -->
    <section v-if="!detail" class="py-5">
      <div class="container py-5 text-center">
        <i class="bi bi-exclamation-circle text-warning" style="font-size: 3rem;"></i>
        <h2 class="mt-3 mb-3">{{ $t('services.details.notFound') }}</h2>
        <NuxtLink to="/services" class="btn btn-primary">
          <i class="bi bi-arrow-left me-2"></i>{{ $t('services.details.backToServices') }}
        </NuxtLink>
      </div>
    </section>

    <template v-else>
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
           CASE STUDY — Example scenario
           ======================================== -->
      <section v-if="detail.caseStudy" class="case-study-section py-5">
        <div class="container py-4">
          <div class="row">
            <div class="col-lg-10 mx-auto">
              <div class="case-study-card">
                <div class="section-eyebrow text-white-50 mb-2">
                  <i class="bi bi-lightbulb-fill me-2"></i>
                  {{ $t('services.details.sectionLabels.caseStudy') }}
                </div>
                <h2 class="h2 fw-bold text-white mb-2">{{ detail.caseStudy.title }}</h2>
                <p class="text-white text-opacity-75 mb-4" v-if="detail.caseStudy.client">
                  <i class="bi bi-building me-2"></i>{{ detail.caseStudy.client }}
                </p>
                <div class="row g-4">
                  <div class="col-md-4">
                    <div class="case-stage case-stage-challenge">
                      <div class="case-stage-label">{{ $t('services.details.caseStudyLabels.challenge') }}</div>
                      <p class="mb-0">{{ detail.caseStudy.challenge }}</p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="case-stage case-stage-approach">
                      <div class="case-stage-label">{{ $t('services.details.caseStudyLabels.approach') }}</div>
                      <p class="mb-0">{{ detail.caseStudy.approach }}</p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="case-stage case-stage-result">
                      <div class="case-stage-label">{{ $t('services.details.caseStudyLabels.result') }}</div>
                      <p class="mb-0">{{ detail.caseStudy.result }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================
           FAQ — Common questions
           ======================================== -->
      <section v-if="detail.faq" class="bg-light py-5">
        <div class="container py-4">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="section-header text-center mb-5">
                <div class="section-eyebrow text-info mb-2">
                  <i class="bi bi-question-circle-fill me-2"></i>
                  {{ $t('services.details.sectionLabels.faq') }}
                </div>
                <h2 class="h2 fw-bold mb-3">{{ detail.faq.title }}</h2>
              </div>
              <div class="faq-list">
                <details
                  v-for="(item, i) in detail.faq.items"
                  :key="i"
                  class="faq-item"
                >
                  <summary class="faq-question">
                    <span>{{ item.question }}</span>
                    <i class="bi bi-plus-lg faq-toggle" aria-hidden="true"></i>
                  </summary>
                  <div class="faq-answer">
                    <p class="mb-0">{{ item.answer }}</p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================
           RELATED SERVICES — Cross-sell
           ======================================== -->
      <section v-if="relatedServices.length > 0" class="py-5">
        <div class="container py-4">
          <div class="section-header text-center mb-5">
            <div class="section-eyebrow text-primary mb-2">
              <i class="bi bi-arrow-right-circle-fill me-2"></i>
              {{ $t('services.details.sectionLabels.relatedServices') }}
            </div>
            <h2 class="h2 fw-bold mb-3">{{ $t('services.details.exploreMore') }}</h2>
          </div>
          <div class="row g-4">
            <div
              v-for="related in relatedServices"
              :key="related.slug"
              class="col-md-6 col-lg-4"
            >
              <NuxtLink :to="`/services/${related.slug}`" class="related-card text-decoration-none">
                <div class="related-icon">
                  <i :class="`bi ${related.icon}`"></i>
                </div>
                <h5 class="fw-bold mb-2">{{ related.name }}</h5>
                <span class="related-link">
                  {{ $t('services.learnMore') }} <i class="bi bi-arrow-right ms-1"></i>
                </span>
              </NuxtLink>
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

const { t, tm, locale } = useI18n()
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

interface ServiceDetail {
  name: string
  icon: string
  hero?: {
    tagline: string
    headline: string
    subheadline: string
    ctaPrimary: string
    ctaSecondary: string
    stats: Array<{ value: string; label: string }>
  }
  challenge?: { title: string; description: string; painPoints: string[] }
  howWeDeliver: { title: string; description: string; items: string[] }
  capabilities?: {
    title: string
    groups: Array<{ name: string; icon: string; items: string[] }>
  }
  keyUseCases: { title: string; description: string; items: string[] }
  ourApproach: {
    title: string
    description: string
    items: Array<string | { title: string; description: string }>
  }
  industryApplications?: {
    title: string
    description: string
    industries: Array<{ name: string; icon: string; description: string; useCases: string[] }>
  }
  technologies: { title: string; description: string; items: string[] }
  businessImpact: { title: string; description: string; items: string[] }
  differentiators?: {
    title: string
    points: Array<{ title: string; description: string; icon: string }>
  }
  caseStudy?: {
    title: string
    client?: string
    challenge: string
    approach: string
    result: string
  }
  faq?: { title: string; items: Array<{ question: string; answer: string }> }
  closing: { title: string; subtitle: string }
}

// Read service details from i18n
const detail = computed<ServiceDetail | null>(() => {
  const items = tm('services.details.items') as Record<string, ServiceDetail> | undefined
  if (!items || !items[slug.value]) return null
  return items[slug.value]
})

// Related services (exclude current + delivery, pick 3)
interface RelatedService {
  slug: string
  name: string
  icon: string
}

const relatedServices = computed<RelatedService[]>(() => {
  const items = tm('services.details.items') as Record<string, ServiceDetail> | undefined
  if (!items) return []
  return Object.entries(items)
    .filter(([key]) => key !== slug.value)
    .slice(0, 3)
    .map(([key, val]) => ({
      slug: key,
      name: val.name,
      icon: val.icon,
    }))
})

// SEO meta
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
        t('services.page.subtitle'),
    },
    { name: 'author', content: 'Gamma Neutral Consulting Inc.' },
  ],
}))
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
   CASE STUDY
   ======================================== */
.case-study-section {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  position: relative;
  overflow: hidden;
}

.case-study-card {
  padding: 2.5rem 3rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.25rem;
  backdrop-filter: blur(10px);
}

.case-stage {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 0.875rem;
  height: 100%;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.9375rem;
  line-height: 1.6;
  border-top: 3px solid;
}

.case-stage-challenge { border-top-color: #dc2626; }
.case-stage-approach { border-top-color: #f59e0b; }
.case-stage-result { border-top-color: #10b981; }

.case-stage-label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.75rem;
}

/* ========================================
   FAQ
   ======================================== */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.faq-item {
  background: var(--bs-body-bg, #ffffff);
  border: 1px solid var(--bs-border-color, #e5e7eb);
  border-radius: 0.875rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item[open] {
  border-color: rgba(14, 165, 233, 0.3);
  box-shadow: 0 8px 24px rgba(14, 165, 233, 0.08);
}

.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.125rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--bs-heading-color, #1f2937);
  cursor: pointer;
  list-style: none;
  transition: color 0.2s ease;
}

.faq-question::-webkit-details-marker {
  display: none;
}

.faq-toggle {
  color: #0ea5e9;
  font-size: 1.25rem;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.faq-item[open] .faq-toggle {
  transform: rotate(45deg);
}

.faq-item[open] .faq-question {
  color: #0ea5e9;
}

.faq-answer {
  padding: 0 1.5rem 1.25rem;
  color: var(--bs-body-color);
  font-size: 0.9375rem;
  line-height: 1.65;
}

/* ========================================
   RELATED SERVICES
   ======================================== */
.related-card {
  display: block;
  padding: 1.75rem;
  background: var(--bs-body-bg, #ffffff);
  border: 1px solid var(--bs-border-color, #e5e7eb);
  border-radius: 1rem;
  height: 100%;
  transition: all 0.3s ease;
  color: var(--bs-body-color);
}

.related-card:hover {
  transform: translateY(-4px);
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 12px 32px rgba(139, 92, 246, 0.1);
}

.related-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.related-link {
  display: inline-flex;
  align-items: center;
  color: #8b5cf6;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.related-card:hover .related-link {
  color: #7c3aed;
  transform: translateX(3px);
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
:global([data-bs-theme="dark"]) .bg-light {
  background-color: rgba(255, 255, 255, 0.03) !important;
}

:global([data-bs-theme="dark"]) .detail-item,
:global([data-bs-theme="dark"]) .capability-card,
:global([data-bs-theme="dark"]) .approach-step-item,
:global([data-bs-theme="dark"]) .industry-app-card,
:global([data-bs-theme="dark"]) .tech-badge,
:global([data-bs-theme="dark"]) .impact-card,
:global([data-bs-theme="dark"]) .diff-card,
:global([data-bs-theme="dark"]) .faq-item,
:global([data-bs-theme="dark"]) .related-card,
:global([data-bs-theme="dark"]) .challenge-item {
  background: rgba(255, 255, 255, 0.04) !important;
  border-color: rgba(255, 255, 255, 0.08) !important;
}

/* Preserve challenge item left-border accent color in dark mode */
:global([data-bs-theme="dark"]) .challenge-item {
  border-left-color: rgba(220, 38, 38, 0.7) !important;
}

/* Strengthen hover shadow in dark mode for visibility */
:global([data-bs-theme="dark"]) .approach-step-item:hover {
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.18) !important;
}

:global([data-bs-theme="dark"]) .text-muted {
  color: rgba(255, 255, 255, 0.65) !important;
}

:global([data-bs-theme="dark"]) .capability-title,
:global([data-bs-theme="dark"]) .faq-question,
:global([data-bs-theme="dark"]) .industry-app-card h4,
:global([data-bs-theme="dark"]) .diff-card h5,
:global([data-bs-theme="dark"]) .related-card h5,
:global([data-bs-theme="dark"]) .approach-content h5 {
  color: #ffffff !important;
}

:global([data-bs-theme="dark"]) .capability-header {
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

:global([data-bs-theme="dark"]) .industry-usecase-list li {
  border-top-color: rgba(255, 255, 255, 0.08);
}

/* ========================================
   RESPONSIVE
   ======================================== */
@media (max-width: 991.98px) {
  .case-study-card {
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 991.98px) {
  /* Add divider between narrative and pain points on tablet/mobile */
  .challenge-grid {
    padding-top: 1.5rem;
    margin-top: 0.5rem;
    border-top: 1px solid var(--bs-border-color, #e5e7eb);
  }
}

:global([data-bs-theme="dark"]) .challenge-grid {
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

  .case-study-card {
    padding: 1.5rem 1.25rem;
  }
}

@media (max-width: 575.98px) {
  .case-study-card {
    padding: 1.25rem 1rem;
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
  .faq-item,
  .related-card,
  .challenge-item,
  .stat-card,
  .btn-white,
  .btn-outline-light,
  .faq-toggle {
    transition: none !important;
  }
}
</style>
