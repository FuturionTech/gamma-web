<template>
  <div>
    <!-- Hero Section -->
    <section class="position-relative py-4" style="margin-top: 80px; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);">
      <div class="container position-relative z-2 py-4">
        <div class="row">
          <div class="col-lg-10 col-xl-9">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb">
              <ol class="pt-2 pb-2 breadcrumb">
                <li class="breadcrumb-item">
                  <NuxtLink to="/" class="text-white text-opacity-75">{{ $t('breadcrumbs.home') }}</NuxtLink>
                </li>
                <li class="breadcrumb-item">
                  <NuxtLink to="/about" class="text-white text-opacity-75">{{ $t('careers.breadcrumbAbout') }}</NuxtLink>
                </li>
                <li class="breadcrumb-item text-white active" aria-current="page">{{ $t('careers.breadcrumbCareers') }}</li>
              </ol>
            </nav>

            <h1 class="h1 text-white pb-2">{{ $t('careers.pageTitle') }}</h1>
            <p class="fs-5 text-white text-opacity-75 pb-3 mb-0" style="max-width: 700px;">
              {{ $t('careers.subtitle') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Join Us -->
    <section class="container py-5">
      <div class="text-center mb-5 pb-lg-4">
        <div class="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 mb-3">{{ $t('careers.whyJoin.badge') }}</div>
        <h2 class="h2 mb-3">{{ $t('careers.whyJoin.title') }}</h2>
        <p class="fs-lg text-muted mx-auto" style="max-width: 700px;">
          {{ $t('careers.whyJoin.subtitle') }}
        </p>
      </div>

      <div class="row g-4 mb-5">
        <div class="col-md-6 col-lg-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <div class="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle" style="width: 56px; height: 56px;">
                  <i class="bi bi-graph-up text-primary fs-4"></i>
                </div>
              </div>
              <h5 class="mb-3">{{ $t('careers.whyJoin.careerGrowth.title') }}</h5>
              <p class="text-muted mb-0">
                {{ $t('careers.whyJoin.careerGrowth.description') }}
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <div class="d-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-circle" style="width: 56px; height: 56px;">
                  <i class="bi bi-heart text-success fs-4"></i>
                </div>
              </div>
              <h5 class="mb-3">{{ $t('careers.whyJoin.workLife.title') }}</h5>
              <p class="text-muted mb-0">
                {{ $t('careers.whyJoin.workLife.description') }}
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <div class="d-flex align-items-center justify-content-center bg-warning bg-opacity-10 rounded-circle" style="width: 56px; height: 56px;">
                  <i class="bi bi-trophy text-warning fs-4"></i>
                </div>
              </div>
              <h5 class="mb-3">{{ $t('careers.whyJoin.impactful.title') }}</h5>
              <p class="text-muted mb-0">
                {{ $t('careers.whyJoin.impactful.description') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Positions -->
    <section class="py-5 bg-light">
      <div class="container py-lg-4">
        <!-- Section Header -->
        <div class="text-center mb-5">
          <div class="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 mb-3">
            <i class="bi bi-briefcase me-1"></i> {{ $t('careers.openPositions.badge', 'Open Positions') }}
          </div>
          <h2 class="h2 mb-3">{{ $t('careers.openPositions.title', 'Current Opportunities') }}</h2>
          <p class="fs-lg text-muted mx-auto" style="max-width: 600px;">
            {{ $t('careers.openPositions.subtitle', 'Join our team and help shape the future of data and AI consulting.') }}
          </p>
        </div>

        <!-- Shimmer Loading State -->
        <div v-if="careersStore.loading" class="row g-4 justify-content-center">
          <div class="col-lg-8">
            <div v-for="n in 4" :key="n" class="card border-0 shadow-sm rounded-4 mb-3 overflow-hidden">
              <div class="card-body p-4">
                <div class="d-flex justify-content-between align-items-start mb-3">
                  <div class="flex-grow-1">
                    <Shimmer width="65%" height="1.5rem" pill class="mb-3" />
                    <Shimmer :width="`${35 + (n * 10) % 25}%`" height="0.875rem" pill />
                  </div>
                  <Shimmer width="90px" height="28px" radius="2rem" />
                </div>
                <div class="d-flex flex-wrap gap-2 mt-3">
                  <Shimmer width="120px" height="24px" radius="2rem" />
                  <Shimmer width="140px" height="24px" radius="2rem" />
                  <Shimmer width="100px" height="24px" radius="2rem" />
                </div>
                <Shimmer width="100%" height="0.875rem" pill class="mt-3 mb-2" />
                <Shimmer width="85%" height="0.875rem" pill />
              </div>
            </div>
          </div>
        </div>

        <!-- Error State -->
        <div v-else-if="careersStore.error" class="text-center py-5">
          <div class="card border-0 shadow-sm rounded-4 p-5 mx-auto" style="max-width: 520px;">
            <div class="error-icon-wrapper mx-auto mb-3">
              <i class="bi bi-cloud-slash"></i>
            </div>
            <h3 class="h5 fw-bold mb-2">{{ $t('careers.errorTitle', 'Unable to Load Positions') }}</h3>
            <p class="text-muted mb-4">{{ $t('careers.errorMessage', 'We could not retrieve our current openings. Please try again.') }}</p>
            <button class="btn btn-primary rounded-pill px-4 py-2 mx-auto" style="max-width: 160px;" @click="careersStore.fetchPositions()">
              <i class="bi bi-arrow-clockwise me-2"></i>{{ $t('careers.retry', 'Retry') }}
            </button>
          </div>
        </div>

        <!-- No Current Openings -->
        <div v-else-if="careersStore.positions.length === 0" class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <div class="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle mb-4" style="width: 80px; height: 80px;">
              <i class="bi bi-briefcase text-primary fs-2"></i>
            </div>
            <h2 class="h2 mb-3">{{ $t('careers.noOpenings.title') }}</h2>
            <p class="fs-5 text-muted mb-4 mx-auto" style="max-width: 600px;">
              {{ $t('careers.noOpenings.description') }}
            </p>
            <p class="text-muted mb-4">
              {{ $t('careers.noOpenings.resumePrompt') }}
            </p>
            <a :href="company.mailtoHref" class="btn btn-primary btn-lg px-5">
              <i class="bi bi-envelope me-2"></i>
              {{ $t('careers.noOpenings.sendResume') }}
            </a>
          </div>
        </div>

        <!-- Job Listings -->
        <div v-else class="row g-4 justify-content-center">
          <div class="col-lg-8">
            <NuxtLink
              v-for="position in careersStore.positions"
              :key="position.id"
              :to="`/careers/${position.id}`"
              class="card border-0 shadow-sm rounded-4 mb-3 text-decoration-none job-card"
            >
              <div class="card-body p-4">
                <div class="d-flex justify-content-between align-items-start mb-2">
                  <h3 class="h5 fw-bold mb-0 job-card-title">{{ position.title }}</h3>
                  <span
                    v-if="position.is_remote"
                    class="badge bg-success bg-opacity-10 text-success fw-semibold px-3 py-2 flex-shrink-0 ms-3"
                  >
                    <i class="bi bi-wifi me-1"></i> {{ $t('careers.remote', 'Remote') }}
                  </span>
                </div>
                <div class="d-flex flex-wrap gap-2 mt-3 mb-3">
                  <span class="badge bg-primary bg-opacity-10 text-primary fw-medium px-3 py-2">
                    <i class="bi bi-building me-1"></i> {{ position.department }}
                  </span>
                  <span class="badge bg-secondary bg-opacity-10 text-secondary fw-medium px-3 py-2">
                    <i class="bi bi-geo-alt me-1"></i> {{ position.location }}
                  </span>
                  <span class="badge bg-info bg-opacity-10 text-info fw-medium px-3 py-2">
                    <i class="bi bi-clock me-1"></i> {{ formatJobType(position.job_type) }}
                  </span>
                </div>
                <p class="text-muted mb-0 lh-base job-description">
                  {{ truncate(position.description, 180) }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5 bg-primary bg-gradient text-white">
      <div class="container py-4">
        <div class="text-center">
          <h2 class="h2 text-white mb-3">{{ $t('careers.stayConnected.title') }}</h2>
          <p class="fs-lg text-white text-opacity-75 mb-4 mx-auto" style="max-width: 600px;">
            {{ $t('careers.stayConnected.subtitle') }}
          </p>
          <div class="d-flex flex-wrap justify-content-center gap-3">
            <a :href="company.mailtoHref" class="btn btn-light btn-lg px-5">
              {{ $t('careers.stayConnected.sendResume') }}
              <i class="bi bi-envelope ms-2"></i>
            </a>
            <NuxtLink to="/contact" class="btn btn-outline-light btn-lg px-5">
              {{ $t('careers.stayConnected.bookCall') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { watch, onMounted } from 'vue'
import Shimmer from '~/components/shared/utils/Shimmer.vue'
import { useCareersStore } from '~/domains/careers/stores/useCareersStore'

const { $trackEvent } = useNuxtApp()
const { locale } = useI18n()
const company = useCompanyInfo()
const careersStore = useCareersStore()

// Format job type enum for display
const formatJobType = (type: string): string => {
  const map: Record<string, string> = {
    FULL_TIME: 'Full-time',
    PART_TIME: 'Part-time',
    CONTRACT: 'Contract',
    INTERNSHIP: 'Internship',
    FREELANCE: 'Freelance',
  }
  return map[type] || type.replace(/_/g, ' ')
}

// Truncate description text
const truncate = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).replace(/\s+\S*$/, '') + '...'
}

// Fetch on mount
onMounted(() => {
  careersStore.fetchPositions()
  $trackEvent('careers_page_view')
})

// Re-fetch when locale changes
watch(locale, () => {
  careersStore.fetchPositions()
})

// SEO — single source of truth
const careersTitle = 'Careers | AI & Data Jobs Toronto | Gamma Neutral Consulting'
const careersDescription = 'Join Gamma Neutral Consulting. We are building a team of experienced consultants in data engineering, ML operations, cloud architecture, and cybersecurity in Toronto.'
useHead({
  title: careersTitle,
  meta: [
    { name: 'description', content: careersDescription },
    { name: 'keywords', content: 'Gamma Neutral Consulting careers, Toronto tech jobs, data engineering careers, Artificial Intelligence consulting jobs, AI consulting jobs' },
  ],
})
usePageSeo({
  title: careersTitle,
  description: careersDescription,
  path: '/careers',
})
useBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Careers', url: '/careers' },
])
</script>

<style scoped>
/* Breadcrumb styles for dark background */
.breadcrumb {
  background: transparent;
  padding: 0;
  margin-bottom: 0;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.65);
}

.breadcrumb-item a {
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb-item a:hover {
  color: white !important;
}

/* Card hover effects */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: var(--bs-body-bg, #ffffff);
  color: var(--bs-body-color, inherit);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
}

/* Job card specific styles */
.job-card {
  transition: all 0.3s ease;
  cursor: pointer;
}

.job-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1) !important;
}

.job-card:hover .job-card-title {
  color: #8b5cf6;
}

.job-card-title {
  transition: color 0.2s ease;
  color: var(--bs-body-color, inherit);
}

.job-description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Error icon */
.error-icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(251, 146, 60, 0.18) 100%);
  color: #f59e0b;
  font-size: 1.75rem;
}

/* Dark mode */
[data-bs-theme="dark"] .card {
  background-color: rgba(255, 255, 255, 0.04) !important;
  border-color: rgba(255, 255, 255, 0.08) !important;
}

[data-bs-theme="dark"] .card .text-muted {
  color: rgba(255, 255, 255, 0.7) !important;
}

[data-bs-theme="dark"] .card:hover {
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.15) !important;
  border-color: rgba(139, 92, 246, 0.25) !important;
}

[data-bs-theme="dark"] .bg-light {
  background-color: rgba(255, 255, 255, 0.04) !important;
}

[data-bs-theme="dark"] .job-card-title {
  color: #f9fafb;
}

[data-bs-theme="dark"] .job-card:hover .job-card-title {
  color: #c4b5fd;
}
</style>
