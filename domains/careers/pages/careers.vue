<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-dark position-relative py-4" style="margin-top: 80px;">
      <div class="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100" style="background-color: rgba(255,255,255, .03);"></div>
      <div class="container position-relative z-2 py-4">
        <div class="row">
          <div class="col-lg-10 col-xl-9">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb">
              <ol class="pt-2 pb-2 breadcrumb">
                <li class="breadcrumb-item">
                  <NuxtLink to="/" class="text-white-50">Home</NuxtLink>
                </li>
                <li class="breadcrumb-item">
                  <NuxtLink to="/about" class="text-white-50">About</NuxtLink>
                </li>
                <li class="breadcrumb-item text-white active" aria-current="page">Careers</li>
              </ol>
            </nav>

            <h1 class="h1 text-white pb-2">Join Gamma Neutral</h1>
            <p class="fs-5 text-white-50 pb-3 mb-0" style="max-width: 700px;">
              Build your career at the forefront of data science and AI innovation.
              We're looking for passionate individuals who want to make a real impact.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Join Us -->
    <section class="container py-5">
      <div class="text-center mb-5 pb-lg-4">
        <div class="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 mb-3">WHY JOIN US</div>
        <h2 class="h2 mb-3">Build Your Future With Gamma Neutral</h2>
        <p class="fs-lg text-muted mx-auto" style="max-width: 700px;">
          At Gamma Neutral, you'll work on challenging projects, learn from industry experts,
          and grow your career in a supportive, innovative environment.
        </p>
      </div>

      <div class="row g-4 mb-5">
        <div class="col-md-6 col-lg-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <div class="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-3" style="width: 56px; height: 56px;">
                  <i class="bi bi-graph-up text-primary fs-4"></i>
                </div>
              </div>
              <h5 class="mb-3">Career Growth</h5>
              <p class="text-muted mb-0">
                Clear advancement paths with mentorship programs and continuous learning opportunities.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <div class="d-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-3" style="width: 56px; height: 56px;">
                  <i class="bi bi-heart text-success fs-4"></i>
                </div>
              </div>
              <h5 class="mb-3">Work-Life Balance</h5>
              <p class="text-muted mb-0">
                Flexible working arrangements, generous PTO, and wellness programs.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <div class="d-flex align-items-center justify-content-center bg-warning bg-opacity-10 rounded-3" style="width: 56px; height: 56px;">
                  <i class="bi bi-trophy text-warning fs-4"></i>
                </div>
              </div>
              <h5 class="mb-3">Impactful Work</h5>
              <p class="text-muted mb-0">
                Work on cutting-edge projects that transform businesses and industries.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <div class="d-flex align-items-center justify-content-center bg-info bg-opacity-10 rounded-3" style="width: 56px; height: 56px;">
                  <i class="bi bi-gift text-info fs-4"></i>
                </div>
              </div>
              <h5 class="mb-3">Competitive Benefits</h5>
              <p class="text-muted mb-0">
                Comprehensive health coverage, RRSP matching, and performance bonuses.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <div class="d-flex align-items-center justify-content-center bg-danger bg-opacity-10 rounded-3" style="width: 56px; height: 56px;">
                  <i class="bi bi-people text-danger fs-4"></i>
                </div>
              </div>
              <h5 class="mb-3">Diverse Team</h5>
              <p class="text-muted mb-0">
                Inclusive culture celebrating diverse backgrounds and perspectives.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <div class="d-flex align-items-center justify-content-center bg-purple bg-opacity-10 rounded-3" style="width: 56px; height: 56px; background-color: rgba(139, 92, 246, 0.1);">
                  <i class="bi bi-laptop text-primary fs-4"></i>
                </div>
              </div>
              <h5 class="mb-3">Remote Options</h5>
              <p class="text-muted mb-0">
                Hybrid and remote work opportunities for better flexibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Positions -->
    <section class="py-5 bg-light">
      <div class="container py-lg-4">
        <div class="text-center mb-5">
          <div class="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 mb-3">OPEN POSITIONS</div>
          <h2 class="h2 mb-3">Current Opportunities at Gamma Neutral</h2>
          <p class="fs-lg text-muted mx-auto" style="max-width: 700px;">
            Explore our open positions and find your next career opportunity.
          </p>
        </div>

        <!-- Job Listings -->
        <div class="row g-4">
          <!-- Group positions by department -->
          <div v-for="department in departments" :key="department" class="col-12">
            <h4 class="mb-4">{{ department }}</h4>

            <div class="row g-4">
              <div class="col-lg-6" v-for="position in getPositionsByDept(department)" :key="position.id">
                <div class="card h-100 border-0 shadow-sm">
                  <div class="card-body p-4">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h5 class="mb-1">{{ position.title }}</h5>
                        <p class="text-muted mb-0">{{ position.location }} • {{ position.type }}</p>
                      </div>
                      <span v-if="isNewPosition(position.posted)" class="badge bg-success">New</span>
                      <span v-if="position.remote" class="badge bg-info">Remote</span>
                    </div>
                    <p class="text-muted mb-3">
                      {{ position.summary }}
                    </p>
                    <div class="d-flex flex-wrap gap-2 mb-3">
                      <span v-for="(skill, idx) in position.skills.slice(0, 3)" :key="idx" class="badge bg-secondary">
                        {{ skill }}
                      </span>
                    </div>
                    <NuxtLink :to="`/careers/${position.id}`" class="btn btn-outline-primary">
                      View Details
                      <i class="bi bi-arrow-right ms-1"></i>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Process -->
    <section class="container py-5">
      <div class="text-center mb-5">
        <div class="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 mb-3">HOW TO APPLY</div>
        <h2 class="h2 mb-3">Our Application Process</h2>
        <p class="fs-lg text-muted mx-auto" style="max-width: 700px;">
          We've designed our hiring process to be transparent, efficient, and respectful of your time.
        </p>
      </div>

      <div class="row g-4">
        <div class="col-md-6 col-lg-3">
          <div class="text-center">
            <div class="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-3" style="width: 64px; height: 64px;">
              <span class="fs-4 fw-bold">1</span>
            </div>
            <h5 class="mb-2">Application</h5>
            <p class="text-muted fs-sm">
              Submit your resume and cover letter through our portal
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="text-center">
            <div class="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-3" style="width: 64px; height: 64px;">
              <span class="fs-4 fw-bold">2</span>
            </div>
            <h5 class="mb-2">Phone Screen</h5>
            <p class="text-muted fs-sm">
              Initial conversation with our HR team
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="text-center">
            <div class="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-3" style="width: 64px; height: 64px;">
              <span class="fs-4 fw-bold">3</span>
            </div>
            <h5 class="mb-2">Technical Interview</h5>
            <p class="text-muted fs-sm">
              Meet with the team and showcase your skills
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="text-center">
            <div class="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-3" style="width: 64px; height: 64px;">
              <span class="fs-4 fw-bold">4</span>
            </div>
            <h5 class="mb-2">Offer</h5>
            <p class="text-muted fs-sm">
              Receive and negotiate your offer package
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5 bg-primary bg-gradient text-white">
      <div class="container py-4">
        <div class="text-center">
          <h2 class="h2 text-white mb-3">Don't see the right role?</h2>
          <p class="fs-lg text-white-50 mb-4 mx-auto" style="max-width: 600px;">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div class="d-flex flex-wrap justify-content-center gap-3">
            <a href="mailto:careers@gammaneutral.com" class="btn btn-light btn-lg px-5">
              Send Your Resume
              <i class="bi bi-envelope ms-2"></i>
            </a>
            <NuxtLink to="/about/team" class="btn btn-outline-light btn-lg px-5">
              Meet Our Team
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { jobPositions } from '../data/positions'
import { computed } from 'vue'

// Get unique departments
const departments = computed(() => {
  return [...new Set(jobPositions.map(p => p.department))]
})

// Get positions by department
function getPositionsByDept(department: string) {
  return jobPositions.filter(p => p.department === department)
}

// Check if position is new (posted within last 30 days)
function isNewPosition(postedDate: string) {
  const posted = new Date(postedDate)
  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
  return posted >= thirtyDaysAgo
}

// SEO
useHead({
  title: 'Careers - Gamma Neutral Consulting Inc.',
  meta: [
    {
      name: 'description',
      content: 'Join Gamma Neutral Consulting Inc. and build your career in data science and AI. Explore open positions at our Toronto headquarters - data science, engineering, and consulting roles available.'
    },
    {
      name: 'keywords',
      content: 'Gamma Neutral careers, Toronto tech jobs, data science jobs, AI jobs, consulting careers'
    }
  ]
})
</script>

<style scoped>
/* Breadcrumb styles for dark background */
.breadcrumb {
  background: transparent;
  padding: 0;
  margin-bottom: 0;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.5);
}

.breadcrumb-item a {
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb-item a:hover {
  color: white !important;
}

/* Card hover effects */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
}

/* Badge styles */
.badge {
  font-weight: 600;
}
</style>