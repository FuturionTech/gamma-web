<template>
  <div class="services-page">
    <!-- ========================================
         HERO SECTION — Dark navy gradient
         ======================================== -->
    <section class="hero-gradient position-relative overflow-hidden hero-offset">
      <!-- Ambient light effect -->
      <div class="hero-glow"></div>
      
      <div class="container position-relative z-2 py-5">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb" class="mb-4 reveal-fade-up">
              <ol class="breadcrumb justify-content-center mb-0">
                <li class="breadcrumb-item">
                  <NuxtLink to="/" class="text-white text-opacity-60 text-decoration-none hover-white">
                    {{ $t('breadcrumbs.home') }}
                  </NuxtLink>
                </li>
                <li class="breadcrumb-item active text-white fw-medium" aria-current="page">
                  {{ $t('breadcrumbs.services') }}
                </li>
              </ol>
            </nav>
 
            <!-- Title -->
            <h1 class="display-3 fw-bold text-white mb-4 tracking-tight reveal-fade-up-1">
              {{ $t('services.page.title') }}
            </h1>
 
            <!-- Subtitle -->
            <p class="fs-5 text-white text-opacity-80 mb-0 mx-auto leading-relaxed reveal-fade-up-2" style="max-width: 720px;">
              {{ $t('services.page.subtitle') }}
            </p>
          </div>
        </div>
      </div>
 
      <!-- Bottom wave/curve separator -->
      <div class="hero-separator">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 76.7C480 73.3 600 86.7 720 90C840 93.3 960 86.7 1080 73.3C1200 60 1320 40 1380 30L1440 20V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
 
    <!-- ========================================
         SERVICES GRID — Refined Grid
         ======================================== -->
    <section class="py-5 bg-white-to-gray position-relative">
      <div class="container py-5 position-relative z-1">
        <SectionHeader
          :title="$t('services.page.coreServicesTitle')"
          :subtitle="$t('services.page.coreServicesSubtitle')"
          headingSize="display-5"
          maxWidth="700px"
          class="reveal-fade-up"
        />
 
        <!-- Loading Skeletons -->
        <div v-if="servicesStore.loading" class="row g-4">
          <div class="col-sm-6 col-lg-4" v-for="n in 6" :key="n">
            <div class="card h-100 p-4 rounded-5 border-0 shadow-sm glass-loading">
              <div class="placeholder-glow">
                <div class="placeholder bg-light rounded-4 mb-4" style="width: 64px; height: 64px;"></div>
                <div class="placeholder bg-light col-8 mb-3 rounded-pill" style="height: 24px;"></div>
                <div class="placeholder bg-light col-11 mb-2 rounded-pill" style="height: 14px;"></div>
                <div class="placeholder bg-light col-9 rounded-pill" style="height: 14px;"></div>
              </div>
            </div>
          </div>
        </div>
 
        <!-- Service Cards with Stagger -->
        <div v-else class="row g-4">
          <div
            class="col-sm-6 col-lg-4"
            v-for="(service, index) in services"
            :key="index"
          >
            <div class="reveal-card" :style="{ '--delay': index * 0.1 + 's' }">
              <ServiceCard
                :title="service.title"
                :description="service.description"
                :features="service.features"
                :icon="service.icon"
                :gradientClass="service.gradientClass"
                :link="service.link"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
 
    <!-- ========================================
         OUR APPROACH — Sophisticated Timeline
         ======================================== -->
    <section class="py-5 position-relative approach-bg-gradient overflow-hidden">
      <!-- Ambient Glow -->
      <div class="ambient-glow glow-primary"></div>
      
      <div class="container py-5 position-relative z-1">
        <SectionHeader
          :title="$t('services.page.approachTitle')"
          :subtitle="$t('services.page.approachSubtitle')"
          headingSize="display-5"
          maxWidth="700px"
        />
 
        <div class="approach-grid position-relative mt-5">
          <!-- Connection Line (Desktop) -->
          <div class="approach-line d-none d-lg-block"></div>
          
          <div class="row g-5">
            <div
              v-for="(step, index) in approachSteps"
              :key="index"
              class="col-sm-6 col-lg"
            >
              <div class="approach-step-v2 glass-card-v2 h-100 p-4 rounded-4 text-center">
                <div class="step-badge mb-4">
                  <span class="step-num">{{ index + 1 }}</span>
                  <div class="step-glow"></div>
                </div>
 
                <div class="step-icon-box mb-3">
                  <i :class="`bi ${step.icon} fs-3`"></i>
                </div>
 
                <h5 class="fw-bold mb-3 tracking-tight">{{ step.title }}</h5>
                <p class="text-muted small mb-0 lh-lg opacity-80">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 
    <!-- ========================================
         INDUSTRY FOCUS — Glass Dashboard
         ======================================== -->
    <section class="py-5 position-relative">
      <div class="container py-5">
        <SectionHeader
          :title="$t('services.page.industryFocusTitle')"
          :subtitle="$t('services.page.industryFocusSubtitle')"
          headingSize="display-5"
          maxWidth="720px"
        />
 
        <!-- Industry Dashboard Cards -->
        <div class="row g-4 mb-5">
          <div
            v-for="industry in industries"
            :key="industry.key"
            class="col-sm-6 col-lg-4"
          >
            <div class="industry-card-v2 glass-card-v3 h-100 p-4 rounded-4 border-0">
              <div class="d-flex align-items-center mb-3">
                <div class="industry-icon-orb me-3" :class="industry.colorClass">
                  <i :class="`bi ${industry.icon}`"></i>
                </div>
                <h5 class="fw-bold mb-0 tracking-tight">{{ $t(`industries.${industry.key}.title`) }}</h5>
              </div>
              <p class="text-muted small mb-0 lh-relaxed opacity-90">{{ $t(`industries.${industry.key}.description`) }}</p>
            </div>
          </div>
        </div>
 
        <!-- Compliance Frameworks Chips -->
        <div class="text-center pt-4">
          <p class="text-uppercase small fw-bold text-gradient-primary ls-2 mb-4">
            {{ $t('services.page.complianceLabel') }}
          </p>
          <div class="d-flex flex-wrap justify-content-center gap-3">
            <span
              v-for="framework in complianceFrameworks"
              :key="framework"
              class="framework-chip rounded-pill px-4 py-2"
            >
              {{ framework }}
            </span>
          </div>
        </div>
      </div>
    </section>
 
    <!-- ========================================
         CTA SECTION — Premium Dark Mode
         ======================================== -->
    <section class="cta-section overflow-hidden py-5">
      <div class="container py-5 relative z-1">
        <div class="cta-inner glass-card-dark p-5 rounded-5 text-center">
          <div class="ambient-glow-cta"></div>
          
          <div class="relative z-1">
            <h2 class="display-4 fw-bold text-white mb-4 tracking-tight px-md-5">
              {{ $t('services.page.ctaTitle') }}
            </h2>
            <p class="fs-5 text-white text-opacity-70 mb-5 mx-auto px-md-5" style="max-width: 760px;">
              {{ $t('services.page.ctaSubtitle') }}
            </p>
            
            <div class="d-flex flex-column flex-sm-row gap-4 justify-content-center align-items-center">
              <NuxtLink to="/contact" class="btn btn-primary-premium btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg" @click="$trackEvent('cta_click', { location: 'services_cta', label: 'schedule_consultation' })">
                <i class="bi bi-calendar-check-fill me-2"></i>
                {{ $t('services.page.ctaPrimary') }}
              </NuxtLink>
              <NuxtLink to="/about" class="btn btn-outline-light-premium btn-lg px-5 py-3 rounded-pill fw-bold">
                {{ $t('services.page.ctaSecondary') }}
              </NuxtLink>
            </div>
            
            <div class="mt-5 d-flex align-items-center justify-content-center gap-2 text-white text-opacity-50 small">
              <i class="bi bi-info-circle"></i>
              <span>{{ $t('services.page.ctaNoCommitment') }}</span>
            </div>
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

