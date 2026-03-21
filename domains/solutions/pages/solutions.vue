<template>
  <div>
    <!-- Hero Section -->
    <section class="position-relative text-white overflow-hidden py-5" style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);">
      <div class="container position-relative" style="z-index: 2;">
        <div class="row align-items-center py-5">
          <div class="col-lg-7">
            <h1 class="display-4 fw-bold mb-4">Our Solutions</h1>
            <p class="fs-5 text-white-50 mb-4">
              Comprehensive data solutions tailored to your industry needs. We combine deep domain expertise with cutting-edge technology to deliver transformative results.
            </p>
            <div class="d-flex flex-wrap gap-3">
              <NuxtLink to="/contact" class="btn btn-primary btn-lg px-4">
                Talk to a Specialist
                <i class="ai-arrow-right ms-2"></i>
              </NuxtLink>
              <NuxtLink to="/about" class="btn btn-outline-light btn-lg px-4">
                See How We Work
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
                  Talk to a Specialist
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
                Discuss Your Project
                <i class="bi bi-calendar-check ms-2"></i>
              </NuxtLink>
              <NuxtLink to="/about" class="btn btn-outline-light btn-lg px-5">
                See How We Work
                <i class="bi bi-arrow-right ms-2"></i>
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
import { useSolutionsStore } from '~/domains/solutions/stores/useSolutionsStore'

const solutionsStore = useSolutionsStore()
const staticSolutions = getAllSolutions()

onMounted(async () => {
  await solutionsStore.fetchSolutions(20)
})

// Prefer API data but fall back to static data for rich detail pages
const solutions = computed(() => {
  if (solutionsStore.solutions.length > 0) {
    return solutionsStore.solutions.map((s) => {
      // Try to find matching static data for full detail (features, benefits etc.)
      const staticMatch = staticSolutions.find((ss) => ss.slug === s.slug)
      if (staticMatch) {
        return { ...staticMatch, title: s.title, description: s.description }
      }
      return {
        id: s.id,
        slug: s.slug,
        title: s.title,
        subtitle: s.description,
        description: s.description,
        icon: 'fa-chart-line',
        iconColor: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
        features: [],
        benefits: [],
        useCases: [],
        technologies: [],
        processSteps: [],
        cta: { title: 'Ready to Move Forward?', description: 'Tell us about your challenge and we will outline a practical path forward.', buttonText: 'Discuss Your Project' },
      }
    })
  }
  return staticSolutions
})

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