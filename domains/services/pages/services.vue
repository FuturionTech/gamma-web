<template>
  <div class="services-page">
    <!-- ========================================
         HERO SECTION — Dark navy gradient
         ======================================== -->
    <section class="hero-gradient position-relative overflow-hidden hero-offset">
      <div class="container position-relative z-2 py-4 py-md-5">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb" class="mb-4">
              <ol class="breadcrumb justify-content-center mb-0">
                <li class="breadcrumb-item">
                  <NuxtLink to="/" class="text-white text-opacity-75 text-decoration-none">
                    {{ $t('breadcrumbs.home') }}
                  </NuxtLink>
                </li>
                <li class="breadcrumb-item active text-white" aria-current="page">
                  {{ $t('breadcrumbs.services') }}
                </li>
              </ol>
            </nav>

            <!-- Title -->
            <h1 class="display-4 fw-bold text-white mb-3">
              {{ $t('services.page.title') }}
            </h1>

            <!-- Subtitle -->
            <p class="fs-6 fs-md-5 text-white text-opacity-75 mb-0 mx-auto" style="max-width: 680px;">
              {{ $t('services.page.subtitle') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================
         SERVICES GRID — White background
         ======================================== -->
    <section class="py-5">
      <div class="container py-4">
        <SectionHeader
          :title="$t('services.page.coreServicesTitle')"
          :subtitle="$t('services.page.coreServicesSubtitle')"
          headingSize="h2"
          maxWidth="640px"
        />

        <!-- Loading Skeletons -->
        <div v-if="servicesStore.loading" class="row g-4">
          <div class="col-sm-6 col-lg-4" v-for="n in 6" :key="n">
            <div class="card h-100 p-4 rounded-4 border-0 shadow-sm">
              <div class="placeholder-glow">
                <div class="placeholder bg-secondary rounded-circle mb-4" style="width: 56px; height: 56px;"></div>
                <div class="placeholder bg-secondary col-8 mb-3 rounded" style="height: 20px;"></div>
                <div class="placeholder bg-secondary col-12 mb-2 rounded" style="height: 14px;"></div>
                <div class="placeholder bg-secondary col-10 mb-2 rounded" style="height: 14px;"></div>
                <div class="placeholder bg-secondary col-6 rounded" style="height: 14px;"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Service Cards -->
        <div v-else class="row g-4">
          <div
            class="col-sm-6 col-lg-4"
            v-for="(service, index) in services"
            :key="index"
          >
            <ServiceCard
              :title="service.title"
              :description="service.description"
              :features="service.features"
              :icon="service.icon"
              :gradientClass="service.gradientClass"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================
         OUR APPROACH — Light gray background
         ======================================== -->
    <section class="bg-light py-5">
      <div class="container py-4">
        <SectionHeader
          :title="$t('services.page.approachTitle')"
          :subtitle="$t('services.page.approachSubtitle')"
          headingSize="h2"
          maxWidth="640px"
        />

        <!-- Approach steps as horizontal flow -->
        <div class="row g-4">
          <div
            v-for="(step, index) in approachSteps"
            :key="index"
            class="col-sm-6 col-lg"
          >
            <div class="approach-step text-center h-100">
              <!-- Step number circle -->
              <div class="step-circle mx-auto mb-3">
                <span class="fw-bold">{{ index + 1 }}</span>
              </div>

              <!-- Icon -->
              <div class="mb-2">
                <i :class="`bi ${step.icon} fs-4 text-primary`"></i>
              </div>

              <!-- Title -->
              <h5 class="fw-bold mb-2">{{ step.title }}</h5>

              <!-- Description -->
              <p class="text-muted small mb-0">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================
         INDUSTRY FOCUS — Card-based layout
         ======================================== -->
    <section class="py-5">
      <div class="container py-4">
        <SectionHeader
          :title="$t('services.page.industryFocusTitle')"
          :subtitle="$t('services.page.industryFocusSubtitle')"
          headingSize="h2"
          maxWidth="640px"
        />

        <!-- Industry Cards -->
        <div class="row g-4 mb-5">
          <div
            v-for="industry in industries"
            :key="industry.key"
            class="col-sm-6 col-lg-4"
          >
            <div class="card h-100 border-0 shadow-sm rounded-4 industry-card">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="industry-icon-wrapper me-3" :class="industry.colorClass">
                    <i :class="`bi ${industry.icon}`"></i>
                  </div>
                  <h5 class="fw-bold mb-0">{{ $t(`industries.${industry.key}.title`) }}</h5>
                </div>
                <p class="text-muted small mb-0">{{ $t(`industries.${industry.key}.description`) }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Compliance Frameworks -->
        <div class="text-center">
          <p class="text-muted small text-uppercase fw-semibold ls-wide mb-3">
            {{ $t('services.page.complianceLabel') }}
          </p>
          <div class="d-flex flex-wrap justify-content-center gap-2">
            <span
              v-for="framework in complianceFrameworks"
              :key="framework"
              class="badge compliance-badge rounded-pill px-3 py-2"
            >
              {{ framework }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================
         CTA SECTION — Dark navy gradient
         ======================================== -->
    <section class="cta-gradient py-4 py-md-5">
      <div class="container py-3 py-md-5">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="display-5 fw-bold text-white mb-3 mb-md-4">
              {{ $t('services.page.ctaTitle') }}
            </h2>
            <p class="fs-6 fs-md-5 text-white text-opacity-75 mb-4 mb-md-5">
              {{ $t('services.page.ctaSubtitle') }}
            </p>
            <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
              <NuxtLink to="/contact" class="btn btn-white btn-lg px-4 px-sm-5 py-3 rounded-pill fw-semibold" @click="$trackEvent('cta_click', { location: 'services_cta', label: 'schedule_consultation' })">
                <i class="bi bi-calendar-check me-2"></i>
                {{ $t('services.page.ctaPrimary') }}
              </NuxtLink>
              <NuxtLink to="/about" class="btn btn-outline-light btn-lg px-4 px-sm-5 py-3 rounded-pill fw-semibold">
                {{ $t('services.page.ctaSecondary') }}
              </NuxtLink>
            </div>
            <p class="text-white text-opacity-75 mt-4 small mb-0">
              {{ $t('services.page.ctaNoCommitment') }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports'
import ServiceCard from '~/components/shared/cards/ServiceCard.vue'
import SectionHeader from '~/components/shared/sections/SectionHeader.vue'
import { useServicesStore } from '~/domains/services/stores/useServicesStore'

const { $trackEvent } = useNuxtApp()
const { t, tm, locale } = useI18n()
const servicesStore = useServicesStore()

// Fetch services from API
onMounted(async () => {
  await servicesStore.fetchServices(20)
})

// Re-fetch when locale changes
watch(locale, () => {
  servicesStore.fetchServices(20)
})

useHead({
  title: 'Our Services | AI, Data Engineering & Cloud Consulting | Gamma Neutral',
  meta: [
    { name: 'description', content: 'From Artificial Intelligence (AI) and ML engineering to data architecture, cloud migration, cybersecurity, and business intelligence — consulting services that move from pilot to production.' },
    { name: 'keywords', content: 'Artificial Intelligence consulting, AI consulting, data engineering, cloud migration, cybersecurity, business intelligence, MLOps, data architecture, Toronto' },
    { name: 'author', content: 'Gamma Neutral Consulting Inc.' },
  ],
})

// Icon-to-gradient mapping for API services
const iconGradientMap: Record<string, string> = {
  brain: 'bg-gradient-primary',
  database: 'bg-gradient-info',
  cloud: 'bg-gradient-success',
  shield: 'bg-gradient-danger',
  chart: 'bg-gradient-warning',
  server: 'bg-gradient-purple',
  clipboard: 'bg-gradient-dark',
}

// Bootstrap icon mapping from API icon names
const iconBootstrapMap: Record<string, string> = {
  brain: 'bi bi-cpu',
  database: 'bi bi-database',
  cloud: 'bi bi-cloud',
  shield: 'bi bi-shield-check',
  chart: 'bi bi-bar-chart',
  server: 'bi bi-hdd-stack',
  clipboard: 'bi bi-clipboard-data',
}

// i18n-driven service keys for the static fallback
const serviceKeys = ['ai', 'dataEngineering', 'cloud', 'cybersecurity', 'bi', 'bigData', 'delivery'] as const
const serviceIconMap: Record<string, string> = {
  ai: 'bi bi-cpu',
  dataEngineering: 'bi bi-database',
  cloud: 'bi bi-cloud',
  cybersecurity: 'bi bi-shield-check',
  bi: 'bi bi-bar-chart',
  bigData: 'bi bi-hdd-stack',
  delivery: 'bi bi-clipboard-data',
}
const serviceGradientMap: Record<string, string> = {
  ai: 'bg-gradient-primary',
  dataEngineering: 'bg-gradient-info',
  cloud: 'bg-gradient-success',
  cybersecurity: 'bg-gradient-danger',
  bi: 'bg-gradient-warning',
  bigData: 'bg-gradient-purple',
  delivery: 'bg-gradient-dark',
}

// Prefer API data, fall back to i18n static translations
const services = computed(() => {
  if (servicesStore.services.length > 0) {
    return servicesStore.services.map((s) => ({
      title: s.title,
      description: s.short_description || s.description,
      icon: iconBootstrapMap[s.icon ?? ''] || 'bi bi-gear',
      gradientClass: iconGradientMap[s.icon ?? ''] || 'bg-gradient-primary',
      features: s.features.map((f) => f.title),
    }))
  }
  return serviceKeys.map((key) => ({
    title: t(`services.${key}.title`),
    description: t(`services.${key}.description`),
    icon: serviceIconMap[key],
    gradientClass: serviceGradientMap[key],
    features: tm(`services.${key}.features`) as string[],
  }))
})

// Industry focus data
const industries = [
  { key: 'banking', icon: 'bi-bank', colorClass: 'industry-icon-primary' },
  { key: 'healthcare', icon: 'bi-heart-pulse', colorClass: 'industry-icon-danger' },
  { key: 'government', icon: 'bi-building', colorClass: 'industry-icon-info' },
  { key: 'education', icon: 'bi-mortarboard', colorClass: 'industry-icon-success' },
  { key: 'business', icon: 'bi-briefcase', colorClass: 'industry-icon-warning' },
  { key: 'ngo', icon: 'bi-globe2', colorClass: 'industry-icon-purple' },
]

const complianceFrameworks = ['OSFI', 'PIPEDA', 'PHIPA', 'SOC 2', 'ISO 27001', 'GDPR', 'HIPAA']

const approachKeys = ['discovery', 'design', 'development', 'deployment', 'support'] as const
const approachIcons = ['bi-search', 'bi-palette', 'bi-code-slash', 'bi-rocket-takeoff', 'bi-headset'] as const

const approachSteps = computed(() =>
  approachKeys.map((key, i) => ({
    title: t(`approach.${key}.title`),
    description: t(`approach.${key}.description`),
    icon: approachIcons[i],
  })),
)
</script>

<style scoped>
/* ================================
   HERO GRADIENT — matches about page
   ================================ */
.hero-offset {
  margin-top: 80px;
}

.hero-gradient {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
}

/* Breadcrumb styling inside dark hero */
.breadcrumb {
  background: transparent;
  padding: 0;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.65);
}

/* ================================
   APPROACH STEPS
   ================================ */
.step-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  transition: transform 0.3s ease;
}

.approach-step:hover .step-circle {
  transform: scale(1.1);
}

/* ================================
   INDUSTRY FOCUS — cards & badges
   ================================ */
.industry-card {
  transition: all 0.3s ease;
}

.industry-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
}

.industry-icon-wrapper {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.industry-icon-primary { background: rgba(139, 92, 246, 0.1); color: #8b5cf6; }
.industry-icon-danger  { background: rgba(220, 38, 38, 0.1); color: #dc2626; }
.industry-icon-info    { background: rgba(59, 130, 246, 0.1); color: #3b82f6; }
.industry-icon-success { background: rgba(5, 150, 105, 0.1); color: #059669; }
.industry-icon-warning { background: rgba(217, 119, 6, 0.1); color: #d97706; }
.industry-icon-purple  { background: rgba(124, 58, 237, 0.1); color: #7c3aed; }

.compliance-badge {
  background: rgba(139, 92, 246, 0.08);
  color: #6d28d9;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  border: 1px solid rgba(139, 92, 246, 0.15);
}

.ls-wide {
  letter-spacing: 0.1em;
}

:global([data-bs-theme="dark"]) .industry-card {
  background-color: rgba(255, 255, 255, 0.04) !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
}

:global([data-bs-theme="dark"]) .industry-card:hover {
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.12) !important;
  border-color: rgba(139, 92, 246, 0.25) !important;
}

:global([data-bs-theme="dark"]) .industry-card h5 {
  color: #ffffff;
}

:global([data-bs-theme="dark"]) .compliance-badge {
  background: rgba(139, 92, 246, 0.15);
  color: #c4b5fd;
  border-color: rgba(139, 92, 246, 0.3);
}

/* ================================
   CTA SECTION — dark gradient
   ================================ */
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

/* ================================
   DARK MODE SUPPORT
   ================================ */
:global([data-bs-theme="dark"]) .bg-light {
  background-color: rgba(255, 255, 255, 0.03) !important;
}

/* ================================
   RESPONSIVE DESIGN
   ================================ */
@media (max-width: 991px) {
  .display-4 {
    font-size: 2.25rem;
  }

  .display-5 {
    font-size: 2rem;
  }
}

@media (max-width: 767.98px) {
  .hero-offset {
    margin-top: 64px;
  }
}

@media (max-width: 576px) {
  .display-4 {
    font-size: clamp(1.5rem, 5vw, 1.75rem);
  }

  .display-5 {
    font-size: 1.5rem;
  }

  .display-6 {
    font-size: 1.35rem;
  }

  .industry-icon-wrapper {
    width: 38px;
    height: 38px;
    font-size: 1rem;
    border-radius: 10px;
  }
}

/* ================================
   ACCESSIBILITY
   ================================ */
@media (prefers-reduced-motion: reduce) {
  .step-circle,
  .btn-white,
  .btn-outline-light {
    transition: none !important;
  }
}
</style>