usePageSeo({
  title: 'AI, Data & Cloud Consulting Services | Gamma Neutral, Toronto',
  description: 'From AI and ML engineering to data architecture, cloud, and cybersecurity. Consulting that moves from pilot to production in Toronto.',
  path: '/services',
})
useBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
])

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

// Build the URL for the learn-more detail page from a slug
const buildServiceLink = (slug: string | undefined | null) => {
  if (!slug) return ''
  return `/services/${slug}`
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
      link: buildServiceLink(s.slug),
    }))
  }
  return serviceKeys.map((key) => ({
    title: t(`services.${key}.title`),
    description: t(`services.${key}.description`),
    icon: serviceIconMap[key],
    gradientClass: serviceGradientMap[key],
    features: tm(`services.${key}.features`) as string[],
    link: buildServiceLink(t(`services.${key}.slug`)),
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
   COMMON TOKENS & UTILS
   ================================ */
.tracking-tight { letter-spacing: -0.02em; }
.ls-2 { letter-spacing: 0.2em; }
.leading-relaxed { line-height: 1.6; }
.opacity-80 { opacity: 0.8; }
.opacity-90 { opacity: 0.9; }

.text-gradient-primary {
  background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ================================
   HERO STYLE
   ================================ */
.hero-offset {
  margin-top: 80px;
}

.hero-gradient {
  background: #0f172a;
  min-height: 480px;
  display: flex;
  align-items: center;
  position: relative;
}

.hero-glow {
  position: absolute;
  top: 0; left: 50%;
  width: 100%; height: 100%;
  background: radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.15) 0%, transparent 70%);
  transform: translateX(-50%);
  pointer-events: none;
}

.hero-separator {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  color: #ffffff;
  line-height: 0;
}

[data-bs-theme="dark"] .hero-separator {
  color: #0b0f19;
}

.hover-white {
  transition: color 0.3s ease;
}
.hover-white:hover {
  color: #ffffff !important;
}

/* ================================
   SERVICES GRID & CARDS
   ================================ */
.bg-white-to-gray {
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
}

[data-bs-theme="dark"] .bg-white-to-gray {
  background: #0b0f19;
}

.reveal-card {
  opacity: 0;
  transform: translateY(20px);
  animation: reveal 0.6s ease-out var(--delay) forwards;
}

@keyframes reveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.glass-loading {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
}

/* ================================
   APPROACH V2
   =============================== */
.approach-bg-gradient {
  background: #f1f5f9;
}

[data-bs-theme="dark"] .approach-bg-gradient {
  background: #0f172a;
}

.ambient-glow {
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
}

.glow-primary {
  top: -10%;
  right: -10%;
}

.glass-card-v2 {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.7) !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  transition: all 0.4s ease;
  position: relative;
  z-index: 1;
}

.glass-card-v2:hover {
  transform: translateY(-8px);
  background: #ffffff;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border-color: rgba(139, 92, 246, 0.2) !important;
}

.step-badge {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-num {
  font-size: 1.15rem;
  font-weight: 800;
  color: #7c3aed;
  z-index: 1;
}

.step-glow {
  position: absolute;
  inset: 0;
  background: rgba(124, 58, 237, 0.1);
  border-radius: 50%;
  transform: scale(1.2);
}

.step-icon-box {
  color: #3b82f6;
  opacity: 0.9;
}

.approach-line {
  position: absolute;
  top: 70px;
  left: 10%;
  right: 10%;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(124, 58, 237, 0.2) 25%, 
    rgba(124, 58, 237, 0.2) 75%, 
    transparent 100%);
  z-index: 0;
}

/* ================================
   INDUSTRY V2
   =============================== */
.glass-card-v3 {
  background: #ffffff;
  border: 1px solid #eef2f6 !important;
  box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease;
}

.glass-card-v3:hover {
  border-color: #cbd5e1 !important;
  box-shadow: 2px 8px 24px rgba(0, 0, 0, 0.06);
}

.industry-icon-orb {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.industry-icon-primary { background: rgba(99, 102, 241, 0.1); color: #6366f1; }
.industry-icon-danger  { background: rgba(239, 68, 68, 0.1); color: #ef4444; }
.industry-icon-info    { background: rgba(14, 165, 233, 0.1); color: #0ea5e9; }
.industry-icon-success { background: rgba(16, 185, 129, 0.1); color: #10b981; }
.industry-icon-warning { background: rgba(245, 158, 11, 0.1); color: #f59e0b; }
.industry-icon-purple  { background: rgba(168, 85, 247, 0.1); color: #a855f7; }

.framework-chip {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  color: #64748b;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.025em;
  transition: all 0.3s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.framework-chip:hover {
  background: #f8fafc;
  color: #0f172a;
  border-color: #cbd5e1;
  transform: scale(1.05);
}

/* ================================
   CTA PREMIUM
   =============================== */
.cta-section {
  background: #ffffff;
}

[data-bs-theme="dark"] .cta-section {
  background: #0b0f19;
}

.cta-inner {
  background: linear-gradient(145deg, #1e293b 0%, #0f172a 100%);
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.ambient-glow-cta {
  position: absolute;
  top: -20%;
  right: -20%;
  width: 60%;
  height: 100%;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%);
  filter: blur(40px);
}

.btn-primary-premium {
  background: linear-gradient(135deg, #7c3aed 0%, #6366f1 100%);
  border: none;
  box-shadow: 0 10px 20px rgba(124, 58, 237, 0.2);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.1);
  color: #ffffff;
}

.btn-primary-premium:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 30px rgba(124, 58, 237, 0.3);
  color: #ffffff;
}

.btn-outline-light-premium {
  background: transparent;
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.btn-outline-light-premium:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
}

/* ================================
   DARK MODE OVERRIDES
   ================================ */
[data-bs-theme="dark"] .glass-card-v2 {
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.06) !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

[data-bs-theme="dark"] .glass-card-v2:hover {
  background: rgba(15, 23, 42, 1);
  border-color: rgba(139, 92, 246, 0.3) !important;
}

[data-bs-theme="dark"] .glass-card-v3 {
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.06) !important;
}

[data-bs-theme="dark"] .glass-card-v3:hover {
  border-color: rgba(255, 255, 255, 0.15) !important;
  background: rgba(15, 23, 42, 0.8);
}

[data-bs-theme="dark"] .framework-chip {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.1);
  color: #94a3b8;
}

[data-bs-theme="dark"] .framework-chip:hover {
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.2);
}

/* ================================
   RESPONSIVE
   ================================ */
@media (max-width: 991px) {
  .hero-gradient { min-height: 400px; }
  .approach-step-v2 { margin-bottom: 20px; }
}

@media (max-width: 767px) {
  .hero-offset { margin-top: 64px; }
  .display-3 { font-size: 2.5rem; }
  .display-5 { font-size: 1.75rem; }
  .cta-inner { padding: 3rem 1.5rem !important; }
}
</style>
