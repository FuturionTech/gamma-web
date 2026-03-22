<template>
  <div>
    <!-- Hero Section -->
    <section class="position-relative py-5" style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);">
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><NuxtLink to="/" class="text-white-50">{{ $t('breadcrumbs.home') }}</NuxtLink></li>
                <li class="breadcrumb-item active text-white" aria-current="page">{{ $t('breadcrumbs.contact') }}</li>
              </ol>
            </nav>

            <!-- Page Title -->
            <h1 class="display-4 fw-bold text-white mb-4">{{ $t('contact.pageTitle') }}</h1>
            <p class="lead text-white-50 mb-5">
              {{ $t('contact.subtitle') }}
            </p>

            <!-- Quick Contact Info -->
            <div class="d-flex flex-column flex-sm-row gap-4">
              <div>
                <p class="text-white-50 mb-1">{{ $t('contact.emailUs') }}</p>
                <a href="mailto:info@gammaneutral.ca" class="text-white text-decoration-none fs-5">info@gammaneutral.ca</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Contact Section -->
    <section class="py-5 bg-light">
      <div class="container py-5">
        <div class="row g-5">
          <!-- Contact Form -->
          <div class="col-lg-8">
            <div class="card shadow-sm border-0">
              <div class="card-body p-5">
                <h2 class="h3 mb-4">{{ $t('contact.form.title') }}</h2>
                <ContactForm />
              </div>
            </div>
          </div>

          <!-- Contact Information Sidebar -->
          <div class="col-lg-4">
            <!-- What to Expect Card -->
            <div class="card shadow-sm border-0 mb-4 what-to-expect-card">
              <div class="card-body p-4">
                <h3 class="h5 fw-bold mb-4">{{ $t('contact.whatToExpect.title') }}</h3>
                <ul class="list-unstyled mb-0">
                  <li class="d-flex align-items-start mb-3">
                    <div class="bg-primary bg-opacity-10 rounded-circle p-2 me-3 flex-shrink-0 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                      <i class="bi bi-clock text-primary"></i>
                    </div>
                    <div>
                      <strong class="d-block small">{{ $t('contact.whatToExpect.quickResponse') }}</strong>
                      <span class="text-muted small">{{ $t('contact.whatToExpect.quickResponseDesc') }}</span>
                    </div>
                  </li>
                  <li class="d-flex align-items-start mb-3">
                    <div class="bg-success bg-opacity-10 rounded-circle p-2 me-3 flex-shrink-0 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                      <i class="bi bi-chat-dots text-success"></i>
                    </div>
                    <div>
                      <strong class="d-block small">{{ $t('contact.whatToExpect.freeConsultation') }}</strong>
                      <span class="text-muted small">{{ $t('contact.whatToExpect.freeConsultationDesc') }}</span>
                    </div>
                  </li>
                  <li class="d-flex align-items-start mb-3">
                    <div class="bg-info bg-opacity-10 rounded-circle p-2 me-3 flex-shrink-0 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                      <i class="bi bi-shield-check text-info"></i>
                    </div>
                    <div>
                      <strong class="d-block small">{{ $t('contact.whatToExpect.duration') }}</strong>
                      <span class="text-muted small">{{ $t('contact.whatToExpect.durationDesc') }}</span>
                    </div>
                  </li>
                  <li class="d-flex align-items-start">
                    <div class="bg-warning bg-opacity-10 rounded-circle p-2 me-3 flex-shrink-0 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                      <i class="bi bi-heart text-warning"></i>
                    </div>
                    <div>
                      <strong class="d-block small">{{ $t('contact.whatToExpect.noObligation') }}</strong>
                      <span class="text-muted small">{{ $t('contact.whatToExpect.noObligationDesc') }}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Office Card -->
            <div class="card shadow-sm border-0 mb-4">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="bg-primary bg-opacity-10 rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style="width: 48px; height: 48px; min-width: 48px;">
                    <i class="bi bi-building text-primary fs-5"></i>
                  </div>
                  <h3 class="h5 mb-0">{{ $t('contact.office.title') }}</h3>
                </div>
                <p class="mb-2">Redpath Avenue</p>
                <p class="mb-3">Toronto, ON M4S 2J7, Canada</p>
                <a href="https://www.google.com/maps/place/Redpath+Ave,+Toronto,+ON+M4S+2J7,+Canada" target="_blank" class="btn btn-sm btn-outline-primary">
                  <i class="bi bi-map me-1"></i> {{ $t('contact.office.getDirections') }}
                </a>
              </div>
            </div>

            <!-- Working Hours Card -->
            <div class="card shadow-sm border-0 mb-4">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="bg-success bg-opacity-10 rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style="width: 48px; height: 48px; min-width: 48px;">
                    <i class="bi bi-clock text-success fs-5"></i>
                  </div>
                  <h3 class="h5 mb-0">{{ $t('contact.hours.title') }}</h3>
                </div>
                <div class="mb-2">
                  <div class="d-flex justify-content-between">
                    <span>{{ $t('contact.hours.weekdays') }}</span>
                    <strong>{{ $t('contact.hours.weekdaysTime') }}</strong>
                  </div>
                </div>
                <div>
                  <div class="d-flex justify-content-between">
                    <span>{{ $t('contact.hours.weekends') }}</span>
                    <strong class="text-muted">{{ $t('contact.hours.closed') }}</strong>
                  </div>
                </div>
              </div>
            </div>

            <!-- Support Card -->
            <div class="card shadow-sm border-0">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="bg-info bg-opacity-10 rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style="width: 48px; height: 48px; min-width: 48px;">
                    <i class="bi bi-headset text-info fs-5"></i>
                  </div>
                  <h3 class="h5 mb-0">{{ $t('contact.support.title') }}</h3>
                </div>
                <p class="mb-0">
                  <small class="text-muted d-block">{{ $t('contact.support.emailLabel') }}</small>
                  <a href="mailto:support@gammaneutral.ca" class="text-decoration-none">support@gammaneutral.ca</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map section removed: embedded map used a placeholder place ID that
         rendered as empty dark space. The "Get Directions" link in the sidebar
         provides the same functionality without layout issues. -->
  </div>
