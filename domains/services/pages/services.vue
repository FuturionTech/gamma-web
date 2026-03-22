<template>
  <div class="services-page">
    <!-- Hero Section with Gradient Background -->
    <section class="position-relative hero-section overflow-hidden">
      <!-- Gradient Background -->
      <div class="position-absolute top-0 start-0 w-100 h-100 hero-gradient"></div>

      <!-- Animated Background Shapes -->
      <div class="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
        <div class="hero-shape hero-shape-1"></div>
        <div class="hero-shape hero-shape-2"></div>
        <div class="hero-shape hero-shape-3"></div>
      </div>

      <div class="container position-relative" style="z-index: 10;">
        <!-- Breadcrumb -->
        <nav aria-label="breadcrumb" class="pt-4">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><NuxtLink to="/" class="text-white text-opacity-75 text-decoration-none">Home</NuxtLink></li>
            <li class="breadcrumb-item active text-white" aria-current="page">Services</li>
          </ol>
        </nav>

        <div class="row align-items-center py-5">
          <div class="col-lg-8 mx-auto text-center">
            <!-- Badge -->
            <div class="d-inline-flex align-items-center mb-4 animate-fade-in">
              <span class="badge bg-white bg-opacity-20 text-white px-4 py-2 rounded-pill backdrop-blur">
                <span class="pulse-dot me-2"></span>
                AI &amp; Data Consulting Services
              </span>
            </div>

            <!-- Main Heading -->
            <h1 class="display-3 fw-bold text-white mb-4 animate-fade-in-up">
              Engineering That Moves<br/>
              AI From <span class="text-gradient">Pilot to Production</span>
            </h1>

            <!-- Subheading -->
            <p class="lead text-white text-opacity-90 mb-5 mx-auto animate-fade-in-up animation-delay-1" style="max-width: 700px;">
              From AI and data engineering to cloud architecture and cybersecurity, we deliver focused consulting that solves specific business problems for financial institutions, healthcare organizations, and government agencies.
            </p>

            <!-- CTA Buttons -->
            <div class="d-flex flex-wrap gap-3 justify-content-center animate-fade-in-up animation-delay-2">
              <NuxtLink to="/contact" class="btn btn-light btn-lg px-5 py-3 rounded-pill fw-semibold">
                Discuss Your Project
                <i class="bi bi-arrow-right ms-2"></i>
              </NuxtLink>
              <NuxtLink to="/about" class="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-semibold">
                See How We Work
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Wave Divider -->
      <div class="position-absolute bottom-0 start-0 w-100">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="wave-svg">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>

    <!-- Services Grid Section -->
    <section class="py-5 my-5">
      <div class="container">
        <SectionHeader
          title="Our Core Services"
          subtitle="Comprehensive solutions tailored to your unique business challenges"
          headingSize="h1"
          maxWidth="600px"
        />

        <!-- Loading State -->
        <div v-if="servicesStore.loading" class="row g-4">
          <div class="col-lg-4 col-md-6" v-for="n in 6" :key="n">
            <div class="card h-100 p-4 rounded-4 border-0 shadow-sm">
              <div class="placeholder-glow">
                <div class="placeholder bg-secondary rounded-3 mb-4" style="width: 64px; height: 64px;"></div>
                <div class="placeholder bg-secondary col-8 mb-3" style="height: 24px;"></div>
                <div class="placeholder bg-secondary col-12 mb-2" style="height: 16px;"></div>
                <div class="placeholder bg-secondary col-10 mb-4" style="height: 16px;"></div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="row g-4">
          <!-- Service Cards using shared component -->
          <div class="col-lg-4 col-md-6" v-for="(service, index) in services" :key="index">
            <ServiceCard
              :title="service.title"
              :description="service.description"
              :features="service.features"
              :icon="service.icon"
              :gradientClass="service.gradientClass"
              :link="service.link"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Our Approach Section -->
    <section class="bg-light py-5 my-5">
      <div class="container">
        <SectionHeader
          title="Our Approach"
          subtitle="A proven methodology that ensures successful delivery and lasting results"
          headingSize="h1"
          maxWidth="600px"
        />

        <div class="row g-4">
          <div v-for="(step, index) in approachSteps" :key="index" class="col-lg col-md-6">
            <ProcessStepCard
              :stepNumber="index + 1"
              :title="step.title"
              :description="step.description"
              :icon="step.icon"
              badgeColor="gradient"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Industry Focus Section -->
    <section class="industry-focus-section py-5 my-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="display-6 fw-bold mb-3 industry-heading">Industry Focus</h2>
            <p class="fs-5 mb-4 industry-subtitle">Deep domain expertise in regulated, data-intensive sectors</p>
          </div>
          <div class="col-lg-8">
            <p class="industry-text fs-5 lh-lg mb-3">
              We focus on regulated, data-intensive industries: financial services, healthcare, and government.
              Our team brings domain expertise in compliance frameworks (OSFI, PIPEDA, PHIPA), data governance,
              and secure cloud architectures required by these sectors.
            </p>
            <p class="industry-text fs-5 lh-lg">
              This focus means we understand the unique constraints of your industry before the first meeting
              &mdash; from data residency requirements to audit trails and access controls that regulators expect.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section position-relative py-5 my-5 overflow-hidden">
      <div class="container position-relative" style="z-index: 10;">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="display-5 fw-bold text-white mb-4">
              Ready to Transform Your Data?
            </h2>
            <p class="lead text-white text-opacity-90 mb-5">
              Let's discuss how our comprehensive data solutions can drive your business forward. Our team is ready to help you unlock the full potential of your data.
            </p>
            <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <NuxtLink to="/contact" class="btn btn-light btn-lg px-5 py-3 rounded-pill fw-semibold">
                <i class="bi bi-telephone-fill me-2"></i>
                Discuss Your Project
              </NuxtLink>
              <NuxtLink to="/about" class="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-semibold">
                See How We Work
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports'
import ServiceCard from '~/components/shared/cards/ServiceCard.vue'
import SectionHeader from '~/components/shared/sections/SectionHeader.vue'
import ProcessStepCard from '~/components/shared/cards/ProcessStepCard.vue'
import { useServicesStore } from '~/domains/services/stores/useServicesStore'

