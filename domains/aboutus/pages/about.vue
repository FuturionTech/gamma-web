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

            <p class="fs-5 text-white-50 mb-4 mx-auto" style="max-width: 700px;">
              {{ $t('about.intro') }}
            </p>

            <!-- Point of View -->
            <div class="bg-white bg-opacity-10 rounded-3 p-4 mb-4 mx-auto" style="max-width: 900px;">
              <h3 class="h5 text-white fw-bold mb-2">
                <i class="bi bi-compass text-gradient me-2"></i>{{ $t('about.pointOfView.title') }}
              </h3>
              <p class="text-white-50 mb-0">
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
    <section class="py-5">
      <div class="container py-4">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <div class="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3">
              <i class="bi bi-building me-2"></i>{{ $t('about.companyOverview.badge') }}
            </div>
            <h2 class="display-6 fw-bold mb-4">
              {{ $t('about.companyOverview.title') }}
            </h2>
            <p class="fs-5 mb-4 lh-lg about-body-text">
              <strong>{{ $t('about.companyOverview.company') }}</strong> {{ $t('about.companyOverview.description', { company: '' }).trim() }}
            </p>

            <!-- Company Details -->
            <div class="bg-light rounded-3 p-4 mb-4">
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="d-flex align-items-start">
                    <i class="bi bi-pin-map text-primary me-3 mt-1"></i>
                    <div>
                      <small class="text-muted d-block">{{ $t('about.companyOverview.headquarters') }}</small>
                      <strong class="fs-6">Redpath Avenue<br/>Toronto, ON M4S 2J7</strong>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex align-items-start">
                    <i class="bi bi-calendar-check text-primary me-3 mt-1"></i>
                    <div>
                      <small class="text-muted d-block">{{ $t('about.companyOverview.incorporated') }}</small>
                      <strong class="fs-6">{{ $t('about.companyOverview.incorporatedDate') }}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="values-visual rounded-4 p-4 p-lg-5">
              <div class="row g-4">
                <div class="col-6">
                  <div class="value-card text-center p-3 rounded-3">
                    <i class="bi bi-shield-check fs-2 text-primary mb-2 d-block"></i>
                    <h5 class="fw-bold mb-1">{{ $t('about.values.rigor') }}</h5>
                    <p class="text-muted small mb-0">{{ $t('about.values.rigorDesc') }}</p>
                  </div>
                </div>
                <div class="col-6">
                  <div class="value-card text-center p-3 rounded-3">
                    <i class="bi bi-lightbulb fs-2 text-warning mb-2 d-block"></i>
                    <h5 class="fw-bold mb-1">{{ $t('about.values.clarity') }}</h5>
                    <p class="text-muted small mb-0">{{ $t('about.values.clarityDesc') }}</p>
                  </div>
                </div>
                <div class="col-6">
                  <div class="value-card text-center p-3 rounded-3">
                    <i class="bi bi-people fs-2 text-success mb-2 d-block"></i>
                    <h5 class="fw-bold mb-1">{{ $t('about.values.partnership') }}</h5>
                    <p class="text-muted small mb-0">{{ $t('about.values.partnershipDesc') }}</p>
                  </div>
                </div>
                <div class="col-6">
                  <div class="value-card text-center p-3 rounded-3">
                    <i class="bi bi-graph-up-arrow fs-2 text-info mb-2 d-block"></i>
                    <h5 class="fw-bold mb-1">{{ $t('about.values.impact') }}</h5>
                    <p class="text-muted small mb-0">{{ $t('about.values.impactDesc') }}</p>
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

    <!-- Founder Section -->
    <section class="py-5">
      <div class="container py-4">
        <div class="text-center mb-4">
          <h2 class="h2 fw-bold mb-3">{{ $t('about.leadership.title') }}</h2>
          <p class="fs-6 text-muted mx-auto" style="max-width: 600px;">
            {{ $t('about.leadership.subtitle') }}
          </p>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card border-0 shadow-sm team-card">
              <div class="row g-0 align-items-center">
                <div class="col-md-4 text-center p-4">
                  <img
                    :src="founder.image"
                    :alt="founder.name"
                    class="rounded-circle img-fluid shadow"
                    style="width: 180px; height: 180px; object-fit: cover;"
                  >
                </div>
                <div class="col-md-8">
                  <div class="card-body p-4">
                    <h4 class="mb-1">{{ founder.name }}</h4>
                    <p class="text-primary fw-semibold mb-3">{{ founder.role }}</p>
                    <p class="text-muted mb-3">{{ founder.bio }}</p>
                    <div class="d-flex gap-2">
                      <a v-if="founder.socialLinks.linkedin" :href="founder.socialLinks.linkedin" target="_blank"
                         class="btn btn-sm btn-outline-primary btn-icon rounded-circle">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Growing Team -->
        <div class="row justify-content-center mt-5">
          <div class="col-lg-8">
            <div class="bg-light rounded-3 p-4 text-center">
              <h5 class="fw-bold mb-3">
                <i class="bi bi-people text-primary me-2"></i>{{ $t('about.growingTeam.title') }}
              </h5>
              <p class="text-muted mb-0">
                {{ $t('about.growingTeam.description') }}
              </p>
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
            <p class="fs-6 text-white-50 mb-4">
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
            <p class="text-white-50 mt-4 small">
              {{ $t('about.ctaBottom.noCommitment') }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { teamMembers as staticTeamMembers } from '~/domains/aboutus/data/team'
import { useAboutusStore } from '~/domains/aboutus/stores/useAboutusStore'

const { locale } = useI18n()
const aboutStore = useAboutusStore()

// Re-fetch when locale changes
watch(locale, () => {
  aboutStore.fetchTeams(1)
})

onMounted(async () => {
  await aboutStore.fetchTeams(1)
})

// Prefer API data for the founder, fall back to static
const founder = computed(() => {
  if (aboutStore.teams.length > 0) {
    const m = aboutStore.teams[0]
    return {
      name: m.name,
      role: m.role,
      bio: m.biography || '',
      image: m.profile_picture_url || staticTeamMembers[0].image,
      socialLinks: {
        linkedin: m.socialMediaLinks?.find(l => l.platform_name?.toLowerCase() === 'linkedin')?.url || null,
      },
    }
  }
  return staticTeamMembers[0]
})

// SEO
useHead({
  title: 'About Us | Gamma Neutral Consulting',
  meta: [
    {
      name: 'description',
      content: 'Gamma Neutral was founded to close the gap between AI prototypes and production-ready systems. We bring engineering discipline to data and AI consulting for financial services, healthcare, and government.'
    },
    {
      name: 'keywords',
      content: 'AI consulting Toronto, data engineering firm, about Gamma Neutral, data consulting Canada'
    }
  ]
})
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

/* Team Card Hover */
.team-card {
  transition: all 0.3s ease;
  border: 1px solid var(--bs-border-color, transparent) !important;
  background-color: var(--bs-body-bg, #ffffff);
  color: var(--bs-body-color, inherit);
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
  border-color: rgba(102, 126, 234, 0.2) !important;
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

/* Remove excessive animations */
* {
  animation-duration: 0.3s !important;
}

/* About body text — readable contrast */
.about-body-text {
  color: #374151;
}

:global([data-bs-theme="dark"]) .about-body-text {
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

/* Values Visual */
.values-visual {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%);
  border: 1px solid rgba(139, 92, 246, 0.1);
}

.value-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

:global([data-bs-theme="dark"]) .values-visual {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(59, 130, 246, 0.08) 100%);
  border-color: rgba(139, 92, 246, 0.2);
}

:global([data-bs-theme="dark"]) .value-card {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.08);
}

:global([data-bs-theme="dark"]) .value-card:hover {
  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.15);
  border-color: rgba(139, 92, 246, 0.25);
}

/* Clean shadows */
.shadow-sm {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08) !important;
}

.shadow-lg {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
}

/* ================================
   DARK MODE SUPPORT
   ================================ */

:global([data-bs-theme="dark"]) .capability-card {
  background-color: var(--bs-body-bg) !important;
  border-color: var(--bs-border-color) !important;
}

:global([data-bs-theme="dark"]) .capability-card:hover {
  border-color: rgba(139, 92, 246, 0.3) !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4) !important;
}

:global([data-bs-theme="dark"]) .team-card {
  background-color: var(--bs-body-bg) !important;
  border-color: var(--bs-border-color) !important;
}

:global([data-bs-theme="dark"]) .team-card:hover {
  border-color: rgba(139, 92, 246, 0.3) !important;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4) !important;
}

:global([data-bs-theme="dark"]) .bg-light {
  background-color: rgba(255, 255, 255, 0.04) !important;
}

:global([data-bs-theme="dark"]) .shadow-sm {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4) !important;
}

:global([data-bs-theme="dark"]) .shadow-lg {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5) !important;
}
</style>