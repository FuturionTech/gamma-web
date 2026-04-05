<template>
  <!-- Benefits Section - SaaS Style -->
  <section class="py-5 position-relative overflow-hidden why-choose-us-section">
    <!-- Ambient glowing backgrounds for the section -->
    <div class="ambient-glow glow-primary d-none d-lg-block"></div>
    <div class="ambient-glow glow-info d-none d-lg-block"></div>

    <div class="container py-5 position-relative z-1">
      <div class="row align-items-center mb-0">
        <!-- Left Content -->
        <div class="col-lg-6 mb-5 mb-lg-0 pe-lg-5">
          <h2 class="display-5 fw-bold mb-4 tracking-tight">
            {{ $t('whyChooseUs.title') }}
            <span class="brand-text text-gradient fw-bolder">{{ $t('whyChooseUs.brandName') }}</span>
          </h2>
          <p class="lead text-muted mb-5 section-subtitle">
            {{ $t('whyChooseUs.subtitle') }}
          </p>

          <!-- Benefits List using BenefitCard -->
          <div class="row g-4 mb-5">
            <div class="col-sm-6" v-for="(benefit, index) in benefits" :key="benefit.title">
              <div class="benefit-stagger" :style="{ animationDelay: `${index * 100}ms` }">
                <BenefitCard
                  :title="benefit.title"
                  :description="benefit.description"
                  :icon="benefit.icon"
                  :iconColor="benefit.iconColor"
                />
              </div>
            </div>
          </div>

          <!-- CTA -->
          <div class="d-flex flex-column flex-sm-row gap-3">
            <a href="/contact" class="btn btn-primary btn-lg interactive-btn">
              <span>{{ $t('whyChooseUs.ctaPrimary') }}</span>
              <i class="bi bi-arrow-right ms-2 btn-icon"></i>
            </a>
            <a href="/about" class="btn btn-link link-hover-fx text-decoration-none learn-more-link">
              <span>{{ $t('whyChooseUs.ctaSecondary') }}</span>
              <i class="bi bi-arrow-right ms-1 link-icon"></i>
            </a>
          </div>
        </div>

        <!-- Right Visual — Consulting Approach -->
        <div class="col-lg-6">
          <div class="position-relative right-visual-wrapper">
            <div class="card border-0 glass-card">
              <div class="card-body p-4 p-sm-5 relative z-1">
                <div class="d-flex align-items-center mb-5">
                  <div class="avatar-circle shadow-sm me-4 position-relative">
                    <i class="bi bi-award fs-3 z-1"></i>
                    <div class="avatar-glow"></div>
                  </div>
                  <div>
                    <h5 class="mb-1 fw-bold">{{ $t('whyChooseUs.approach.title') }}</h5>
                    <div class="text-secondary small fw-medium">{{ $t('whyChooseUs.approach.subtitle') }}</div>
                  </div>
                </div>

                <!-- Service Icons Dashboard -->
                <div class="chart-container rounded-4 p-4 mb-4 position-relative overflow-visible">
                  <div class="d-flex flex-wrap align-items-center justify-content-between position-relative z-1">
                    <div class="service-node text-center">
                      <div class="icon-orb mb-2 bg-primary bg-opacity-10 text-primary">
                        <i class="bi bi-cpu fs-4"></i>
                      </div>
                      <span class="small fw-semibold title-text">{{ $t('whyChooseUs.approach.ai') }}</span>
                    </div>
                    <div class="service-node text-center" style="transform: translateY(8px);">
                      <div class="icon-orb mb-2 bg-info bg-opacity-10 text-info">
                        <i class="bi bi-database fs-4"></i>
                      </div>
                      <span class="small fw-semibold title-text">{{ $t('whyChooseUs.approach.data') }}</span>
                    </div>
                    <div class="service-node text-center" style="transform: translateY(-16px);">
                      <div class="icon-orb mb-2 bg-success bg-opacity-10 text-success">
                        <i class="bi bi-cloud fs-4"></i>
                      </div>
                      <span class="small fw-semibold title-text">{{ $t('whyChooseUs.approach.cloud') }}</span>
                    </div>
                    <div class="service-node text-center" style="transform: translateY(8px);">
                      <div class="icon-orb mb-2 bg-danger bg-opacity-10 text-danger">
                        <i class="bi bi-shield-check fs-4"></i>
                      </div>
                      <span class="small fw-semibold title-text">{{ $t('whyChooseUs.approach.security') }}</span>
                    </div>
                    <div class="service-node text-center">
                      <div class="icon-orb mb-2 bg-warning bg-opacity-10 text-warning text-dark">
                        <i class="bi bi-diagram-3 fs-4"></i>
                      </div>
                      <span class="small fw-semibold title-text">{{ $t('whyChooseUs.approach.bi') }}</span>
                    </div>
                  </div>
                </div>

                <!-- Focus Areas -->
                <p class="text-muted mb-0 lh-lg" style="font-size: 0.95rem;">
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
/* Typography & Text Gradients */
.tracking-tight {
  letter-spacing: -0.025em;
}

.text-gradient {
  background: linear-gradient(135deg, #7c3aed 0%, #38bdf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

.section-subtitle {
  font-size: 1.15rem;
  line-height: 1.7;
}

/* Ambient Lighting Section Background */
.why-choose-us-section {
  background-color: transparent;
}

.ambient-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  z-index: 0;
  opacity: 0.4;
  animation: pulse-glow 8s ease-in-out infinite alternate;
  pointer-events: none;
}

.glow-primary {
  top: 10%;
  right: 0%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, rgba(124, 58, 237, 0) 70%);
}