const { t, locale } = useI18n();
const servicesStore = useServicesStore()

// Fetch services from API
onMounted(async () => {
  await servicesStore.fetchServices(20)
})

useHead({
  title: 'Our Services | AI, Data Engineering & Cloud Consulting | Gamma Neutral',
  meta: [
    { name: 'description', content: 'From AI and ML engineering to data architecture, cloud migration, cybersecurity, and business intelligence — consulting services that move from pilot to production.' },
    { name: 'keywords', content: 'AI consulting, data engineering, cloud migration, cybersecurity, business intelligence, MLOps, data architecture, Toronto' },
    { name: 'author', content: 'Gamma Neutral Consulting Inc.' },
  ]
})

// Icon-to-gradient mapping for API services
const iconGradientMap: Record<string, string> = {
  brain: 'bg-gradient-primary',
  database: 'bg-gradient-info',
  cloud: 'bg-gradient-success',
  shield: 'bg-gradient-danger',
  chart: 'bg-gradient-warning',
  server: 'bg-gradient-purple',
  clipboard: 'bg-gradient-dark',
}

// Bootstrap icon mapping from API icon names
const iconBootstrapMap: Record<string, string> = {
  brain: 'bi bi-cpu',
  database: 'bi bi-database',
  cloud: 'bi bi-cloud',
  shield: 'bi bi-shield-check',
  chart: 'bi bi-bar-chart',
  server: 'bi bi-hdd-stack',
  clipboard: 'bi bi-clipboard-data',
}

