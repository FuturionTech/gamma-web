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
        <div class="col-md-6 col-lg-4" v-for="(step, index) in processSteps" :key="step.title">
          <ProcessStepCard
            :stepNumber="index + 1"
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
                <h4 class="mb-0">{{ $t('process.results.title') }}</h4>
              </div>

              <!-- Description -->
              <p class="text-muted mb-3">
                {{ $t('process.results.description') }}
              </p>

              <!-- Features -->
              <div class="small">
                <div class="d-flex align-items-start mb-2">
                  <span class="text-primary me-2">→</span>
                  <span>{{ $t('process.results.fasterTime') }}</span>
                </div>
                <div class="d-flex align-items-start mb-2">
                  <span class="text-primary me-2">→</span>
                  <span>{{ $t('process.results.reducedCosts') }}</span>
                </div>
                <div class="d-flex align-items-start mb-2">
                  <span class="text-primary me-2">→</span>
                  <span>{{ $t('process.results.improvedQuality') }}</span>
                </div>
                <div class="d-flex align-items-start">
                  <span class="text-primary me-2">→</span>
                  <span>{{ $t('process.results.competitiveAdvantage') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center">
        <a href="/contact" class="btn btn-primary btn-lg px-5 py-3">
          {{ $t('process.cta') }} →
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '~/components/shared/sections/SectionHeader.vue'
import ProcessStepCard from '~/components/shared/cards/ProcessStepCard.vue'

const { t } = useI18n()

const stepKeys = ['discovery', 'solutionDesign', 'development', 'deployment', 'support'] as const
const stepColors = ['primary', 'gradient', 'info', 'warning', 'success'] as const

const processSteps = computed(() =>
  stepKeys.map((key, i) => ({
    title: t(`process.${key}.title`),
    description: t(`process.${key}.description`),
    items: t(`process.${key}.items`) as unknown as string[],
    badgeColor: stepColors[i],
  }))
)
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
:global([data-bs-theme="dark"]) .bg-light {
  background-color: rgba(255, 255, 255, 0.03) !important;
}

:global([data-bs-theme="dark"]) .results-card {
  background-color: var(--bs-body-bg) !important;
  border-color: var(--bs-border-color) !important;
}

:global([data-bs-theme="dark"]) .results-card:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4) !important;
}
</style>
