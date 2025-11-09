<template>
  <div>
    <!-- Hero Section - Compact and Inspiring -->
    <section class="hero-gradient position-relative py-4 overflow-hidden" style="margin-top: 80px;">
      <div class="container position-relative z-2 py-4">
        <div class="row align-items-center">
          <div class="col-lg-10 mx-auto text-center">
            <!-- Company Name and Slogan -->
            <div class="badge bg-white bg-opacity-20 text-white px-4 py-2 rounded-pill mb-3 fw-semibold">
              <i class="bi bi-geo-alt me-2"></i>Toronto, Canada • Incorporated 2025
            </div>

            <h1 class="display-4 text-white fw-bold mb-2 lh-1">
              Gamma Neutral Consulting Inc.
            </h1>

            <p class="h5 text-gradient fw-bold mb-3">
              "Your Data Solutions"
            </p>

            <p class="fs-5 text-white-50 mb-4 mx-auto" style="max-width: 700px;">
              We transform data into opportunity. From AI to cloud computing, our team delivers
              innovative, secure, and scalable solutions tailored to your organization's unique needs.
            </p>

            <!-- Mission Statement -->
            <div class="bg-white bg-opacity-10 rounded-3 p-4 mb-4 mx-auto" style="max-width: 900px;">
              <h3 class="h5 text-white fw-bold mb-2">
                <i class="bi bi-compass text-gradient me-2"></i>Our Mission
              </h3>
              <p class="text-white-50 mb-0">
                At Gamma Neutral Consulting, we empower businesses to harness the full potential of their data.
                Our mission is to deliver innovative, secure, and scalable solutions that drive informed
                decision-making and operational excellence.
              </p>
            </div>

            <!-- Simple, Clear CTAs -->
            <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
              <NuxtLink to="/contact" class="btn btn-white px-4 py-2 shadow">
                <i class="bi bi-rocket-takeoff me-2"></i>
                Start Your Journey
              </NuxtLink>
              <NuxtLink to="/services" class="btn btn-outline-light px-4 py-2">
                <i class="bi bi-grid-3x3-gap me-2"></i>
                Explore Services
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
              <i class="bi bi-building me-2"></i>Company Overview
            </div>
            <h2 class="h2 fw-bold mb-4">
              Your trusted partner in data transformation
            </h2>
            <p class="fs-6 text-muted mb-4 lh-base">
              <strong>Gamma Neutral Consulting Inc.</strong> is a Canadian technology consulting firm
              specializing in data solutions, artificial intelligence, and cloud computing.
              We help businesses unlock the power of their data through innovative,
              secure, and scalable solutions.
            </p>

            <!-- Company Details -->
            <div class="bg-light rounded-3 p-4 mb-4">
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="d-flex align-items-start">
                    <i class="bi bi-pin-map text-primary me-3 mt-1"></i>
                    <div>
                      <small class="text-muted d-block">Headquarters</small>
                      <strong class="fs-6">108 Redpath Ave, Suite 19<br/>Toronto, ON M4S 2J7</strong>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex align-items-start">
                    <i class="bi bi-calendar-check text-primary me-3 mt-1"></i>
                    <div>
                      <small class="text-muted d-block">Incorporated</small>
                      <strong class="fs-6">June 16, 2025</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                 alt="Gamma Neutral team collaboration"
                 class="img-fluid rounded-3 shadow">
          </div>
        </div>
      </div>
    </section>

    <!-- Core Capabilities - Clean Grid -->
    <section class="py-5 bg-light">
      <div class="container py-4">
        <div class="text-center mb-4">
          <h2 class="h2 fw-bold mb-3">How we help you win</h2>
          <p class="fs-6 text-muted mx-auto" style="max-width: 600px;">
            Enterprise-grade AI solutions tailored to your industry
          </p>
        </div>

        <div class="row g-4">
          <!-- Capability 1 -->
          <div class="col-md-6 col-lg-4">
            <div class="card border-0 shadow-sm h-100 capability-card">
              <div class="card-body p-4">
                <div class="icon-wrapper bg-primary bg-opacity-10 rounded-3 d-inline-flex p-3 mb-3">
                  <i class="bi bi-graph-up-arrow text-primary fs-4"></i>
                </div>
                <h4 class="mb-3">Predictive Analytics</h4>
                <p class="text-muted mb-0">
                  Machine learning models that forecast trends with 95%+ accuracy,
                  enabling proactive decision-making.
                </p>
              </div>
            </div>
          </div>

          <!-- Capability 2 -->
          <div class="col-md-6 col-lg-4">
            <div class="card border-0 shadow-sm h-100 capability-card">
              <div class="card-body p-4">
                <div class="icon-wrapper bg-success bg-opacity-10 rounded-3 d-inline-flex p-3 mb-3">
                  <i class="bi bi-robot text-success fs-4"></i>
                </div>
                <h4 class="mb-3">AI Automation</h4>
                <p class="text-muted mb-0">
                  Custom AI solutions that automate complex processes,
                  reducing operational costs by up to 40%.
                </p>
              </div>
            </div>
          </div>

          <!-- Capability 3 -->
          <div class="col-md-6 col-lg-4">
            <div class="card border-0 shadow-sm h-100 capability-card">
              <div class="card-body p-4">
                <div class="icon-wrapper bg-warning bg-opacity-10 rounded-3 d-inline-flex p-3 mb-3">
                  <i class="bi bi-lightning-charge text-warning fs-4"></i>
                </div>
                <h4 class="mb-3">Real-time Insights</h4>
                <p class="text-muted mb-0">
                  Live dashboards and monitoring systems processing millions
                  of data points per second.
                </p>
              </div>
            </div>
          </div>

          <!-- Capability 4 -->
          <div class="col-md-6 col-lg-4">
            <div class="card border-0 shadow-sm h-100 capability-card">
              <div class="card-body p-4">
                <div class="icon-wrapper bg-info bg-opacity-10 rounded-3 d-inline-flex p-3 mb-3">
                  <i class="bi bi-cpu text-info fs-4"></i>
                </div>
                <h4 class="mb-3">Machine Learning</h4>
                <p class="text-muted mb-0">
                  End-to-end ML pipelines from data preparation to model
                  deployment and monitoring.
                </p>
              </div>
            </div>
          </div>

          <!-- Capability 5 -->
          <div class="col-md-6 col-lg-4">
            <div class="card border-0 shadow-sm h-100 capability-card">
              <div class="card-body p-4">
                <div class="icon-wrapper bg-danger bg-opacity-10 rounded-3 d-inline-flex p-3 mb-3">
                  <i class="bi bi-shield-check text-danger fs-4"></i>
                </div>
                <h4 class="mb-3">Data Governance</h4>
                <p class="text-muted mb-0">
                  Enterprise-grade security and compliance with SOC 2,
                  ISO 27001, and GDPR standards.
                </p>
              </div>
            </div>
          </div>

          <!-- Capability 6 -->
          <div class="col-md-6 col-lg-4">
            <div class="card border-0 shadow-sm h-100 capability-card">
              <div class="card-body p-4">
                <div class="icon-wrapper bg-secondary bg-opacity-10 rounded-3 d-inline-flex p-3 mb-3">
                  <i class="bi bi-cloud text-secondary fs-4"></i>
                </div>
                <h4 class="mb-3">Cloud Infrastructure</h4>
                <p class="text-muted mb-0">
                  Scalable solutions on AWS, Azure, and GCP with
                  99.9% uptime guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Simple Process -->
    <section class="py-5">
      <div class="container py-4">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <h2 class="h2 fw-bold mb-4">
              Our proven approach delivers results
            </h2>
            <p class="fs-6 text-muted mb-4 lh-base">
              A systematic methodology ensuring successful project delivery
            </p>

            <!-- Simple Steps -->
            <div class="process-steps">
              <div class="d-flex mb-4">
                <div class="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="min-width: 48px; height: 48px;">
                  1
                </div>
                <div>
                  <h5 class="mb-1">Discovery</h5>
                  <p class="text-muted mb-0">Understanding your business challenges and objectives</p>
                </div>
              </div>

              <div class="d-flex mb-4">
                <div class="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="min-width: 48px; height: 48px;">
                  2
                </div>
                <div>
                  <h5 class="mb-1">Design</h5>
                  <p class="text-muted mb-0">Crafting customized solutions that address your specific needs</p>
                </div>
              </div>

              <div class="d-flex mb-4">
                <div class="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="min-width: 48px; height: 48px;">
                  3
                </div>
                <div>
                  <h5 class="mb-1">Development</h5>
                  <p class="text-muted mb-0">Building and implementing the solution with precision</p>
                </div>
              </div>

              <div class="d-flex mb-4">
                <div class="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="min-width: 48px; height: 48px;">
                  4
                </div>
                <div>
                  <h5 class="mb-1">Deployment</h5>
                  <p class="text-muted mb-0">Ensuring smooth integration and adoption</p>
                </div>
              </div>

              <div class="d-flex">
                <div class="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="min-width: 48px; height: 48px;">
                  5
                </div>
                <div>
                  <h5 class="mb-1">Support</h5>
                  <p class="text-muted mb-0">Providing ongoing assistance to ensure sustained success</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                 alt="Gamma Neutral systematic approach"
                 class="img-fluid rounded-3 shadow">
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section - Essential Leadership -->
    <section class="py-5 bg-light">
      <div class="container py-4">
        <div class="text-center mb-4">
          <h2 class="h2 fw-bold mb-3">Meet our leadership</h2>
          <p class="fs-6 text-muted mx-auto" style="max-width: 600px;">
            Experienced leaders driving innovation in data science and AI
          </p>
        </div>

        <div class="row g-4 justify-content-center">
          <!-- Key team members - showing only top 3 for essential approach -->
          <div class="col-md-6 col-lg-4" v-for="member in featuredTeamMembers" :key="member.id">
            <div class="card border-0 shadow-sm h-100 team-card">
              <div class="position-relative">
                <div class="ratio ratio-4x3 bg-secondary">
                  <img
                    :src="member.image"
                    :alt="member.name"
                    class="card-img-top object-fit-cover"
                    onerror="this.src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&face'"
                  >
                </div>
              </div>
              <div class="card-body p-4 text-center">
                <h4 class="mb-1">{{ member.name }}</h4>
                <p class="text-primary fw-semibold mb-3">{{ member.position }}</p>
                <p class="text-muted small mb-3">{{ member.bio.substring(0, 120) }}...</p>

                <!-- Key expertise badges -->
                <div class="d-flex flex-wrap gap-2 justify-content-center mb-3">
                  <span v-for="(skill, idx) in member.expertise.slice(0, 2)" :key="idx"
                    class="badge bg-primary bg-opacity-10 text-primary small">
                    {{ skill }}
                  </span>
                </div>

                <!-- Social links -->
                <div class="d-flex gap-2 justify-content-center">
                  <a v-if="member.linkedin" :href="member.linkedin" target="_blank"
                     class="btn btn-sm btn-outline-primary btn-icon rounded-circle">
                    <i class="bi bi-linkedin"></i>
                  </a>
                  <a v-if="member.email" :href="`mailto:${member.email}`"
                     class="btn btn-sm btn-outline-primary btn-icon rounded-circle">
                    <i class="bi bi-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Link to full team page -->
        <div class="text-center mt-5">
          <NuxtLink to="/about/team" class="btn btn-primary btn-lg px-5">
            Meet Our Full Team
            <i class="bi bi-arrow-right ms-2"></i>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Final CTA - Simple and Powerful -->
    <section class="cta-gradient py-5">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="h2 fw-bold text-white mb-3">
              Ready to transform your data?
            </h2>
            <p class="fs-6 text-white-50 mb-4">
              Let's discuss how we can help unlock the full potential of your data.
            </p>
            <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
              <NuxtLink to="/contact" class="btn btn-white btn-lg px-4 py-2 shadow">
                <i class="bi bi-calendar-check me-2"></i>
                Schedule Consultation
              </NuxtLink>
              <NuxtLink to="/services" class="btn btn-outline-light btn-lg px-4 py-2">
                <i class="bi bi-grid-3x3-gap me-2"></i>
                View Our Services
              </NuxtLink>
            </div>
            <p class="text-white-50 mt-4 small">
              No commitment required. Get expert insights in your first meeting.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { teamMembers } from '~/domains/aboutus/data/team'

// Featured team members for About page - showing only top 3 leadership
const featuredTeamMembers = teamMembers.slice(0, 3)

// SEO
useHead({
  title: 'About Us - Gamma Neutral Consulting Inc.',
  meta: [
    {
      name: 'description',
      content: 'Gamma Neutral Consulting Inc. delivers innovative, secure, and scalable data solutions. From AI to cloud computing, we empower businesses to harness the full potential of their data.'
    },
    {
      name: 'keywords',
      content: 'data analytics, AI consulting, machine learning, business intelligence, Toronto, data solutions, cybersecurity, cloud computing'
    }
  ]
})
</script>

<style scoped>
/* Hero Gradient */
.hero-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  border: 1px solid transparent !important;
}

.capability-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
  border-color: rgba(102, 126, 234, 0.2) !important;
}

/* Team Card Hover */
.team-card {
  transition: all 0.3s ease;
  border: 1px solid transparent !important;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
  border-color: rgba(102, 126, 234, 0.2) !important;
}

/* Button Improvements */
.btn-white {
  background: white;
  color: #667eea;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-white:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2) !important;
  background: white;
  color: #764ba2;
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

/* Clean shadows */
.shadow-sm {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08) !important;
}

.shadow-lg {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
}
</style>