// Static fallback services
const staticServices = [
  {
    title: 'Artificial Intelligence',
    description: 'We build AI systems that move past the pilot stage. From fraud detection models for financial institutions to patient risk scoring for healthcare providers, our ML engineering team designs, trains, and deploys models that integrate with your existing systems and deliver measurable outcomes in production.',
    icon: 'bi bi-cpu',
    gradientClass: 'bg-gradient-primary',
    features: ['Custom ML model development', 'NLP and document intelligence', 'Computer vision pipelines', 'MLOps and model monitoring'],
    link: '/contact'
  },
  {
    title: 'Data Engineering',
    description: 'The foundation of every data initiative is reliable, well-governed data. We design and build the pipelines, warehouses, and lake architectures that turn scattered, siloed information into a unified, queryable asset.',
    icon: 'bi bi-database',
    gradientClass: 'bg-gradient-info',
    features: ['ETL/ELT pipeline design', 'Data warehouse/lakehouse architecture', 'Real-time streaming', 'Data quality frameworks'],
    link: '/contact'
  },
  {
    title: 'Cloud Computing',
    description: 'We help organizations move to the cloud with a strategy that balances performance, cost, and compliance.',
    icon: 'bi bi-cloud',
    gradientClass: 'bg-gradient-success',
    features: ['Cloud migration (AWS, Azure, GCP)', 'Infrastructure as code', 'Cost optimization and FinOps', 'Multi-cloud architecture'],
    link: '/contact'
  },
  {
    title: 'Cybersecurity',
    description: 'Data-intensive organizations face unique security challenges. We assess your current posture, identify vulnerabilities, and implement security controls that satisfy regulatory requirements in financial services, healthcare, and government.',
    icon: 'bi bi-shield-check',
    gradientClass: 'bg-gradient-danger',
    features: ['Security architecture assessment', 'Compliance frameworks (SOC 2, ISO 27001, PIPEDA)', 'Threat detection', 'Identity and access management'],
    link: '/contact'
  },
  {
    title: 'Business Intelligence',
    description: 'Dashboards are only valuable when they answer the questions your team actually asks.',
    icon: 'bi bi-bar-chart',
    gradientClass: 'bg-gradient-warning',
    features: ['Executive dashboard design', 'Self-service analytics', 'KPI framework development', 'Power BI/Tableau/Looker'],
    link: '/contact'
  },
  {
    title: 'Data Platform & Big Data',
    description: 'When your data volumes outgrow traditional databases, you need architecture designed for scale.',
    icon: 'bi bi-hdd-stack',
    gradientClass: 'bg-gradient-purple',
    features: ['Distributed processing (Spark, Databricks)', 'Data lakehouse', 'Stream processing', 'Performance optimization'],
    link: '/contact'
  },
  {
    title: 'Delivery & Program Management',
    description: 'Technology projects fail more often from poor execution than poor ideas.',
    icon: 'bi bi-clipboard-data',
    gradientClass: 'bg-gradient-dark',
    features: ['Agile delivery management', 'Program governance', 'Vendor coordination', 'Risk assessment'],
    link: '/contact'
  }
]

// Prefer API data, fall back to static
const services = computed(() => {
  if (servicesStore.services.length > 0) {
    return servicesStore.services.map(s => ({
      title: s.title,
      description: s.short_description || s.description,
      icon: iconBootstrapMap[s.icon ?? ''] || 'bi bi-gear',
      gradientClass: iconGradientMap[s.icon ?? ''] || 'bg-gradient-primary',
      features: s.features.map(f => f.title),
      link: '/contact',
    }))
  }
  return staticServices
});

const approachSteps = ref([
  {
    title: 'Discovery',
    description: 'Understanding your business challenges, goals, and technical requirements.',
    icon: 'bi-search'
  },
  {
    title: 'Design',
    description: 'Crafting customized solutions that address your specific needs and objectives.',
    icon: 'bi-palette'
  },
  {
    title: 'Development',
    description: 'Building and implementing the solution with precision and best practices.',
    icon: 'bi-code-slash'
  },
  {
    title: 'Deployment',
    description: 'Ensuring smooth integration, testing, and adoption across your organization.',
    icon: 'bi-rocket-takeoff'
  },
  {
    title: 'Support',
    description: 'Providing ongoing assistance, monitoring, and optimization for sustained success.',
    icon: 'bi-headset'
  }
]);

