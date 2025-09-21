<template>
  <div>
    <!-- Hero Section -->
    <section class="position-relative bg-dark text-white overflow-hidden py-5">
      <!-- Background overlay -->
      <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>

      <!-- Background pattern -->
      <div class="position-absolute top-0 start-0 w-100 h-100 opacity-25">
        <div class="position-absolute top-0 start-0 w-100 h-100" style="background-image: url('/assets/img/landing/saas-4/hero-bg-pattern.png'); background-size: cover;"></div>
      </div>

      <div class="container position-relative" style="z-index: 2;">
        <div class="row align-items-center py-5">
          <div class="col-lg-7">
            <h1 class="display-2 fw-bold mb-4">Our Solutions</h1>
            <p class="fs-5 text-white-50 mb-4">
              Comprehensive data solutions tailored to your industry needs. We combine deep domain expertise with cutting-edge technology to deliver transformative results.
            </p>
            <div class="d-flex flex-wrap gap-3">
              <NuxtLink to="/contact" class="btn btn-primary btn-lg px-4">
                Get Started
                <i class="ai-arrow-right ms-2"></i>
              </NuxtLink>
              <NuxtLink to="/about" class="btn btn-outline-light btn-lg px-4">
                Learn More
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions Grid -->
    <section class="py-5">
      <div class="container py-4">
        <div class="text-center mb-5">
          <span class="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 mb-3">INDUSTRY SOLUTIONS</span>
          <h2 class="display-5 fw-bold mb-3">Tailored for Your Industry</h2>
          <p class="fs-lg text-muted mx-auto" style="max-width: 700px;">
            We understand that every industry has unique challenges. Our solutions are designed to address specific needs and deliver measurable business outcomes.
          </p>
        </div>

        <div class="row g-4 mb-5">
          <div class="col-md-6 col-lg-4" v-for="solution in solutions" :key="solution.id">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <div class="mb-4">
                  <div
                    class="d-inline-flex align-items-center justify-content-center rounded-3 text-white"
                    :style="{
                      width: '64px',
                      height: '64px',
                      background: solution.iconColor
                    }"
                  >
                    <i :class="`bi bi-${getIconMapping(solution.icon)} fs-3`"></i>
                  </div>
                </div>
                <h4 class="card-title mb-3">{{ solution.title }}</h4>
                <p class="text-muted mb-4">{{ solution.subtitle }}</p>

                <!-- Key Features -->
                <ul class="list-unstyled mb-4">
                  <li class="d-flex align-items-start mb-2" v-for="(feature, idx) in solution.features.slice(0, 3)" :key="idx">
                    <i class="bi bi-check-circle-fill text-success mt-1 me-2"></i>
                    <span class="text-muted small">{{ feature.title }}</span>
                  </li>
                </ul>

                <NuxtLink
                  :to="`/solutions/${solution.slug}`"
                  class="btn btn-outline-primary w-100"
                >
                  Learn More
                  <i class="bi bi-arrow-right ms-2"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-5 bg-light">
      <div class="container py-4">
        <div class="text-center mb-5">
          <span class="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 mb-3">WHY GAMMA NEUTRAL</span>
          <h2 class="display-5 fw-bold mb-3">Why Choose Our Solutions?</h2>
          <p class="fs-lg text-muted mx-auto" style="max-width: 700px;">
            We bring together industry expertise, technological innovation, and a proven track record of success.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-3">
            <div class="text-center">
              <div class="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle mb-3" style="width: 80px; height: 80px;">
                <i class="bi bi-lightbulb-fill text-primary fs-3"></i>
              </div>
              <h5 class="mb-3">Domain Expertise</h5>
              <p class="text-muted">Deep understanding of industry-specific challenges and requirements</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="text-center">
              <div class="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle mb-3" style="width: 80px; height: 80px;">
                <i class="bi bi-rocket-takeoff-fill text-primary fs-3"></i>
              </div>
              <h5 class="mb-3">Cutting-Edge Tech</h5>
              <p class="text-muted">Latest AI, ML, and data analytics technologies</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="text-center">
              <div class="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle mb-3" style="width: 80px; height: 80px;">
                <i class="bi bi-shield-fill-check text-primary fs-3"></i>
              </div>
              <h5 class="mb-3">Security First</h5>
              <p class="text-muted">Enterprise-grade security and compliance standards</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="text-center">
              <div class="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle mb-3" style="width: 80px; height: 80px;">
                <i class="bi bi-graph-up-arrow text-primary fs-3"></i>
              </div>
              <h5 class="mb-3">Proven Results</h5>
              <p class="text-muted">Track record of delivering measurable business outcomes</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-5 bg-primary bg-gradient text-white">
      <div class="container py-4">
        <div class="row text-center g-4">
          <div class="col-6 col-lg-3">
            <h2 class="display-4 fw-bold mb-2">500+</h2>
            <p class="mb-0 text-white-50">Happy Clients</p>
          </div>
          <div class="col-6 col-lg-3">
            <h2 class="display-4 fw-bold mb-2">1000+</h2>
            <p class="mb-0 text-white-50">Projects Completed</p>
          </div>
          <div class="col-6 col-lg-3">
            <h2 class="display-4 fw-bold mb-2">50+</h2>
            <p class="mb-0 text-white-50">Industry Awards</p>
          </div>
          <div class="col-6 col-lg-3">
            <h2 class="display-4 fw-bold mb-2">98%</h2>
            <p class="mb-0 text-white-50">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5">
      <div class="container py-4">
        <div class="card border-0 bg-dark text-white">
          <div class="card-body text-center p-5">
            <h2 class="display-5 fw-bold mb-3">Ready to Transform Your Business?</h2>
            <p class="fs-lg mb-4 text-white-50 mx-auto" style="max-width: 600px;">
              Let's discuss how our data solutions can help you achieve your business goals.
            </p>
            <div class="d-flex flex-wrap justify-content-center gap-3">
              <NuxtLink to="/contact" class="btn btn-primary btn-lg px-5">
                Schedule a Consultation
                <i class="bi bi-calendar-check ms-2"></i>
              </NuxtLink>
              <NuxtLink to="/resources" class="btn btn-outline-light btn-lg px-5">
                Download Resources
                <i class="bi bi-download ms-2"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getAllSolutions } from '~/domains/solutions/data/solutions'

const solutions = getAllSolutions()

// Map Font Awesome icons to Bootstrap icons
const getIconMapping = (faIcon: string) => {
  const iconMap: Record<string, string> = {
    'fa-university': 'bank',
    'fa-heartbeat': 'heart-pulse',
    'fa-shopping-cart': 'cart3',
    'fa-building': 'building',
    'fa-cogs': 'gear-fill',
    'fa-graduation-cap': 'mortarboard'
  }
  return iconMap[faIcon] || 'info-circle'
}

// SEO
useHead({
  title: 'Solutions - Gamma Neutral',
  meta: [
    {
      name: 'description',
      content: 'Explore our comprehensive data solutions tailored for various industries including financial services, healthcare, retail, government, manufacturing, and education.'
    }
  ]
})
</script>

<style scoped>
/* Card hover effects */
.card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
}

/* Button hover effects */
.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

/* Badge animation */
.badge {
  animation: fadeInUp 0.5s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>