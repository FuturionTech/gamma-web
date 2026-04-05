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
          <div class="cta-group">
            <NuxtLink to="/contact" class="interactive-btn">
              <span class="btn-text">{{ $t('whyChooseUs.ctaPrimary') }}</span>
              <i class="bi bi-arrow-right btn-icon" aria-hidden="true"></i>
            </NuxtLink>
            <NuxtLink to="/about" class="link-hover-fx text-decoration-none learn-more-link">
              <span>{{ $t('whyChooseUs.ctaSecondary') }}</span>
              <i class="bi bi-arrow-right link-icon" aria-hidden="true"></i>
            </NuxtLink>
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
    icon: 'bi-people-fill',
    iconColor: 'success'
  },
  {
    title: t('whyChooseUs.tailoredSolutions.title'),
    description: t('whyChooseUs.tailoredSolutions.description'),
    icon: 'bi-sliders2',
    iconColor: 'primary'
  },
  {
    title: t('whyChooseUs.industryExpertise.title'),
    description: t('whyChooseUs.industryExpertise.description'),
    icon: 'bi-building-fill-check',
    iconColor: 'warning'
  },
  {
    title: t('whyChooseUs.provenMethodologies.title'),
    description: t('whyChooseUs.provenMethodologies.description'),
    icon: 'bi-patch-check-fill',
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

/* CTA group — wraps button + link side-by-side */
.cta-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
}

/* Interactive Button — Dark Solid CTA (sized to content) */
.interactive-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: auto;
  height: auto;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%) !important;
  color: #ffffff !important;
  border: none;
  font-weight: 600;
  font-size: 0.9375rem;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  text-decoration: none !important;
  white-space: nowrap;
  line-height: 1;
}

.interactive-btn .btn-text {
  color: #ffffff !important;
  line-height: 1;
  display: inline-flex;
  align-items: center;
}

.interactive-btn .btn-icon {
  color: #ffffff !important;
  font-size: 1rem;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  transition: transform 0.3s ease;
}

.interactive-btn::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
  transition: left 0.6s ease;
  pointer-events: none;
}

.interactive-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(15, 23, 42, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15);
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: #ffffff;
}

.interactive-btn:hover::before {
  left: 100%;
}

.interactive-btn:hover .btn-icon {
  transform: translateX(4px);
}

/* Secondary Link */
.link-hover-fx {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  color: #7c3aed !important;
  font-weight: 600;
  font-size: 0.9375rem;
  transition: color 0.3s ease, transform 0.3s ease;
  line-height: 1;
}

.link-hover-fx:hover {
  color: #6d28d9 !important;
}

.link-hover-fx .link-icon {
  font-size: 1rem;
  transition: transform 0.3s ease;
  display: inline-block;
}

.link-hover-fx:hover .link-icon {
  transform: translateX(4px);
}

/* Dark Mode Overrides */
[data-bs-theme="dark"] .text-gradient {
  background: linear-gradient(135deg, #a78bfa 0%, #7dd3fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

[data-bs-theme="dark"] .glass-card {
  background: rgba(30, 30, 35, 0.6) !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
}

[data-bs-theme="dark"] .glass-card:hover {
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
}

[data-bs-theme="dark"] .chart-container {
  background: linear-gradient(145deg, rgba(40, 40, 45, 0.7) 0%, rgba(30, 30, 35, 0.4) 100%) !important;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

[data-bs-theme="dark"] .icon-orb {
  background-color: rgba(30,30,35,0.8) !important;
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

[data-bs-theme="dark"] .service-node:hover .icon-orb {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}

[data-bs-theme="dark"] .title-text {
  color: #cbd5e1;
}

[data-bs-theme="dark"] .service-node:hover .title-text {
  color: #ffffff;
}

[data-bs-theme="dark"] .avatar-circle {
  background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%) !important;
}

[data-bs-theme="dark"] .interactive-btn {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  color: #0f172a !important;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

[data-bs-theme="dark"] .interactive-btn:hover {
  background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%);
  color: #000000 !important;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

[data-bs-theme="dark"] .link-hover-fx {
  color: #a78bfa !important;
}

[data-bs-theme="dark"] .link-hover-fx:hover {
  color: #c4b5fd !important;
}

[data-bs-theme="dark"] .chart-container::after {
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
