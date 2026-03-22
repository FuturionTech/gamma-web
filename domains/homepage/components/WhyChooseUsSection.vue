<template>
  <!-- Benefits Section - SaaS Style -->
  <section class="py-5 position-relative overflow-hidden">
    <div class="container py-4">
      <div class="row align-items-center">
        <!-- Left Content -->
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="pe-lg-5">
            <h2 class="display-5 fw-bold mb-4">
              {{ $t('whyChooseUs.title') }}
              <span class="text-primary">{{ $t('whyChooseUs.brandName') }}</span>
            </h2>
            <p class="lead text-muted mb-5">
              {{ $t('whyChooseUs.subtitle') }}
            </p>

            <!-- Benefits List using BenefitCard -->
            <div class="row g-4">
              <div class="col-sm-6" v-for="benefit in benefits" :key="benefit.title">
                <BenefitCard
                  :title="benefit.title"
                  :description="benefit.description"
                  :icon="benefit.icon"
                  :iconColor="benefit.iconColor"
                />
              </div>
            </div>

            <!-- CTA -->
            <div class="d-flex flex-column flex-sm-row gap-3 mt-5">
              <a href="/contact" class="btn btn-primary btn-lg">
                {{ $t('whyChooseUs.ctaPrimary') }}
                <i class="bi bi-arrow-right ms-2"></i>
              </a>
              <a href="/about" class="btn btn-link text-decoration-none learn-more-link">
                {{ $t('whyChooseUs.ctaSecondary') }}
                <i class="bi bi-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Visual — Consulting Approach -->
        <div class="col-lg-6">
          <div class="position-relative">
            <div class="card border-0 shadow-lg">
              <div class="card-body p-3 p-sm-4 p-lg-5">
                <div class="d-flex align-items-center mb-4">
                  <div class="avatar-circle bg-primary text-white me-3">
                    <i class="bi bi-award fs-4"></i>
                  </div>
                  <div>
                    <h6 class="mb-0">{{ $t('whyChooseUs.approach.title') }}</h6>
                    <small class="text-muted">{{ $t('whyChooseUs.approach.subtitle') }}</small>
                  </div>
                </div>

                <!-- Service Icons -->
                <div class="chart-container bg-light rounded p-3 mb-4">
                  <div class="d-flex flex-wrap align-items-end justify-content-around gap-2" style="min-height: 120px;">
                    <div class="text-center">
                      <i class="bi bi-cpu fs-3 text-primary"></i>
                      <div class="small text-muted mt-1">{{ $t('whyChooseUs.approach.ai') }}</div>
                    </div>
                    <div class="text-center">
                      <i class="bi bi-database fs-3 text-info"></i>
                      <div class="small text-muted mt-1">{{ $t('whyChooseUs.approach.data') }}</div>
                    </div>
                    <div class="text-center">
                      <i class="bi bi-cloud fs-3 text-success"></i>
                      <div class="small text-muted mt-1">{{ $t('whyChooseUs.approach.cloud') }}</div>
                    </div>
                    <div class="text-center">
                      <i class="bi bi-shield-check fs-3 text-danger"></i>
                      <div class="small text-muted mt-1">{{ $t('whyChooseUs.approach.security') }}</div>
                    </div>
                    <div class="text-center">
                      <i class="bi bi-diagram-3 fs-3 text-warning"></i>
                      <div class="small text-muted mt-1">{{ $t('whyChooseUs.approach.bi') }}</div>
                    </div>
                  </div>
                </div>

                <!-- Focus Areas -->
                <p class="text-muted mb-0">
                  {{ $t('whyChooseUs.approach.description') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BenefitCard from '~/components/shared/cards/BenefitCard.vue'

const { t } = useI18n()

const benefits = computed(() => [
  {
    title: t('whyChooseUs.expertTeam.title'),
    description: t('whyChooseUs.expertTeam.description'),
    icon: 'bi-people',
    iconColor: 'success'
  },
  {
    title: t('whyChooseUs.tailoredSolutions.title'),
    description: t('whyChooseUs.tailoredSolutions.description'),
    icon: 'bi-gear',
    iconColor: 'primary'
  },
  {
    title: t('whyChooseUs.industryExpertise.title'),
    description: t('whyChooseUs.industryExpertise.description'),
    icon: 'bi-building',
    iconColor: 'warning'
  },
  {
    title: t('whyChooseUs.provenMethodologies.title'),
    description: t('whyChooseUs.provenMethodologies.description'),
    icon: 'bi-clipboard-check',
    iconColor: 'info'
  }
])
</script>

<style scoped>
/* Avatar Circle */
.avatar-circle {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Button Styles */
.btn-primary {
  background-color: #000000;
  border: none;
  font-weight: 600;
  transition: all 0.3s ease;
  padding: 12px 28px;
  border-radius: 8px;
}

.btn-primary:hover {
  background-color: #1a1a1a;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

/* Card Shadow */
.shadow-lg {
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1) !important;
}

/* Dark mode support */
:global([data-bs-theme="dark"]) .display-5 {
  color: #ffffff !important;
}

:global([data-bs-theme="dark"]) .lead.text-muted {
  color: rgba(255, 255, 255, 0.75) !important;
}

:global([data-bs-theme="dark"]) .card {
  background-color: rgba(255, 255, 255, 0.04) !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
  color: var(--bs-body-color) !important;
}

:global([data-bs-theme="dark"]) .card h6 {
  color: #ffffff !important;
}

:global([data-bs-theme="dark"]) .card .text-muted {
  color: rgba(255, 255, 255, 0.65) !important;
}

:global([data-bs-theme="dark"]) .card p.text-muted {
  color: rgba(255, 255, 255, 0.75) !important;
}

:global([data-bs-theme="dark"]) .chart-container.bg-light {
  background-color: rgba(255, 255, 255, 0.06) !important;
}

:global([data-bs-theme="dark"]) .chart-container .small.text-muted {
  color: rgba(255, 255, 255, 0.7) !important;
}

:global([data-bs-theme="dark"]) .shadow-lg {
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4) !important;
}

/* Responsive */
@media (max-width: 768px) {
  .display-5 {
    font-size: 2rem;
  }

  .lead {
    font-size: 1.1rem;
  }
}

/* Learn more link - visible in both modes */
.learn-more-link {
  color: #8b5cf6 !important;
}
.learn-more-link:hover {
  color: #7c3aed !important;
}
</style>
