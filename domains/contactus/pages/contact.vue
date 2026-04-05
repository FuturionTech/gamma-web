<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="hero-gradient position-relative overflow-hidden hero-offset">
      <div class="hero-glow"></div>
      <div class="container position-relative z-2 py-5">
        <div class="row align-items-center">
          <div class="col-lg-7 text-center text-lg-start">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb" class="reveal-fade-up">
              <ol class="breadcrumb justify-content-center justify-content-lg-start">
                <li class="breadcrumb-item">
                  <NuxtLink to="/" class="text-white text-opacity-60 text-decoration-none hover-white">
                    {{ $t('breadcrumbs.home') }}
                  </NuxtLink>
                </li>
                <li class="breadcrumb-item active text-white fw-medium" aria-current="page">
                  {{ $t('breadcrumbs.contact') }}
                </li>
              </ol>
            </nav>

            <!-- Page Title -->
            <h1 class="display-3 fw-bold text-white mb-4 tracking-tight reveal-fade-up-1">
              {{ $t('contact.pageTitle') }}
            </h1>
            <p class="fs-5 text-white text-opacity-80 mb-5 leading-relaxed reveal-fade-up-2 max-w-560">
              {{ $t('contact.subtitle') }}
            </p>

            <!-- Quick Contact Badge -->
            <div class="d-inline-flex align-items-center glass-badge p-2 pe-4 rounded-pill reveal-fade-up-3">
              <div class="icon-circle-sm me-3">
                <i class="bi bi-envelope-fill"></i>
              </div>
              <div>
                <span class="text-white text-opacity-50 small d-block lh-1 mb-1">{{ $t('contact.emailUs') }}</span>
                <a :href="company.mailtoHref" class="text-white fw-bold tracking-tight text-decoration-none hover-primary-light">
                  {{ company.email }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Decor Orb -->
      <div class="hero-orb"></div>
    </section>

    <!-- Main Contact Section -->
    <section class="py-5 bg-grid-light position-relative">
      <div class="container py-5 position-relative z-1">
        <div class="row g-5">
          <!-- Contact Form Panel -->
          <div class="col-lg-7">
            <div class="glass-card-premium p-4 p-md-5 rounded-5 shadow-premium reveal-fade-up">
              <div class="mb-5">
                <h2 class="h3 fw-bold tracking-tight mb-2">{{ $t('contact.form.title') }}</h2>
                <div class="h-progress-bar"></div>
              </div>
              <ContactForm />
            </div>
          </div>

          <!-- Information Sidebar -->
          <div class="col-lg-5">
            <div class="sidebar-sticky reveal-fade-right">
              <!-- What to Expect Dashboard -->
              <div class="expect-dashboard glass-card-v2 p-4 p-md-5 rounded-5 border-0 mb-5">
                <h3 class="h5 fw-bold mb-5 tracking-tight d-flex align-items-center">
                  <span class="indicator me-3"></span>
                  {{ $t('contact.whatToExpect.title') }}
                </h3>
                
                <div class="expect-steps">
                  <div class="expect-item d-flex mb-4">
                    <div class="expect-icon-box box-purple me-4">
                      <i class="bi bi-lightning-charge-fill"></i>
                    </div>
                    <div>
                      <h4 class="h6 fw-bold mb-1">{{ $t('contact.whatToExpect.quickResponse') }}</h4>
                      <p class="text-muted small mb-0 lh-base">{{ $t('contact.whatToExpect.quickResponseDesc') }}</p>
                    </div>
                  </div>

                  <div class="expect-item d-flex mb-4">
                    <div class="expect-icon-box box-blue me-4">
                      <i class="bi bi-gift-fill"></i>
                    </div>
                    <div>
                      <h4 class="h6 fw-bold mb-1">{{ $t('contact.whatToExpect.freeConsultation') }}</h4>
                      <p class="text-muted small mb-0 lh-base">{{ $t('contact.whatToExpect.freeConsultationDesc') }}</p>
                    </div>
                  </div>

                  <div class="expect-item d-flex mb-4">
                    <div class="expect-icon-box box-indigo me-4">
                      <i class="bi bi-clock-history"></i>
                    </div>
                    <div>
                      <h4 class="h6 fw-bold mb-1">{{ $t('contact.whatToExpect.duration') }}</h4>
                      <p class="text-muted small mb-0 lh-base">{{ $t('contact.whatToExpect.durationDesc') }}</p>
                    </div>
                  </div>

                  <div class="expect-item d-flex">
                    <div class="expect-icon-box box-amber me-4">
                      <i class="bi bi-hand-thumbs-up-fill"></i>
                    </div>
                    <div>
                      <h4 class="h6 fw-bold mb-1">{{ $t('contact.whatToExpect.noObligation') }}</h4>
                      <p class="text-muted small mb-0 lh-base">{{ $t('contact.whatToExpect.noObligationDesc') }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Information Grid -->
              <div class="row g-4">
                <!-- Location -->
                <div class="col-md-6 col-lg-12">
                  <div class="info-card-premium p-4 rounded-4 shadow-sm">
                    <div class="d-flex align-items-center mb-3">
                      <div class="info-mini-orb box-purple me-3">
                        <i class="bi bi-geo-alt-fill"></i>
                      </div>
                      <h5 class="h6 fw-bold mb-0">{{ $t('contact.office.title') }}</h5>
                    </div>
                    <p class="text-muted small mb-3">
                      {{ company.address.line1 }}<br>
                      {{ company.address.line2 }}, {{ company.address.country }}
                    </p>
                    <a :href="company.address.googleMapsUrl" target="_blank" class="btn btn-link-premium p-0 small fw-bold">
                      {{ $t('contact.office.getDirections') }} <i class="bi bi-arrow-up-right ms-1"></i>
                    </a>
                  </div>
                </div>

                <!-- Hours -->
                <div class="col-md-6 col-lg-12">
                  <div class="info-card-premium p-4 rounded-4 shadow-sm">
                    <div class="d-flex align-items-center mb-3">
                      <div class="info-mini-orb box-blue me-3">
                        <i class="bi bi-calendar3"></i>
                      </div>
                      <h5 class="h6 fw-bold mb-0">{{ $t('contact.hours.title') }}</h5>
                    </div>
                    <div class="hour-row d-flex justify-content-between mb-1">
                      <span class="text-muted small">{{ $t('contact.hours.weekdays') }}</span>
                      <span class="fw-bold small">{{ $t('contact.hours.weekdaysTime') }}</span>
                    </div>
                    <div class="hour-row d-flex justify-content-between">
                      <span class="text-muted small">{{ $t('contact.hours.weekends') }}</span>
                      <span class="text-muted small fw-bold">{{ $t('contact.hours.closed') }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from '#imports'
import ContactForm from '~/domains/contactus/components/ContactForm'

const company = useCompanyInfo()

// SEO Meta tags
useHead({
  title: 'Contact Us | Book a Discovery Call | Gamma Neutral Consulting',
  meta: [
    {
      name: 'description',
      content: 'Book a discovery call with Gamma Neutral Consulting. Tell us about your data and Artificial Intelligence (AI) challenges — we will outline a practical path forward.'
    },
    {
      name: 'keywords',
      content: 'contact Gamma Neutral, Artificial Intelligence consulting Toronto, AI consulting, data consulting discovery call, book consultation'
    },
    {
      name: 'author',
      content: 'Gamma Neutral Consulting Inc.'
    },
  ]
})
</script>

<style scoped>
/* ================================
   COMMON UTILS
   ================================ */
.tracking-tight { letter-spacing: -0.02em; }
.leading-relaxed { line-height: 1.6; }
.max-w-560 { max-width: 560px; }

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

.hero-orb {
  position: absolute;
  top: 10%;
  right: -5%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(40px);
}

.hover-white { transition: color 0.3s ease; }
.hover-white:hover { color: #ffffff !important; }

.glass-badge {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.icon-circle-sm {
  width: 32px; height: 32px;
  background: #7c3aed;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  color: #white;
}

/* ================================
   FORM PANEL
   ================================ */
.bg-grid-light {
  background-color: #f8fafc;
  background-image: radial-gradient(#e2e8f0 1px, transparent 1px);
  background-size: 40px 40px;
}

:global([data-bs-theme="dark"]) .bg-grid-light {
  background-color: #0b0f19;
  background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
}

.glass-card-premium {
  background: #ffffff;
  border: 1px solid #eef2f6;
}

:global([data-bs-theme="dark"]) .glass-card-premium {
  background: rgba(15, 23, 42, 0.8);
  border-color: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
}

.shadow-premium {
  box-shadow: 0 30px 60px -12px rgba(15, 23, 42, 0.08);
}

.h-progress-bar {
  width: 60px; height: 4px;
  background: linear-gradient(90deg, #7c3aed, #3b82f6);
  border-radius: 2px;
}

/* ================================
   SIDEBAR & CARDS
   ================================ */
.sidebar-sticky {
  position: sticky;
  top: 120px;
}

.glass-card-v2 {
  background: #ffffff;
  border: 1px solid #eef2f6 !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
}

.indicator {
  width: 12px; height: 12px;
  background: #7c3aed;
  border-radius: 3px;
  display: inline-block;
}

.expect-icon-box {
  width: 44px; height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  flex-shrink: 0;
}

.box-purple { background: rgba(124, 58, 237, 0.08); color: #7c3aed; }
.box-blue { background: rgba(59, 130, 246, 0.08); color: #3b82f6; }
.box-indigo { background: rgba(79, 70, 229, 0.08); color: #4f46e5; }
.box-amber { background: rgba(245, 158, 11, 0.08); color: #f59e0b; }

.info-card-premium {
  background: #ffffff;
  border: 1px solid #f1f5f9;
  transition: all 0.3s ease;
}

.info-mini-orb {
  width: 32px; height: 32px;
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.9rem;
}

.btn-link-premium {
  color: #7c3aed;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-link-premium:hover {
  color: #3b82f6;
  padding-left: 5px !important;
}

/* ================================
   DARK MODE
   ================================ */
:global([data-bs-theme="dark"]) .glass-card-v2,
:global([data-bs-theme="dark"]) .info-card-premium {
  background: rgba(15, 23, 42, 0.6);
  border-color: rgba(255, 255, 255, 0.06) !important;
}

/* ================================
   RESPONSIVE
   ================================ */
@media (max-width: 991px) {
  .hero-gradient { min-height: 400px; text-align: center; }
  .max-w-560 { margin: 0 auto; }
}
</style>