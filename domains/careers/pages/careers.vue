<template>
  <div>
    <!-- Hero Section -->
    <section class="position-relative py-4" style="margin-top: 80px; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);">
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
                <div class="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle" style="width: 56px; height: 56px;">
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
                <div class="d-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-circle" style="width: 56px; height: 56px;">
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
                <div class="d-flex align-items-center justify-content-center bg-warning bg-opacity-10 rounded-circle" style="width: 56px; height: 56px;">
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
      </div>
    </section>

    <!-- No Current Openings -->
    <section class="py-5 bg-light">
      <div class="container py-lg-4">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <div class="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle mb-4" style="width: 80px; height: 80px;">
              <i class="bi bi-briefcase text-primary fs-2"></i>
            </div>
            <h2 class="h2 mb-3">No Current Openings</h2>
            <p class="fs-5 text-muted mb-4 mx-auto" style="max-width: 600px;">
              We're always looking for talented people. While we don't have open positions
              at this time, we'd love to hear from you.
            </p>
            <p class="text-muted mb-4">
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <a href="mailto:careers@gammaneutral.com" class="btn btn-primary btn-lg px-5">
              <i class="bi bi-envelope me-2"></i>
              Send Us Your Resume
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5 bg-primary bg-gradient text-white">
      <div class="container py-4">
        <div class="text-center">
          <h2 class="h2 text-white mb-3">Stay Connected</h2>
          <p class="fs-lg text-white-50 mb-4 mx-auto" style="max-width: 600px;">
            Interested in working with us? Send us your resume and we'll reach out when a role that fits your skills becomes available.
          </p>
          <div class="d-flex flex-wrap justify-content-center gap-3">
            <a href="mailto:careers@gammaneutral.com" class="btn btn-light btn-lg px-5">
              Send Your Resume
              <i class="bi bi-envelope ms-2"></i>
            </a>
            <NuxtLink to="/contact" class="btn btn-outline-light btn-lg px-5">
              Book a Call
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO
useHead({
  title: 'Careers | Gamma Neutral Consulting',
  meta: [
    {
      name: 'description',
      content: 'Join Gamma Neutral Consulting. We are building a team of experienced consultants in data engineering, ML operations, cloud architecture, and cybersecurity.'
    },
    {
      name: 'keywords',
      content: 'Gamma Neutral careers, Toronto tech jobs, data engineering careers, AI consulting jobs'
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
  background-color: var(--bs-body-bg, #ffffff);
  color: var(--bs-body-color, inherit);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
}
</style>
