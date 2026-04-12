<template>
  <!-- Process Section - Clean and Simple -->
  <section class="pt-3 pb-5 bg-light">
    <div class="container">
      <!-- Section Header -->
      <div class="text-center mb-4">
        <h2 class="display-5 fw-bold">{{ $t('process.title') }}</h2>
        <p class="text-muted">{{ $t('process.subtitle') }}</p>
      </div>

      <!-- Process Steps using ProcessStepCard -->
      <div class="row g-4 mb-5">
        <div class="col-md-6 col-lg-4" v-for="step in displaySteps" :key="step.title">
          <ProcessStepCard
            :stepNumber="step.stepNumber"
            :title="step.title"
            :description="step.description"
            :items="step.items"
            :badgeColor="step.badgeColor"
          />
        </div>

        <!-- Results Card (consistent light design) -->
        <div class="col-md-6 col-lg-4">
          <div class="card h-100 border-0 shadow-sm results-card">
            <div class="card-body p-4">
              <!-- Trophy Icon -->
              <div class="d-flex align-items-center mb-3">
                <span class="badge bg-primary bg-opacity-10 text-primary rounded-circle p-3 me-3 d-flex align-items-center justify-content-center badge-icon">
                  ★
                </span>
                <h4 class="mb-0">{{ resultsData.title }}</h4>
              </div>

              <!-- Description -->
              <p class="text-muted mb-3">
                {{ resultsData.description }}
              </p>

              <!-- Features -->
              <div class="small">
                <div
                  class="d-flex align-items-start mb-2"
                  v-for="(item, idx) in resultsData.items"
                  :key="idx"
                >
                  <span class="text-primary me-2">→</span>
                  <span>{{ item }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center">
        <a href="/contact" class="btn btn-primary btn-lg px-4 px-sm-5 py-3 rounded-pill">
          {{ $t('process.cta') }}
          <i class="bi bi-arrow-right ms-2"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '~/components/shared/sections/SectionHeader.vue'
import ProcessStepCard from '~/components/shared/cards/ProcessStepCard.vue'
import { useHomepageStore } from '~/domains/homepage/stores/useHomepageStore'

const { t, tm, locale } = useI18n()
const homepageStore = useHomepageStore()

// Badge color mapping by step_number (or fallback by index)
const stepBadgeColors: Record<number, string> = {
  1: 'primary',
  2: 'gradient',
  3: 'info',
  4: 'warning',
  5: 'success',
}

// i18n-driven static fallback keys
const staticStepKeys = ['discovery', 'solutionDesign', 'development', 'deployment', 'support'] as const
const staticStepColors = ['primary', 'gradient', 'info', 'warning', 'success'] as const

// Re-fetch when locale changes
watch(locale, () => {
  homepageStore.fetchProcessSteps()
})

// First 5 steps (excluding Results which is step 6, rendered separately)
const displaySteps = computed(() => {
  const apiSteps = homepageStore.processSteps.filter(s => s.step_number <= 5)

  if (apiSteps.length > 0) {
    return apiSteps
      .sort((a, b) => a.step_number - b.step_number)
      .map(step => ({
        stepNumber: step.step_number,
        title: step.title,
        description: step.short_description || step.description || '',
        items: step.items
          .sort((a, b) => a.order - b.order)
          .map(item => item.title),
        badgeColor: stepBadgeColors[step.step_number] || 'primary',
      }))
  }

  // i18n fallback
  return staticStepKeys.map((key, i) => ({
    stepNumber: i + 1,
    title: t(`process.${key}.title`),
    description: t(`process.${key}.description`),
    items: tm(`process.${key}.items`) as string[],
    badgeColor: staticStepColors[i],
  }))
})

// Results card — step 6 from API or i18n fallback
const resultsData = computed(() => {
  const resultsStep = homepageStore.processSteps.find(s => s.step_number === 6)

  if (resultsStep) {
    return {
      title: resultsStep.title,
      description: resultsStep.short_description || resultsStep.description || '',
      items: resultsStep.items
        .sort((a, b) => a.order - b.order)
        .map(item => item.title),
    }
  }

  // i18n fallback
  return {
    title: t('process.results.title'),
    description: t('process.results.description'),
    items: [
      t('process.results.fasterTime'),
      t('process.results.reducedCosts'),
      t('process.results.improvedQuality'),
      t('process.results.competitiveAdvantage'),
    ],
  }
})
</script>

<style scoped>
/* Badge styling for Results card */
.badge-icon {
  width: 48px;
  height: 48px;
  font-size: 1.2rem;
  font-weight: bold;
}

/* Results card hover to match process step cards */
.results-card {
  transition: all 0.3s ease;
}

.results-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
}

/* Button hover */
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(139, 92, 246, 0.3);
}

/* Dark mode support */
[data-bs-theme="dark"] .bg-light {
  background-color: rgba(255, 255, 255, 0.03) !important;
}

[data-bs-theme="dark"] .results-card {
  background-color: var(--bs-body-bg) !important;
  border-color: var(--bs-border-color) !important;
}

[data-bs-theme="dark"] .results-card:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4) !important;
}
</style>