</script>

<style scoped>
/* ================================
   HERO SECTION STYLES
   ================================ */

.hero-section {
  min-height: 70vh;
  padding-top: 80px;
  position: relative;
}

.hero-gradient {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
}

/* Animated Background Shapes */
.hero-shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  animation: float 20s ease-in-out infinite;
}

.hero-shape-1 {
  width: 300px;
  height: 300px;
  background: white;
  top: 10%;
  left: -5%;
  animation-delay: 0s;
}

.hero-shape-2 {
  width: 400px;
  height: 400px;
  background: white;
  top: 30%;
  right: -10%;
  animation-delay: 5s;
}

.hero-shape-3 {
  width: 250px;
  height: 250px;
  background: white;
  bottom: 20%;
  left: 20%;
  animation-delay: 10s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

/* Text Gradient */
.text-gradient {
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Pulse Animation */
.pulse-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
  }
}

/* Backdrop Blur */
.backdrop-blur {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* Wave SVG */
.wave-svg {
  width: 100%;
  height: 80px;
  fill: var(--bs-body-bg);
}

/* Animations */
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
  opacity: 0;
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
  opacity: 0;
}

.animation-delay-1 {
  animation-delay: 0.2s;
}

.animation-delay-2 {
  animation-delay: 0.4s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hero Buttons */
.hero-section .btn-light {
  background: white;
  color: #1a1a2e;
  border: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.hero-section .btn-light:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
  color: #1a1a2e;
}

.hero-section .btn-outline-light {
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: white;
  background: transparent;
  transition: all 0.3s ease;
}

.hero-section .btn-outline-light:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
  transform: translateY(-2px);
  color: white;
}

/* ================================
   CTA SECTION
   ================================ */

.cta-section {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  padding: 100px 0;
}

.cta-section .btn-light {
  background: white;
  color: #1a1a2e;
  border: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta-section .btn-light:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
  color: #1a1a2e;
}

.cta-section .btn-outline-light {
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: white;
  background: transparent;
  transition: all 0.3s ease;
}

.cta-section .btn-outline-light:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
  transform: translateY(-2px);
  color: white;
}

/* ================================
   DARK MODE SUPPORT
   ================================ */

:global([data-bs-theme="dark"]) .wave-svg {
  fill: var(--bs-body-bg);
}

:global([data-bs-theme="dark"]) .bg-light {
  background-color: rgba(255, 255, 255, 0.03) !important;
}

/* ================================
   RESPONSIVE DESIGN
   ================================ */

@media (max-width: 991px) {
  .hero-section {
    min-height: 60vh;
  }

  .display-3 {
    font-size: 2.5rem;
  }
}

@media (max-width: 576px) {
  .hero-section {
    min-height: 50vh;
  }

  .display-3 {
    font-size: 2rem;
  }

  .lead {
    font-size: 1.1rem;
  }

  .hero-shape {
    display: none;
  }

  .wave-svg {
    height: 50px;
  }
}

/* ================================
   ACCESSIBILITY
   ================================ */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* ================================
   UTILITIES
   ================================ */

.rounded-4 {
  border-radius: 1rem !important;
}

.fs-lg {
  font-size: 1.125rem;
}

/* Industry Focus section — strong visual weight */
.industry-focus-section {
  background: #f8f9fa;
  padding-top: 4rem !important;
  padding-bottom: 4rem !important;
}

:global([data-bs-theme="dark"]) .industry-focus-section {
  background: #1a1a1a;
}

.industry-heading {
  color: #111827;
}

:global([data-bs-theme="dark"]) .industry-heading {
  color: #ffffff !important;
}

.industry-subtitle {
  color: #4b5563;
}

:global([data-bs-theme="dark"]) .industry-subtitle {
  color: rgba(255, 255, 255, 0.75) !important;
}

.industry-text {
  color: #374151;
}

:global([data-bs-theme="dark"]) .industry-text {
  color: rgba(255, 255, 255, 0.82) !important;
}
</style>
