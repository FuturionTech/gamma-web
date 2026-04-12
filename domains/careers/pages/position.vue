<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-dark position-relative py-4" style="margin-top: 80px;">
      <div class="container position-relative z-2 py-4">
        <div class="row">
          <div class="col-lg-10">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb">
              <ol class="pt-2 pb-2 breadcrumb">
                <li class="breadcrumb-item">
                  <NuxtLink to="/" class="text-white text-opacity-75">{{ $t('breadcrumbs.home') }}</NuxtLink>
                </li>
                <li class="breadcrumb-item">
                  <NuxtLink to="/careers" class="text-white text-opacity-75">{{ $t('breadcrumbs.careers') }}</NuxtLink>
                </li>
                <li class="breadcrumb-item text-white active" aria-current="page">{{ position?.title || $t('careers.position.title') }}</li>
              </ol>
            </nav>

            <div v-if="position">
              <h1 class="h1 text-white mb-3">{{ position.title }}</h1>
              <div class="d-flex flex-wrap gap-3 text-white text-opacity-75">
                <span><i class="bi bi-briefcase me-2"></i>{{ position.department }}</span>
                <span><i class="bi bi-geo-alt me-2"></i>{{ position.location }}</span>
                <span><i class="bi bi-clock me-2"></i>{{ position.type }}</span>
                <span v-if="position.remote" class="badge bg-success">{{ $t('careers.position.remoteAvailable') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Position Details & Application -->
    <section class="container py-5" v-if="position">
      <div class="row g-5">
        <!-- Left Column - Job Details -->
        <div class="col-lg-8">
          <!-- Overview Card -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-body p-4">
              <h3 class="h5 mb-3">{{ $t('careers.position.overview') }}</h3>
              <p class="text-muted">{{ position.description }}</p>

              <div class="row g-3 mt-3">
                <div class="col-sm-6">
                  <div class="d-flex align-items-center">
                    <i class="bi bi-currency-dollar text-primary me-2 fs-5"></i>
                    <div>
                      <small class="text-muted d-block">{{ $t('careers.position.salaryRange') }}</small>
                      <strong>{{ position.salary }}</strong>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-flex align-items-center">
                    <i class="bi bi-graph-up text-primary me-2 fs-5"></i>
                    <div>
                      <small class="text-muted d-block">{{ $t('careers.position.experience') }}</small>
                      <strong>{{ position.experience }}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Responsibilities -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-body p-4">
              <h3 class="h5 mb-3">{{ $t('careers.position.responsibilities') }}</h3>
              <ul class="list-unstyled">
                <li v-for="(responsibility, index) in position.responsibilities" :key="index" class="mb-2">
                  <i class="bi bi-check-circle text-primary me-2"></i>
                  {{ responsibility }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Requirements -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-body p-4">
              <h3 class="h5 mb-3">{{ $t('careers.position.requirements') }}</h3>
              <ul class="list-unstyled">
                <li v-for="(requirement, index) in position.requirements" :key="index" class="mb-2">
                  <i class="bi bi-check-circle text-primary me-2"></i>
                  {{ requirement }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Nice to Have -->
          <div class="card border-0 shadow-sm mb-4" v-if="position.niceToHave && position.niceToHave.length">
            <div class="card-body p-4">
              <h3 class="h5 mb-3">{{ $t('careers.position.niceToHave') }}</h3>
              <ul class="list-unstyled">
                <li v-for="(nice, index) in position.niceToHave" :key="index" class="mb-2">
                  <i class="bi bi-plus-circle text-success me-2"></i>
                  {{ nice }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Benefits -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-body p-4">
              <h3 class="h5 mb-3">{{ $t('careers.position.whatWeOffer') }}</h3>
              <div class="row g-3">
                <div v-for="(benefit, index) in position.benefits" :key="index" class="col-md-6">
                  <div class="d-flex">
                    <i class="bi bi-star-fill text-warning me-2 mt-1"></i>
                    <span>{{ benefit }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Application Form -->
        <div class="col-lg-4">
          <div class="card border-0 shadow-sm sticky-top" style="top: 100px;">
            <div class="card-body p-4">
              <h3 class="h5 mb-4">{{ $t('careers.position.applyTitle') }}</h3>

              <div class="text-center">
                <div class="mb-4">
                  <div class="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle" style="width: 72px; height: 72px;">
                    <i class="bi bi-envelope-paper text-primary fs-2"></i>
                  </div>
                </div>
                <h5 class="mb-3">{{ $t('careers.position.applyViaEmail') }}</h5>
                <p class="text-muted mb-4">
                  {{ $t('careers.position.applyDescription', { position: position.title }) }}
                </p>
                <a
                  :href="mailtoLink"
                  class="btn btn-primary w-100 mb-3"
                >
                  <i class="bi bi-envelope me-2"></i>
                  {{ $t('careers.position.sendApplication') }}
                </a>
                <p class="text-muted small mb-0">
                  {{ $t('careers.position.applyInstructions') }}
                </p>
              </div>
            </div>
          </div>

          <!-- Company Culture Card -->
          <div class="card border-0 shadow-sm mt-4">
            <div class="card-body p-4">
              <h5 class="mb-3">{{ $t('careers.position.whyJoinTitle') }}</h5>
              <ul class="list-unstyled mb-0">
                <li v-for="(item, idx) in (tm('careers.position.whyJoinItems') as string[])" :key="idx" :class="{ 'mb-2': idx < 4, 'mb-0': idx === 4 }">
                  <i class="bi bi-check text-primary me-2"></i>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Position Not Found -->
    <section class="container py-5 text-center" v-else>
      <div class="py-5">
        <i class="bi bi-exclamation-circle text-warning" style="font-size: 3rem;"></i>
        <h2 class="mt-3 mb-3">{{ $t('careers.position.notFound') }}</h2>
        <p class="text-muted mb-4">
          {{ $t('careers.position.notFoundDescription') }}
        </p>
        <div class="d-flex flex-wrap justify-content-center gap-3">
          <a :href="company.mailtoHref" class="btn btn-primary">
            <i class="bi bi-envelope me-2"></i>
            {{ $t('careers.position.sendUsResume') }}
          </a>
          <NuxtLink to="/careers" class="btn btn-outline-primary">
            {{ $t('careers.position.backToCareers') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { getPositionById, type JobPosition } from '~/domains/careers/data/positions'

const { tm } = useI18n()
const route = useRoute()
const position = ref<JobPosition | undefined>()
const company = useCompanyInfo()

// Get position data
position.value = getPositionById(route.params.id as string)

// Build mailto link with pre-filled subject and body
const mailtoLink = computed(() => {
  if (!position.value) return company.mailtoHref
  const subject = encodeURIComponent(`Application: ${position.value.title}`)
  const body = encodeURIComponent(
    `Hi Gamma Neutral Careers Team,\n\nI am writing to express my interest in the ${position.value.title} position (${position.value.department}).\n\nPlease find my resume attached.\n\nBest regards`
  )
  return `${company.mailtoHref}?subject=${subject}&body=${body}`
})

// SEO
const posTitle = position.value ? `${position.value.title} - Careers at Gamma Neutral` : 'Position - Gamma Neutral'
const posDescription = position.value
  ? `Apply for ${position.value.title} position at Gamma Neutral. ${position.value.summary}`
  : 'View job position details and apply at Gamma Neutral Consulting.'
useHead({
  title: posTitle,
  meta: [
    { name: 'description', content: posDescription },
  ],
})
usePageSeo({
  title: posTitle,
  description: posDescription,
  path: `/careers/${route.params.id}`,
})
useBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Careers', url: '/careers' },
  { name: position.value?.title || 'Position', url: `/careers/${route.params.id}` },
])
</script>

<style scoped>
/* Breadcrumb styles */
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

/* Form styles */
.form-control:focus,
.form-select:focus {
  border-color: #8b5cf6;
  box-shadow: 0 0 0 0.2rem rgba(139, 92, 246, 0.25);
}

/* Card hover effects */
.card {
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
}

[data-bs-theme="dark"] .card {
  background-color: rgba(255, 255, 255, 0.04) !important;
  border-color: rgba(255, 255, 255, 0.08) !important;
}

[data-bs-theme="dark"] .card .text-muted {
  color: rgba(255, 255, 255, 0.7) !important;
}

[data-bs-theme="dark"] .card:hover {
  border-color: rgba(139, 92, 246, 0.3) !important;
}

/* Sticky sidebar on desktop */
@media (min-width: 992px) {
  .sticky-top {
    position: sticky !important;
  }
}
</style>