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
                Comprehensive Data Solutions
              </span>
            </div>

            <!-- Main Heading -->
            <h1 class="display-3 fw-bold text-white mb-4 animate-fade-in-up">
              Transform Your Business<br/>
              With Our <span class="text-gradient">Expert Services</span>
            </h1>

            <!-- Subheading -->
            <p class="lead text-white text-opacity-90 mb-5 mx-auto animate-fade-in-up animation-delay-1" style="max-width: 700px;">
              We deliver innovative, secure, and scalable solutions that drive informed decision-making and operational excellence across AI, Data Engineering, Cloud, and Cybersecurity.
            </p>

            <!-- CTA Buttons -->
            <div class="d-flex flex-wrap gap-3 justify-content-center animate-fade-in-up animation-delay-2">
              <NuxtLink to="/contact" class="btn btn-light btn-lg px-5 py-3 rounded-pill fw-semibold">
                Get Started
                <i class="bi bi-arrow-right ms-2"></i>
              </NuxtLink>
              <NuxtLink to="/about" class="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-semibold">
                Learn More
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

        <div class="row g-4">
          <!-- Service Cards using shared component -->
          <div class="col-lg-4 col-md-6" v-for="(service, index) in services" :key="index">
            <ServiceCard
              :title="service.title"
              :description="service.description"
              :features="service.features"
              :svgIcon="service.svgIcon"
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
                Get Started Today
              </NuxtLink>
              <NuxtLink to="/about" class="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-semibold">
                Learn More About Us
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from '#imports'
import { h } from 'vue'
import ServiceCard from '~/components/shared/cards/ServiceCard.vue'
import SectionHeader from '~/components/shared/sections/SectionHeader.vue'
import ProcessStepCard from '~/components/shared/cards/ProcessStepCard.vue'

const { t, locale } = useI18n();

useHead({
  title: 'Our Services - Gamma Neutral Consulting',
  meta: [
    { name: 'description', content: 'Comprehensive data solutions including AI, Data Engineering, Cybersecurity, Business Intelligence, Big Data, Cloud Computing, and Project Management services.' },
    { name: 'keywords', content: 'artificial intelligence, data engineering, cybersecurity, business intelligence, big data, cloud computing, project management, data solutions, AI consulting' },
    { name: 'author', content: 'Gamma Neutral Consulting' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ]
})

// SVG Icon Components
const AIIcon = () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none' }, [
  h('path', { d: 'M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z', stroke: 'white', 'stroke-width': '2' }),
  h('path', { d: 'M12 8v8M8 12h8', stroke: 'white', 'stroke-width': '2' })
])

const DataEngIcon = () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none' }, [
  h('rect', { x: '3', y: '3', width: '18', height: '5', rx: '1', stroke: 'white', 'stroke-width': '2' }),
  h('rect', { x: '3', y: '10', width: '18', height: '5', rx: '1', stroke: 'white', 'stroke-width': '2' }),
  h('rect', { x: '3', y: '17', width: '18', height: '5', rx: '1', stroke: 'white', 'stroke-width': '2' })
])

const CloudIcon = () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none' }, [
  h('path', { d: 'M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z', stroke: 'white', 'stroke-width': '2' })
])

const SecurityIcon = () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none' }, [
  h('path', { d: 'M12 2L4 7v6c0 4.5 2.5 8.5 8 10 5.5-1.5 8-5.5 8-10V7l-8-5z', stroke: 'white', 'stroke-width': '2' }),
  h('path', { d: 'M9 12l2 2 4-4', stroke: 'white', 'stroke-width': '2' })
])

const BIIcon = () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none' }, [
  h('rect', { x: '3', y: '3', width: '7', height: '9', stroke: 'white', 'stroke-width': '2' }),
  h('rect', { x: '14', y: '3', width: '7', height: '5', stroke: 'white', 'stroke-width': '2' }),
  h('rect', { x: '14', y: '12', width: '7', height: '9', stroke: 'white', 'stroke-width': '2' }),
  h('rect', { x: '3', y: '16', width: '7', height: '5', stroke: 'white', 'stroke-width': '2' })
])

