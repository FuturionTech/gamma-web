<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-dark position-relative py-5">
      <div class="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100" style="background-color: rgba(255,255,255, .03);"></div>
      <div class="container position-relative z-2 py-5">
        <div class="row">
          <div class="col-lg-10 col-xl-9">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb">
              <ol class="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
                <li class="breadcrumb-item">
                  <NuxtLink to="/" class="text-white-50">Home</NuxtLink>
                </li>
                <li class="breadcrumb-item">
                  <NuxtLink to="/about" class="text-white-50">About</NuxtLink>
                </li>
                <li class="breadcrumb-item text-white active" aria-current="page">Leadership Team</li>
              </ol>
            </nav>

            <h1 class="display-2 text-white pb-2 pb-sm-3">Meet Our Leadership</h1>
            <p class="fs-lg text-white-50 pb-4 mb-0" style="max-width: 700px;">
              Dedicated to delivering data-driven solutions and helping businesses unlock the potential of their data.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Profile -->
    <section class="container py-5">
      <div class="row justify-content-center py-lg-4">
        <div class="col-lg-8" v-for="member in displayMembers" :key="member.id">
          <div class="card border-0 shadow-sm">
            <div class="row g-0 align-items-center">
              <div class="col-md-4 text-center p-4">
                <img
                  :src="member.image"
                  :alt="member.name"
                  class="rounded-circle img-fluid shadow"
                  style="width: 200px; height: 200px; object-fit: cover;"
                  onerror="this.src='/assets/img/team/placeholder.jpg'"
                >
              </div>
              <div class="col-md-8">
                <div class="card-body p-4">
                  <h4 class="card-title mb-1">{{ member.name }}</h4>
                  <p class="text-primary fw-semibold mb-3">{{ member.role }}</p>
                  <p class="text-muted mb-3">{{ member.bio }}</p>

                  <!-- Social links -->
                  <div class="d-flex gap-2">
                    <a v-if="member.socialLinks?.linkedin" :href="member.socialLinks.linkedin" target="_blank"
                       class="btn btn-sm btn-outline-primary btn-icon rounded-circle">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Culture Section -->
    <section class="py-5 bg-light">
      <div class="container py-lg-4">
        <div class="text-center mb-5">
          <div class="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 mb-3">OUR CULTURE</div>
          <h2 class="display-6 mb-3">What makes us unique</h2>
          <p class="fs-lg text-muted mx-auto" style="max-width: 700px;">
            We foster a culture of innovation, collaboration, and continuous learning where every team member contributes to our collective success.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-3">
            <div class="text-center">
              <div class="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle mb-3" style="width: 72px; height: 72px;">
                <i class="bi bi-mortarboard text-primary fs-3"></i>
              </div>
              <h5 class="mb-2">Continuous Learning</h5>
              <p class="text-muted fs-sm">
                Regular training and development programs to stay ahead of industry trends
              </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="text-center">
              <div class="d-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-circle mb-3" style="width: 72px; height: 72px;">
                <i class="bi bi-globe text-success fs-3"></i>
              </div>
              <h5 class="mb-2">Global Perspective</h5>
              <p class="text-muted fs-sm">
                Diverse backgrounds bringing unique insights and approaches
              </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="text-center">
              <div class="d-inline-flex align-items-center justify-content-center bg-warning bg-opacity-10 rounded-circle mb-3" style="width: 72px; height: 72px;">
                <i class="bi bi-heart text-warning fs-3"></i>
              </div>
              <h5 class="mb-2">Work-Life Balance</h5>
              <p class="text-muted fs-sm">
                Flexible arrangements supporting personal and professional growth
              </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="text-center">
              <div class="d-inline-flex align-items-center justify-content-center bg-info bg-opacity-10 rounded-circle mb-3" style="width: 72px; height: 72px;">
                <i class="bi bi-rocket-takeoff text-info fs-3"></i>
              </div>
              <h5 class="mb-2">Innovation First</h5>
              <p class="text-muted fs-sm">
                Encouraging creative thinking and experimentation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Join Team CTA -->
    <section class="container py-5">
      <div class="card border-0 bg-primary bg-gradient text-white p-5">
        <div class="card-body text-center">
          <h2 class="display-6 text-white mb-3">Join Our Team</h2>
          <p class="fs-lg text-white-50 mb-4 mx-auto" style="max-width: 600px;">
            We're always looking for talented individuals who share our passion for data and innovation.
            Explore opportunities to grow your career with us.
          </p>
          <NuxtLink to="/careers" class="btn btn-light btn-lg px-5">
            View Open Positions
            <i class="bi bi-arrow-right ms-2"></i>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { teamMembers } from '~/domains/aboutus/data/team'

const displayMembers = teamMembers

// SEO
useHead({
  title: 'Leadership Team - Gamma Neutral',
  meta: [
    {
      name: 'description',
      content: 'Meet the leadership team at Gamma Neutral - experienced data scientists, engineers, and business leaders driving innovation in analytics and AI.'
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
  box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
}

/* Button icon styles */
.btn-icon {
  width: 32px;
  height: 32px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-icon i {
  font-size: 0.875rem;
}
</style>