</template>

<script setup>
import { useHead } from '#imports'
import ContactForm from '~/domains/contactus/components/ContactForm'

// SEO Meta tags
useHead({
  title: 'Contact Us | Book a Discovery Call | Gamma Neutral Consulting',
  meta: [
    {
      name: 'description',
      content: 'Book a discovery call with Gamma Neutral Consulting. Tell us about your data and AI challenges — we will outline a practical path forward.'
    },
    {
      name: 'keywords',
      content: 'contact Gamma Neutral, AI consulting Toronto, data consulting discovery call, book consultation'
    },
    {
      name: 'author',
      content: 'Gamma Neutral Consulting Inc.'
    },
  ]
})
</script>

<style scoped>
/* Clean Modern Design */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 1rem;
  background-color: var(--bs-body-bg, #ffffff);
  color: var(--bs-body-color, inherit);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08) !important;
}

/* What to Expect Card */
.what-to-expect-card {
  background: linear-gradient(180deg, #faf9ff 0%, var(--bs-body-bg, #ffffff) 100%);
  border-left: 3px solid #8b5cf6 !important;
}

.what-to-expect-card:hover {
  transform: none;
}

.bg-warning.bg-opacity-10 {
  background-color: rgba(245, 158, 11, 0.1) !important;
}

/* Typography */
.display-4 {
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* Icon Containers */
.bg-primary.bg-opacity-10 {
  background-color: rgba(139, 92, 246, 0.1) !important;
}

.bg-success.bg-opacity-10 {
  background-color: rgba(16, 185, 129, 0.1) !important;
}

.bg-info.bg-opacity-10 {
  background-color: rgba(14, 165, 233, 0.1) !important;
}

/* Breadcrumb styling for dark background */
.breadcrumb {
  background: transparent;
  padding: 0;
  margin-bottom: 1.5rem;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.5);
}

.breadcrumb-item a {
  text-decoration: none;
}

.breadcrumb-item a:hover {
  text-decoration: underline;
}

/* Button Enhancement */
.btn-outline-primary {
  border-width: 2px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-outline-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(139, 92, 246, 0.2);
}

/* Links in cards */
.card a {
  color: inherit;
  transition: color 0.3s ease;
}

.card a:hover {
  color: var(--bs-primary);
}

/* Responsive adjustments */
@media (max-width: 991.98px) {
  .display-4 {
    font-size: 2.5rem;
  }

  .card-body {
    padding: 2rem !important;
  }
}

@media (max-width: 575.98px) {
  .display-4 {
    font-size: 2rem;
  }

  .lead {
    font-size: 1.1rem;
  }

  .card-body.p-5 {
    padding: 2rem !important;
  }
}

/* Dark mode support */
:global([data-bs-theme="dark"]) .bg-light {
  background-color: var(--bs-body-bg) !important;
}

:global([data-bs-theme="dark"]) .card {
  background-color: var(--bs-body-bg) !important;
  color: var(--bs-body-color) !important;
  border-color: var(--bs-border-color) !important;
}

:global([data-bs-theme="dark"]) .what-to-expect-card {
  background: linear-gradient(180deg, #1a1a2e 0%, var(--bs-body-bg) 100%) !important;
}

:global([data-bs-theme="dark"]) .shadow-sm {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4) !important;
}
</style>