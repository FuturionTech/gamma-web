<template>
  <div>
    <!-- Hero Section with Parallax Background -->
    <section class="position-relative bg-dark text-white overflow-hidden" style="min-height: 500px;">
      <!-- Background overlay -->
      <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>

      <!-- Background pattern -->
      <div class="position-absolute top-0 start-0 w-100 h-100 opacity-25">
        <div class="position-absolute top-0 start-0 w-100 h-100" style="background-image: url('/assets/img/landing/saas-4/hero-bg-pattern.png'); background-size: cover;"></div>
      </div>

      <div class="container position-relative" style="z-index: 2;">
        <div class="py-5">
          <!-- Breadcrumb -->
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb breadcrumb-light mb-4">
              <li class="breadcrumb-item">
                <NuxtLink to="/">Home</NuxtLink>
              </li>
              <li class="breadcrumb-item">
                <NuxtLink to="/solutions">Solutions</NuxtLink>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                {{ solution?.title }}
              </li>
            </ol>
          </nav>

          <!-- Hero Content -->
          <div class="row align-items-center">
            <div class="col-lg-8">
              <h1 class="display-3 fw-bold mb-4">{{ solution?.title }}</h1>
              <p class="fs-5 text-white-50 mb-5">{{ solution?.subtitle }}</p>

              <!-- Key Features Grid -->
              <div class="row g-4">
                <div v-for="(feature, index) in solution?.features.slice(0, 4)" :key="index" class="col-sm-6">
                  <div class="d-flex align-items-start">
                    <div class="flex-shrink-0">
                      <div class="d-flex align-items-center justify-content-center rounded-2 bg-white bg-opacity-10" style="width: 48px; height: 48px;">
                        <i class="bi bi-check-circle-fill text-white fs-4"></i>
                      </div>
                    </div>
                    <div class="ps-3">
                      <h5 class="mb-1 text-white">{{ feature.title }}</h5>
                      <p class="mb-0 text-white-50 fs-sm">{{ feature.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="py-5 bg-light">
      <div class="container py-lg-5 py-4">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <span class="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 mb-3">OVERVIEW</span>
            <h2 class="display-5 fw-bold mb-4">Transform Your Business with Data</h2>
            <p class="fs-lg text-muted mb-4">{{ solution?.description }}</p>

            <!-- Benefits List -->
            <div class="row g-3">
              <div v-for="(benefit, index) in solution?.benefits.slice(0, 4)" :key="index" class="col-12">
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <div class="d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10" style="width: 40px; height: 40px;">
                      <i class="bi bi-check-lg text-primary fs-5"></i>
                    </div>
                  </div>
                  <div class="ps-3">
                    <h6 class="mb-1">{{ benefit.title }}</h6>
                    <p class="mb-0 text-muted fs-sm">{{ benefit.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xl-5 offset-xl-1">
            <div class="position-relative">
              <img
                src="/assets/img/services/v3/01.jpg"
                alt="Solution Overview"
                class="rounded-4 shadow-lg w-100"
              >
              <div class="position-absolute bottom-0 start-0 bg-white rounded-3 shadow-lg m-4 p-3">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <i class="bi bi-award-fill text-success fs-1"></i>
                  </div>
                  <div class="ps-3">
                    <h6 class="mb-0">Industry Leading</h6>
                    <p class="mb-0 text-muted fs-sm">Trusted by 500+ companies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="py-5">
      <div class="container py-lg-5 py-4">
        <div class="text-center mb-5">
          <span class="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 mb-3">APPLICATIONS</span>
          <h2 class="display-5 fw-bold mb-3 mt-2">Use Cases</h2>
          <p class="fs-lg text-muted mx-auto" style="max-width: 600px;">
            Discover how our solution addresses real-world challenges
          </p>
        </div>

        <div class="row g-4">
          <div v-for="(useCase, index) in solution?.useCases" :key="index" class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <div class="d-flex align-items-center">
                  <div class="d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 me-3" style="width: 48px; height: 48px;">
                    <i class="bi bi-graph-up-arrow text-primary fs-4"></i>
                  </div>
                  <h5 class="mb-0">{{ useCase }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-5 bg-light">
      <div class="container py-lg-5 py-4">
        <div class="text-center mb-5">
          <span class="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 mb-3">HOW WE WORK</span>
          <h2 class="display-5 fw-bold mb-3 mt-2">Our Process</h2>
          <p class="fs-lg text-muted mx-auto" style="max-width: 600px;">
            A systematic approach to deliver exceptional results
          </p>
        </div>

        <div class="row g-4">
          <div v-for="(step, index) in solution?.processSteps" :key="index" class="col-md-6 col-lg-4">
            <div class="text-center text-md-start">
              <div class="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-3" style="width: 64px; height: 64px;">
                <span class="fs-4 fw-bold">{{ step.number }}</span>
              </div>
              <h5 class="mb-2">{{ step.title }}</h5>
              <p class="text-muted">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section class="py-5">
      <div class="container py-lg-5 py-4">
        <div class="text-center mb-5">
          <span class="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 mb-3">TECH STACK</span>
          <h2 class="display-5 fw-bold mb-3 mt-2">Technologies We Use</h2>
          <p class="fs-lg text-muted mx-auto" style="max-width: 600px;">
            Cutting-edge tools and frameworks for optimal performance
          </p>
        </div>

        <div class="d-flex flex-wrap justify-content-center gap-3">
          <span
            v-for="(tech, index) in solution?.technologies"
            :key="index"
            class="badge bg-light text-dark border shadow-sm px-4 py-2 fs-6 fw-normal"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section v-if="solution?.testimonial" class="py-5 bg-gradient" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
      <div class="container py-4">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <div class="mb-4">
              <i class="bi bi-quote fs-1 text-white opacity-75"></i>
            </div>
            <blockquote class="blockquote mb-4">
              <p class="fs-3 fw-light text-white mb-4">{{ solution.testimonial.quote }}</p>
            </blockquote>
            <div class="d-flex align-items-center justify-content-center">
              <div>
                <h5 class="mb-1 text-white fw-semibold">{{ solution.testimonial.author }}</h5>
                <p class="mb-0 text-white opacity-75">
                  {{ solution.testimonial.position }} • {{ solution.testimonial.company }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5 bg-dark text-white">
      <div class="container py-4">
        <div class="row align-items-center">
          <div class="col-lg-8 mb-4 mb-lg-0">
            <h2 class="display-5 fw-bold mb-3">{{ solution?.cta.title }}</h2>
            <p class="fs-lg mb-0 text-white-50">{{ solution?.cta.description }}</p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <NuxtLink to="/contact" class="btn btn-primary btn-lg px-5">
              {{ solution?.cta.buttonText }}
              <i class="bi bi-arrow-right ms-2"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getSolutionBySlug, type Solution } from '~/domains/solutions/data/solutions'

const route = useRoute()
const solution = ref<Solution | undefined>()

// Load solution data immediately
const slug = route.params.slug as string
solution.value = getSolutionBySlug(slug)

// Redirect if solution not found
if (!solution.value) {
  navigateTo('/404')
}

// SEO
useHead({
  title: solution.value ? `${solution.value.title} - Gamma Neutral` : 'Solution - Gamma Neutral',
  meta: [
    {
      name: 'description',
      content: solution.value?.description || 'Gamma Neutral data solutions'
    }
  ]
})
</script>

<style scoped>
/* Breadcrumb light theme for dark backgrounds */
.breadcrumb-light {
  --bs-breadcrumb-divider-color: rgba(255, 255, 255, 0.5);
}

.breadcrumb-light .breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.5);
}

.breadcrumb-light .breadcrumb-item a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
}

.breadcrumb-light .breadcrumb-item a:hover {
  color: white;
}

.breadcrumb-light .breadcrumb-item.active {
  color: white;
}

/* Card hover effects */
.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

/* Badge hover effect */
.badge {
  transition: all 0.3s ease;
}

.badge:hover {
  transform: translateY(-2px);
}

/* Button hover effects */
.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

/* Smooth transitions */
* {
  transition: color 0.3s ease, background-color 0.3s ease;
}

/* Ensure badge text is visible */
.badge.bg-light {
  background-color: #f8f9fa !important;
  color: #212529 !important;
  border-color: #dee2e6 !important;
}

/* Dark mode badge support */
:global([data-bs-theme="dark"]) .badge.bg-light {
  background-color: #2b3035 !important;
  color: #f8f9fa !important;
  border-color: #495057 !important;
}
</style>