const BigDataIcon = () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none' }, [
  h('circle', { cx: '12', cy: '12', r: '3', stroke: 'white', 'stroke-width': '2' }),
  h('circle', { cx: '12', cy: '12', r: '8', stroke: 'white', 'stroke-width': '2' }),
  h('path', { d: 'M12 1v6m0 6v6m11-7h-6m-6 0H1', stroke: 'white', 'stroke-width': '2' })
])

const ProjectIcon = () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none' }, [
  h('rect', { x: '3', y: '4', width: '18', height: '18', rx: '2', stroke: 'white', 'stroke-width': '2' }),
  h('path', { d: 'M3 10h18M9 4v6', stroke: 'white', 'stroke-width': '2' }),
  h('circle', { cx: '8', cy: '15', r: '1.5', fill: 'white' }),
  h('circle', { cx: '12', cy: '15', r: '1.5', fill: 'white' }),
  h('circle', { cx: '16', cy: '15', r: '1.5', fill: 'white' })
])

const services = ref([
  {
    title: 'AI & Machine Learning',
    description: 'Deploy intelligent systems that automate processes, predict outcomes, and unlock insights from your data.',
    svgIcon: AIIcon,
    gradientClass: 'bg-gradient-primary',
    features: [
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Deep Learning Models'
    ],
    link: '/services/ai'
  },
  {
    title: 'Data Engineering',
    description: 'Build robust data pipelines and architectures that ensure seamless data flow across your organization.',
    svgIcon: DataEngIcon,
    gradientClass: 'bg-gradient-info',
    features: [
      'ETL/ELT Pipelines',
      'Real-time Processing',
      'Data Lake Design',
      'Data Quality Management'
    ],
    link: '/services/data-engineering'
  },
  {
    title: 'Cloud Computing',
    description: 'Migrate and optimize your infrastructure with scalable cloud solutions from AWS, Azure, and GCP.',
    svgIcon: CloudIcon,
    gradientClass: 'bg-gradient-success',
    features: [
      'Cloud Migration',
      'Serverless Architecture',
      'Cost Optimization',
      'Multi-Cloud Strategy'
    ],
    link: '/services/cloud'
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your data assets with enterprise-grade security solutions and compliance frameworks.',
    svgIcon: SecurityIcon,
    gradientClass: 'bg-gradient-danger',
    features: [
      'Threat Detection & Response',
      'Compliance Management',
      '24/7 Security Monitoring',
      'Penetration Testing'
    ],
    link: '/services/security'
  },
  {
    title: 'Business Intelligence',
    description: 'Transform raw data into actionable insights with interactive dashboards and strategic reports.',
    svgIcon: BIIcon,
    gradientClass: 'bg-gradient-warning',
    features: [
      'Interactive Dashboards',
      'KPI Monitoring',
      'Strategic Reporting',
      'Self-Service Analytics'
    ],
    link: '/services/bi'
  },
  {
    title: 'Big Data Solutions',
    description: 'Process and analyze massive datasets with distributed computing and advanced analytics platforms.',
    svgIcon: BigDataIcon,
    gradientClass: 'bg-gradient-purple',
    features: [
      'Distributed Processing',
      'Spark & Hadoop Ecosystems',
      'Data Lake Architecture',
      'Stream Processing'
    ],
    link: '/services/bigdata'
  },
  {
    title: 'Project Management',
    description: 'Ensure successful project delivery through meticulous planning, execution, and stakeholder alignment.',
    svgIcon: ProjectIcon,
    gradientClass: 'bg-gradient-dark',
    features: [
      'Agile & Scrum Delivery',
      'Stakeholder Management',
      'End-to-End Execution',
      'Risk Mitigation'
    ],
    link: '/services/project-management'
  }
]);

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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #8b5cf6 100%);
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
  color: #667eea;
  border: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.hero-section .btn-light:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
  color: #667eea;
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 100px 0;
}

.cta-section .btn-light {
  background: white;
  color: #667eea;
  border: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta-section .btn-light:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
  color: #667eea;
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
  fill: #0f0f0f;
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
</style>
