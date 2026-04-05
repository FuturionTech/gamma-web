<template>
  <div class="service-detail-page">
    <!-- Hero Section -->
    <section class="hero-gradient position-relative overflow-hidden hero-offset">
      <div class="container position-relative z-2 py-4 py-md-5">
        <div class="row">
          <div class="col-lg-9 mx-auto text-center">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb" class="mb-4">
              <ol class="breadcrumb justify-content-center mb-0">
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

            <!-- Icon -->
            <div v-if="detail?.icon" class="mb-3 d-flex justify-content-center">
              <div class="hero-icon">
                <i :class="`bi ${detail.icon}`"></i>
              </div>
            </div>

            <!-- Title -->
            <h1 class="display-4 fw-bold text-white mb-3">
              {{ detail?.name }}
            </h1>

            <!-- Description -->
            <p class="fs-5 text-white text-opacity-75 mb-0 mx-auto" style="max-width: 720px;">
              {{ detail?.howWeDeliver?.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Not Found State -->
    <section v-if="!detail" class="py-5">
      <div class="container py-5 text-center">
        <i class="bi bi-exclamation-circle text-warning" style="font-size: 3rem;"></i>
        <h2 class="mt-3 mb-3">{{ $t('services.details.notFound', 'Service not found') }}</h2>
        <NuxtLink to="/services" class="btn btn-primary">
          <i class="bi bi-arrow-left me-2"></i>{{ $t('services.details.backToServices') }}
        </NuxtLink>
      </div>
    </section>

    <template v-else>
      <!-- How We Deliver -->
      <section class="py-5">
        <div class="container py-4">
          <div class="row">
            <div class="col-lg-10 mx-auto">
              <div class="section-header text-center mb-5">
                <div class="section-icon-wrapper mb-3">
                  <i class="bi bi-rocket-takeoff"></i>
                </div>
                <h2 class="fw-bold mb-3">{{ detail.howWeDeliver.title }}</h2>
                <p class="text-muted mx-auto" style="max-width: 680px;">
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

      <!-- Key Use Cases -->
      <section class="bg-light py-5">
        <div class="container py-4">
          <div class="row">
            <div class="col-lg-10 mx-auto">
              <div class="section-header text-center mb-5">
                <div class="section-icon-wrapper section-icon-info mb-3">
                  <i class="bi bi-briefcase"></i>
                </div>
                <h2 class="fw-bold mb-3">{{ detail.keyUseCases.title }}</h2>
                <p class="text-muted mx-auto" style="max-width: 680px;">
                  {{ detail.keyUseCases.description }}
                </p>
              </div>
              <div class="row g-3">
                <div
                  v-for="(item, i) in detail.keyUseCases.items"
                  :key="i"
                  class="col-md-6"
                >
                  <div class="use-case-card">
                    <i class="bi bi-arrow-right-circle-fill use-case-icon me-3"></i>
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Approach -->
      <section class="py-5">
        <div class="container py-4">
          <div class="row">
            <div class="col-lg-10 mx-auto">
              <div class="section-header text-center mb-5">
                <div class="section-icon-wrapper section-icon-success mb-3">
                  <i class="bi bi-puzzle"></i>
                </div>
                <h2 class="fw-bold mb-3">{{ detail.ourApproach.title }}</h2>
                <p class="text-muted mx-auto" style="max-width: 680px;">
                  {{ detail.ourApproach.description }}
                </p>
              </div>
              <div class="approach-timeline">
                <div
                  v-for="(item, i) in detail.ourApproach.items"
                  :key="i"
                  class="approach-step-item"
                >
                  <div class="approach-number">{{ i + 1 }}</div>
                  <div class="approach-content">{{ item }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Technologies -->
      <section class="bg-light py-5">
        <div class="container py-4">
          <div class="row">
            <div class="col-lg-10 mx-auto">
              <div class="section-header text-center mb-5">
                <div class="section-icon-wrapper section-icon-warning mb-3">
                  <i class="bi bi-tools"></i>
                </div>
                <h2 class="fw-bold mb-3">{{ detail.technologies.title }}</h2>
                <p class="text-muted mx-auto" style="max-width: 680px;">
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

      <!-- Business Impact -->
      <section class="py-5">
        <div class="container py-4">
          <div class="row">
            <div class="col-lg-10 mx-auto">
              <div class="section-header text-center mb-5">
                <div class="section-icon-wrapper section-icon-danger mb-3">
                  <i class="bi bi-graph-up-arrow"></i>
                </div>
                <h2 class="fw-bold mb-3">{{ detail.businessImpact.title }}</h2>
                <p class="text-muted mx-auto" style="max-width: 680px;">
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
                    <i class="bi bi-stars impact-icon"></i>
                    <p class="mb-0">{{ item }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Closing CTA -->
      <section class="cta-gradient py-5">
        <div class="container py-4">
          <div class="row">
            <div class="col-lg-8 mx-auto text-center">
              <h2 class="h2 fw-bold text-white mb-3">{{ detail.closing.title }}</h2>
              <p class="fs-5 text-white text-opacity-75 mb-4">{{ detail.closing.subtitle }}</p>
              <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
                <NuxtLink to="/contact" class="btn btn-white btn-lg px-4 py-2 shadow">
                  <i class="bi bi-calendar-check me-2"></i>
                  {{ $t('services.details.ctaContact') }}
                </NuxtLink>
                <NuxtLink to="/services" class="btn btn-outline-light btn-lg px-4 py-2">
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

interface ServiceDetailSection {
  title: string
  description: string
  items: string[]
}

interface ServiceDetail {
  name: string
  icon: string
  howWeDeliver: ServiceDetailSection
  keyUseCases: ServiceDetailSection
  ourApproach: ServiceDetailSection
  technologies: ServiceDetailSection
  businessImpact: ServiceDetailSection
  closing: { title: string; subtitle: string }
}

// Read service details from i18n
const detail = computed<ServiceDetail | null>(() => {
  const items = tm('services.details.items') as Record<string, ServiceDetail> | undefined
  if (!items || !items[slug.value]) return null
  return items[slug.value]
})

// SEO meta
useHead(() => ({
  title: detail.value
    ? `${detail.value.name} | Gamma Neutral Consulting`
    : 'Service | Gamma Neutral Consulting',
  meta: [
    {
      name: 'description',
      content: detail.value?.howWeDeliver?.description || t('services.page.subtitle'),
    },
    { name: 'author', content: 'Gamma Neutral Consulting Inc.' },
  ],
}))
</script>

<style scoped>
/* Hero */
.hero-offset {
  margin-top: 80px;
}

.hero-gradient {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
}

.hero-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(139, 92, 246, 0.2);
  color: #c4b5fd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.breadcrumb {
  background: transparent;
  padding: 0;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.65);
}

/* Section headers */
.section-icon-wrapper {
  width: 64px;
  height: 64px;
  margin: 0 auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
  font-size: 1.5rem;
}

.section-icon-info { background: rgba(14, 165, 233, 0.1); color: #0ea5e9; }
.section-icon-success { background: rgba(16, 185, 129, 0.1); color: #10b981; }
.section-icon-warning { background: rgba(245, 158, 11, 0.1); color: #f59e0b; }
.section-icon-danger { background: rgba(220, 38, 38, 0.1); color: #dc2626; }

/* Detail items (How We Deliver) */
.detail-item {
  display: flex;
  align-items: flex-start;
  padding: 1rem 1.25rem;
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

/* Use case cards */
.use-case-card {
  display: flex;
  align-items: flex-start;
  padding: 1rem 1.25rem;
  background: var(--bs-body-bg, #ffffff);
  border-radius: 0.75rem;
  border-left: 3px solid #0ea5e9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  height: 100%;
}

.use-case-card:hover {
  transform: translateX(3px);
  box-shadow: 0 8px 24px rgba(14, 165, 233, 0.12);
}

.use-case-icon {
  color: #0ea5e9;
  font-size: 1.25rem;
  flex-shrink: 0;
  margin-top: 2px;
}

/* Approach timeline */
.approach-timeline {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 720px;
  margin: 0 auto;
}

.approach-step-item {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem 1.5rem;
  background: var(--bs-body-bg, #ffffff);
  border: 1px solid var(--bs-border-color, #e5e7eb);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

.approach-step-item:hover {
  transform: translateX(6px);
  border-color: rgba(16, 185, 129, 0.3);
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.08);
}

.approach-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}

.approach-content {
  font-weight: 500;
  color: var(--bs-body-color);
}

/* Tech badges */
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

/* Impact cards */
.impact-card {
  padding: 1.5rem;
  background: var(--bs-body-bg, #ffffff);
  border: 1px solid var(--bs-border-color, #e5e7eb);
  border-radius: 0.75rem;
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
  border-color: rgba(220, 38, 38, 0.3);
  box-shadow: 0 12px 32px rgba(220, 38, 38, 0.08);
}

.impact-icon {
  color: #dc2626;
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
}

/* CTA */
.cta-gradient {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
}

.btn-white {
  background: #ffffff;
  color: #1a1a2e;
  border: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-white:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  color: #0f3460;
}

.btn-outline-light {
  border: 2px solid rgba(255, 255, 255, 0.5);
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

/* Dark mode */
:global([data-bs-theme="dark"]) .bg-light {
  background-color: rgba(255, 255, 255, 0.03) !important;
}

:global([data-bs-theme="dark"]) .detail-item,
:global([data-bs-theme="dark"]) .use-case-card,
:global([data-bs-theme="dark"]) .approach-step-item,
:global([data-bs-theme="dark"]) .tech-badge,
:global([data-bs-theme="dark"]) .impact-card {
  background: rgba(255, 255, 255, 0.04) !important;
  border-color: rgba(255, 255, 255, 0.08) !important;
}

:global([data-bs-theme="dark"]) .text-muted {
  color: rgba(255, 255, 255, 0.65) !important;
}

/* Responsive */
@media (max-width: 767.98px) {
  .hero-offset {
    margin-top: 64px;
  }

  .display-4 {
    font-size: 2rem;
  }

  .approach-step-item {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .detail-item,
  .use-case-card,
  .approach-step-item,
  .tech-badge,
  .impact-card,
  .btn-white,
  .btn-outline-light {
    transition: none !important;
  }
}
</style>
