<template>
  <div>
    <!-- Hero Section - Compact and Inspiring -->
    <section class="hero-gradient position-relative py-4 overflow-hidden hero-offset">
      <div class="container position-relative z-2 py-4">
        <div class="row align-items-center">
          <div class="col-lg-10 mx-auto text-center">
            <!-- Company Name and Slogan -->
            <div class="badge bg-white bg-opacity-20 text-white px-4 py-2 rounded-pill mb-3 fw-semibold">
              <i class="bi bi-geo-alt me-2"></i>{{ $t('about.heroBadge') }}
            </div>

            <h1 class="display-4 text-white fw-bold mb-2 lh-1">
              {{ $t('about.pageTitle') }}
            </h1>

            <p class="h5 text-gradient fw-bold mb-3">
              {{ $t('about.badge') }}
            </p>

            <p class="fs-5 text-white text-opacity-75 mb-4 mx-auto" style="max-width: 700px;">
              {{ $t('about.intro') }}
            </p>

            <!-- Point of View -->
            <div class="bg-white bg-opacity-10 rounded-3 p-4 mb-4 mx-auto" style="max-width: 900px;">
              <h3 class="h5 text-white fw-bold mb-2">
                <i class="bi bi-compass text-gradient me-2"></i>{{ $t('about.pointOfView.title') }}
              </h3>
              <p class="text-white text-opacity-75 mb-0">
                {{ $t('about.pointOfView.content') }}
              </p>
            </div>

            <!-- Simple, Clear CTAs -->
            <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
              <NuxtLink to="/contact" class="btn btn-white px-4 py-2 shadow">
                <i class="bi bi-calendar-check me-2"></i>
                {{ $t('about.ctaPrimary') }}
              </NuxtLink>
              <NuxtLink to="/services" class="btn btn-outline-light px-4 py-2">
                <i class="bi bi-grid-3x3-gap me-2"></i>
                {{ $t('about.ctaSecondary') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Company Overview -->
    <section class="py-5 position-relative overflow-hidden">
      <!-- Ambient Backgrounds -->
      <div class="ambient-glow glow-primary d-none d-md-block"></div>
      
      <div class="container py-5 position-relative z-1">
        <div class="row align-items-center g-5">
          <!-- Left Text Content -->
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="pe-lg-4">
              <div class="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-4 shadow-sm border border-primary border-opacity-10">
                <i class="bi bi-building me-2"></i><span class="fw-semibold">{{ $t('about.companyOverview.badge') }}</span>
              </div>
              <h2 class="display-5 fw-bold mb-4 tracking-tight">
                {{ $t('about.companyOverview.title') }}
              </h2>
              <p class="fs-5 mb-5 lh-lg about-body-text text-muted">
                <strong class="text-dark dark-mode-strong">{{ $t('about.companyOverview.company') }}</strong> {{ $t('about.companyOverview.description', { company: '' }).trim() }}
              </p>

              <!-- Company Details Card (Glassmorphic) -->
              <div class="glass-card-info p-4 rounded-4">
                <div class="row g-4">
                  <div class="col-md-6">
                    <div class="d-flex align-items-start">
                      <div class="icon-square bg-primary bg-opacity-10 text-primary rounded-3 p-2 me-3">
                        <i class="bi bi-pin-map fs-5"></i>
                      </div>
                      <div>
                        <small class="text-muted d-block fw-medium mb-1">{{ $t('about.companyOverview.headquarters') }}</small>
                        <strong class="fs-6 d-block lh-sm text-dark dark-mode-strong">{{ company.address.line1 }}<br/>{{ company.address.line2 }}</strong>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="d-flex align-items-start">
                      <div class="icon-square bg-success bg-opacity-10 text-success rounded-3 p-2 me-3">
                        <i class="bi bi-calendar-check fs-5"></i>
                      </div>
                      <div>
                        <small class="text-muted d-block fw-medium mb-1">{{ $t('about.companyOverview.incorporated') }}</small>
                        <strong class="fs-6 d-block lh-sm text-dark dark-mode-strong">{{ $t('about.companyOverview.incorporatedDate') }}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Visual Grid -->
          <div class="col-lg-6">
            <div class="position-relative right-visual-wrapper">
              <div class="ambient-glow glow-info d-none d-lg-block" style="top: -10%; right: -10%;"></div>
              
              <div class="row g-4 position-relative z-1 align-items-center">
                <!-- Left Column of Cards -->
                <div class="col-sm-6">
                  <div class="d-flex flex-column gap-4">
                    <div class="value-glass-card p-4 rounded-4 text-center">
                       <div class="icon-orb bg-white shadow-sm mb-3 mx-auto">
                         <i class="bi bi-shield-check fs-3 text-primary"></i>
                       </div>
                       <h5 class="fw-bold mb-2">{{ $t('about.values.rigor') }}</h5>
                       <p class="text-muted small mb-0 lh-base">{{ $t('about.values.rigorDesc') }}</p>
                    </div>
                    <div class="value-glass-card p-4 rounded-4 text-center">
                       <div class="icon-orb bg-white shadow-sm mb-3 mx-auto">
                         <i class="bi bi-people fs-3 text-success"></i>
                       </div>
                       <h5 class="fw-bold mb-2">{{ $t('about.values.partnership') }}</h5>
                       <p class="text-muted small mb-0 lh-base">{{ $t('about.values.partnershipDesc') }}</p>
                    </div>
                  </div>
                </div>
                <!-- Right Column of Cards (Offset) -->
                <div class="col-sm-6 mt-4 mt-sm-5 pt-sm-4">
                  <div class="d-flex flex-column gap-4">
                    <div class="value-glass-card p-4 rounded-4 text-center">
                       <div class="icon-orb bg-white shadow-sm mb-3 mx-auto">
                         <i class="bi bi-lightbulb fs-3 text-warning"></i>
                       </div>
                       <h5 class="fw-bold mb-2">{{ $t('about.values.clarity') }}</h5>
                       <p class="text-muted small mb-0 lh-base">{{ $t('about.values.clarityDesc') }}</p>
                    </div>
                    <div class="value-glass-card p-4 rounded-4 text-center">
                       <div class="icon-orb bg-white shadow-sm mb-3 mx-auto">
                         <i class="bi bi-graph-up-arrow fs-3 text-info"></i>
                       </div>
                       <h5 class="fw-bold mb-2">{{ $t('about.values.impact') }}</h5>
                       <p class="text-muted small mb-0 lh-base">{{ $t('about.values.impactDesc') }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How We Work -->
    <section class="py-5 bg-light">
      <div class="container py-4">
        <div class="text-center mb-4">
          <h2 class="h2 fw-bold mb-3">{{ $t('about.howWeWork.title') }}</h2>
          <p class="fs-6 text-muted mx-auto" style="max-width: 600px;">
            {{ $t('about.howWeWork.subtitle') }}
          </p>
        </div>

        <div class="row g-4">
          <!-- Step 1 -->
          <div class="col-md-6 col-lg-3">
            <div class="card border-0 shadow-sm h-100 capability-card">
              <div class="card-body p-4">
                <div class="icon-wrapper bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                  <i class="bi bi-search text-primary fs-4"></i>
                </div>
                <h4 class="mb-3">{{ $t('about.howWeWork.discoveryWorkshops.title') }}</h4>
                <p class="text-muted mb-0">
                  {{ $t('about.howWeWork.discoveryWorkshops.description') }}
                </p>
              </div>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="col-md-6 col-lg-3">
            <div class="card border-0 shadow-sm h-100 capability-card">
              <div class="card-body p-4">
                <div class="icon-wrapper bg-success bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                  <i class="bi bi-diagram-3 text-success fs-4"></i>
                </div>
                <h4 class="mb-3">{{ $t('about.howWeWork.architectureDecisions.title') }}</h4>
                <p class="text-muted mb-0">
                  {{ $t('about.howWeWork.architectureDecisions.description') }}
                </p>
              </div>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="col-md-6 col-lg-3">
            <div class="card border-0 shadow-sm h-100 capability-card">
              <div class="card-body p-4">
                <div class="icon-wrapper bg-warning bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                  <i class="bi bi-arrow-repeat text-warning fs-4"></i>
                </div>
                <h4 class="mb-3">{{ $t('about.howWeWork.iterativeDelivery.title') }}</h4>
                <p class="text-muted mb-0">
                  {{ $t('about.howWeWork.iterativeDelivery.description') }}
                </p>
              </div>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="col-md-6 col-lg-3">
            <div class="card border-0 shadow-sm h-100 capability-card">
              <div class="card-body p-4">
                <div class="icon-wrapper bg-info bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                  <i class="bi bi-book text-info fs-4"></i>
                </div>
                <h4 class="mb-3">{{ $t('about.howWeWork.knowledgeTransfer.title') }}</h4>
                <p class="text-muted mb-0">
                  {{ $t('about.howWeWork.knowledgeTransfer.description') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team / Growing Team Section -->
    <section class="py-5">
      <div class="container py-4">
        <div class="text-center mb-4">
          <h2 class="h2 fw-bold mb-3">{{ $t('about.team.title') }}</h2>
          <p class="fs-6 text-muted mx-auto" style="max-width: 600px;">
            {{ $t('about.team.subtitle') }}
          </p>
        </div>

        <!-- Growing Team Callout -->
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="growing-team-card rounded-4 p-4 p-lg-5 text-center">
              <div class="growing-team-icon mb-3">
                <i class="bi bi-people"></i>
              </div>
              <h3 class="h4 fw-bold mb-3">{{ $t('about.growingTeam.title') }}</h3>
              <p class="text-muted fs-6 mb-4 mx-auto" style="max-width: 560px;">
                {{ $t('about.growingTeam.description') }}
              </p>
              <NuxtLink to="/careers" class="btn btn-outline-primary px-4 py-2 rounded-pill">
                <i class="bi bi-briefcase me-2"></i>{{ $t('about.growingTeam.cta') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA - Simple and Powerful -->
    <section class="cta-gradient py-5">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="h2 fw-bold text-white mb-3">
              {{ $t('about.ctaBottom.title') }}
            </h2>
            <p class="fs-6 text-white text-opacity-75 mb-4">
              {{ $t('about.ctaBottom.subtitle') }}
            </p>
            <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
              <NuxtLink to="/contact" class="btn btn-white btn-lg px-4 py-2 shadow">
                <i class="bi bi-calendar-check me-2"></i>
                {{ $t('about.ctaBottom.ctaPrimary') }}
              </NuxtLink>
              <NuxtLink to="/services" class="btn btn-outline-light btn-lg px-4 py-2">
                <i class="bi bi-grid-3x3-gap me-2"></i>
                {{ $t('about.ctaBottom.ctaSecondary') }}
              </NuxtLink>
            </div>
            <p class="text-white text-opacity-75 mt-4 small">
              {{ $t('about.ctaBottom.noCommitment') }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const company = useCompanyInfo()

// SEO
useHead({
  title: 'About Us | Gamma Neutral Consulting',
  meta: [
    {
      name: 'description',
      content: 'Gamma Neutral was founded to close the gap between Artificial Intelligence (AI) prototypes and production-ready systems. We bring engineering discipline to data and AI consulting for financial services, healthcare, and government.'
    },
    {
      name: 'keywords',
      content: 'Artificial Intelligence consulting Toronto, AI consulting, data engineering firm, about Gamma Neutral, data consulting Canada'
    }
  ]
})

useSeoMeta({
  title: 'About Us | AI & Data Consulting Firm Toronto | Gamma Neutral',
  description: 'Gamma Neutral bridges the gap between AI prototypes and production systems. Engineering discipline for data and AI consulting in Toronto.',
  path: '/about',
})
useBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
])
</script>

<style scoped>
/* Hero Gradient */
.hero-gradient {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
}

/* Removed minimum height for more compact hero */

/* Text Gradient */
.text-gradient {
  background: linear-gradient(135deg, #ffd700, #ffeb3b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* CTA Gradient */
.cta-gradient {
  background: linear-gradient(135deg, #1a1a2e, #16213e);
}


/* Capability Card Hover */
.capability-card {
  transition: all 0.3s ease;
  border: 1px solid var(--bs-border-color, transparent) !important;
  background-color: var(--bs-body-bg, #ffffff);
  color: var(--bs-body-color, inherit);
}

.capability-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
  border-color: rgba(102, 126, 234, 0.2) !important;
}

/* Growing Team Card */
.growing-team-card {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.04) 0%, rgba(59, 130, 246, 0.04) 100%);
  border: 1px solid rgba(139, 92, 246, 0.15);
  transition: all 0.3s ease;
}

.growing-team-card:hover {
  transform: translateY(-3px);
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 12px 32px rgba(139, 92, 246, 0.1);
}

.growing-team-icon {
  width: 72px;
  height: 72px;
  margin: 0 auto;
  border-radius: 50%;
  background: rgba(139, 92, 246, 0.12);
  color: #8b5cf6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
}

/* Button Improvements */
.btn-white {
  background: white;
  color: #1a1a2e;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-white:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2) !important;
  background: white;
  color: #0f3460;
}

.btn-outline-light:hover {
  transform: translateY(-2px);
}

/* Process Steps */
.process-steps .step-number {
  font-weight: bold;
  transition: all 0.3s ease;
}

.process-steps .d-flex:hover .step-number {
  transform: scale(1.1);
}

/* Responsive Typography */
@media (max-width: 768px) {
  .display-3 {
    font-size: 2.5rem;
  }

  .display-4 {
    font-size: 2rem;
  }

  .h2 {
    font-size: 1.75rem;
  }

  .h4 {
    font-size: 1.25rem;
  }
}

/* About body text — readable contrast */
.about-body-text {
  color: #374151;
}

[data-bs-theme="dark"] .about-body-text {
  color: #d1d5db;
}

/* Hero offset */
.hero-offset {
  margin-top: 80px;
}

@media (max-width: 767.98px) {
  .hero-offset {
    margin-top: 64px;
  }
}

/* Glass Info Card */
.glass-card-info {
  background: rgba(248, 249, 250, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.3s ease;
}

.glass-card-info:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
}

/* Value Glass Cards */
.value-glass-card {
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.04), inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.value-glass-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.8);
}

.icon-orb {
  width: 64px;
  height: 64px;
  border-radius: 20px; /* Squircle */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.value-glass-card:hover .icon-orb {
  transform: scale(1.1) rotate(5deg);
}

.icon-square {
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Ambient Glow */
.ambient-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  z-index: 0;
  opacity: 0.3;
  pointer-events: none;
  animation: pulse-glow 8s ease-in-out infinite alternate;
}

.glow-primary {
  top: 10%;
  left: -10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0) 70%);
}

.glow-info {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, rgba(56, 189, 248, 0) 70%);
  animation-delay: -3s;
}

@keyframes pulse-glow {
  0% { transform: scale(0.9); opacity: 0.2; }
  100% { transform: scale(1.1); opacity: 0.4; }
}

/* Dark Mode Extends */
[data-bs-theme="dark"] .text-dark.dark-mode-strong {
  color: #f9fafb !important;
}

[data-bs-theme="dark"] .glass-card-info {
  background: rgba(30, 30, 35, 0.6);
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

[data-bs-theme="dark"] .value-glass-card {
  background: rgba(30, 30, 35, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

[data-bs-theme="dark"] .value-glass-card:hover {
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border-color: rgba(139, 92, 246, 0.3);
}

[data-bs-theme="dark"] .icon-orb {
  background: rgba(40, 40, 45, 0.8) !important;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3) !important;
}

[data-bs-theme="dark"] .value-glass-card h5 {
  color: #f9fafb !important;
}

/* Clean shadows */
.shadow-sm {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08) !important;
}

.shadow-lg {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
}

/* ================================
   DARK MODE SUPPORT — comprehensive
   ================================ */

/* Headings */
[data-bs-theme="dark"] h2.display-6,
[data-bs-theme="dark"] h2.h2,
[data-bs-theme="dark"] h4,
[data-bs-theme="dark"] h5 {
  color: #f9fafb !important;
}

/* Badge */
[data-bs-theme="dark"] .badge.bg-primary.bg-opacity-10 {
  background: rgba(139, 92, 246, 0.2) !important;
  color: #c4b5fd !important;
}

/* Body text in dark mode */
[data-bs-theme="dark"] .fs-5,
[data-bs-theme="dark"] p {
  color: rgba(255, 255, 255, 0.8);
}

/* Strong text */
[data-bs-theme="dark"] strong {
  color: #f3f4f6 !important;
}

/* Text muted */
[data-bs-theme="dark"] .text-muted,
[data-bs-theme="dark"] small.text-muted {
  color: rgba(255, 255, 255, 0.6) !important;
}

/* bg-light sections */
[data-bs-theme="dark"] .bg-light {
  background-color: rgba(255, 255, 255, 0.04) !important;
}

/* Cards */
[data-bs-theme="dark"] .capability-card {
  background: rgba(255, 255, 255, 0.06) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}

[data-bs-theme="dark"] .capability-card h4 {
  color: #ffffff !important;
}

[data-bs-theme="dark"] .capability-card .text-muted {
  color: rgba(255, 255, 255, 0.65) !important;
}

[data-bs-theme="dark"] .capability-card:hover {
  border-color: rgba(139, 92, 246, 0.3) !important;
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.1) !important;
}

/* Growing team card — dark */
[data-bs-theme="dark"] .growing-team-card {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(59, 130, 246, 0.08) 100%);
  border-color: rgba(139, 92, 246, 0.25);
}

[data-bs-theme="dark"] .growing-team-card:hover {
  border-color: rgba(139, 92, 246, 0.4);
  box-shadow: 0 12px 32px rgba(139, 92, 246, 0.15);
}

[data-bs-theme="dark"] .growing-team-card .text-muted {
  color: rgba(255, 255, 255, 0.7) !important;
}

[data-bs-theme="dark"] .growing-team-icon {
  background: rgba(139, 92, 246, 0.2);
  color: #c4b5fd;
}

/* Growing team section */
[data-bs-theme="dark"] .bg-light h5 {
  color: #f9fafb !important;
}

[data-bs-theme="dark"] .bg-light .text-muted {
  color: rgba(255, 255, 255, 0.65) !important;
}

/* Icon colors in dark mode */
[data-bs-theme="dark"] .text-primary {
  color: #a78bfa !important;
}

/* Shadows */
[data-bs-theme="dark"] .shadow-sm {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3) !important;
}

[data-bs-theme="dark"] .shadow-lg {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4) !important;
}

</style>