.glow-info {
  bottom: 0%;
  right: 20%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, rgba(56, 189, 248, 0) 70%);
  animation-delay: -4s;
}

/* Glass Card */
.glass-card {
  background: rgba(255, 255, 255, 0.8) !important;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.5) !important;
  border-radius: 28px;
  z-index: 1;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.04), inset 0 0 0 1px rgba(255, 255, 255, 0.5) !important;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.5s ease;
}

.glass-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.8) !important;
}

/* Avatar Circle */
.avatar-circle {
  width: 64px;
  height: 64px;
  border-radius: 18px; /* Squircle */
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f172a 0%, #334155 100%) !important;
  color: white;
  position: relative;
}

.avatar-glow {
  position: absolute;
  inset: 0;
  border-radius: 18px;
  box-shadow: 0 8px 16px rgba(15, 23, 42, 0.25);
  z-index: -1;
  transition: all 0.3s ease;
}

.glass-card:hover .avatar-glow {
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.35);
  transform: translateY(4px);
}

/* Chart Container */
.chart-container {
  background: linear-gradient(145deg, rgba(248, 249, 250, 0.7) 0%, rgba(241, 243, 245, 0.4) 100%) !important;
  border: 1px solid rgba(255, 255, 255, 0.6);
}

.chart-container::after {
  content: '';
  position: absolute;
  top: 45%;
  left: 10%;
  right: 10%;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(124, 58, 237, 0.3) 20%, 
    rgba(56, 189, 248, 0.3) 80%, 
    transparent 100%);
  transform: translateY(-50%);
  z-index: 0;
  pointer-events: none;
}

/* Service Nodes */
.service-node {
  position: relative;
  z-index: 1;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.icon-orb {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.04);
  background-color: white !important;
}

.service-node:hover .icon-orb {
  transform: translateY(-8px) scale(1.1);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.service-node:nth-child(1) .icon-orb { animation: float-node 5s ease-in-out infinite; }
.service-node:nth-child(2) .icon-orb { animation: float-node 5.5s ease-in-out infinite -1s; }
.service-node:nth-child(3) .icon-orb { animation: float-node 6s ease-in-out infinite -2s; }
.service-node:nth-child(4) .icon-orb { animation: float-node 5.2s ease-in-out infinite -3s; }
.service-node:nth-child(5) .icon-orb { animation: float-node 5.8s ease-in-out infinite -4s; }

.title-text {
  color: #475569;
  transition: color 0.3s ease;
}

.service-node:hover .title-text {
  color: #0f172a;
}

/* Animations */
@keyframes float-node {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

@keyframes pulse-glow {
  0% { opacity: 0.3; transform: scale(0.95); }
  100% { opacity: 0.5; transform: scale(1.05); }
}

.benefit-stagger {
  animation: fade-in-up 0.6s ease forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes fade-in-up {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Interactive Buttons */
.interactive-btn {
  background: linear-gradient(135deg, #000000 0%, #1f2937 100%);
  border: none;
  font-weight: 600;
  padding: 14px 32px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.interactive-btn::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transition: left 0.6s ease;
}

.interactive-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, #111827 0%, #374151 100%);
}

.interactive-btn:hover::before {
  left: 100%;
}

.interactive-btn .btn-icon {
  transition: transform 0.3s ease;
}

.interactive-btn:hover .btn-icon {
  transform: translateX(4px);
}

.link-hover-fx {
  color: #7c3aed !important;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 14px 0;
}

.link-hover-fx:hover {
  color: #6d28d9 !important;
}

.link-hover-fx .link-icon {
  transition: transform 0.3s ease;
}

.link-hover-fx:hover .link-icon {
  transform: translateX(6px);
}

/* Dark Mode Overrides */
:global([data-bs-theme="dark"]) .text-gradient {
  background: linear-gradient(135deg, #a78bfa 0%, #7dd3fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

:global([data-bs-theme="dark"]) .glass-card {
  background: rgba(30, 30, 35, 0.6) !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
}

:global([data-bs-theme="dark"]) .glass-card:hover {
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
}

:global([data-bs-theme="dark"]) .chart-container {
  background: linear-gradient(145deg, rgba(40, 40, 45, 0.7) 0%, rgba(30, 30, 35, 0.4) 100%) !important;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

:global([data-bs-theme="dark"]) .icon-orb {
  background-color: rgba(30,30,35,0.8) !important;
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

:global([data-bs-theme="dark"]) .service-node:hover .icon-orb {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}

:global([data-bs-theme="dark"]) .title-text {
  color: #cbd5e1;
}

:global([data-bs-theme="dark"]) .service-node:hover .title-text {
  color: #ffffff;
}

:global([data-bs-theme="dark"]) .avatar-circle {
  background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%) !important;
}

:global([data-bs-theme="dark"]) .interactive-btn {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  color: #0f172a;
}

:global([data-bs-theme="dark"]) .interactive-btn:hover {
  background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%);
  color: #000000;
}

:global([data-bs-theme="dark"]) .link-hover-fx {
  color: #a78bfa !important;
}

:global([data-bs-theme="dark"]) .link-hover-fx:hover {
  color: #c4b5fd !important;
}

:global([data-bs-theme="dark"]) .chart-container::after {
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(167, 139, 250, 0.25) 20%, 
    rgba(56, 189, 248, 0.25) 80%, 
    transparent 100%);
}

/* Reduced Motion Override! */
@media (prefers-reduced-motion: reduce) {
  .ambient-glow, .icon-orb {
    animation: none !important;
  }
}

/* Responsive Overrides */
@media (max-width: 768px) {
  .display-5 {
    font-size: 2.25rem;
  }
}
</style>
