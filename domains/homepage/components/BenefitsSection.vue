<template>
  <!-- Benefits Section - SaaS Style -->
  <section class="py-5 position-relative overflow-hidden">
    <div class="container py-4">
      <div class="row align-items-center">
        <!-- Left Content -->
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="pe-lg-5">
            <h2 class="display-5 fw-bold mb-4">
              Why teams choose
              <span class="text-primary">Gamma Neutral</span>
            </h2>
            <p class="lead text-muted mb-5">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
            </p>

            <!-- Benefits List using BenefitCard -->
            <div class="row g-4">
              <div class="col-sm-6" v-for="benefit in benefits" :key="benefit.title">
                <BenefitCard
                  :title="benefit.title"
                  :description="benefit.description"
                  :icon="benefit.icon"
                  :iconColor="benefit.iconColor"
                />
              </div>
            </div>

            <!-- CTA -->
            <div class="mt-5">
              <a href="/contact" class="btn btn-primary btn-lg me-3">
                Schedule Consultation
                <i class="bi bi-arrow-right ms-2"></i>
              </a>
              <a href="/about" class="btn btn-link text-primary text-decoration-none">
                Learn more about us
                <i class="bi bi-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Visual — Consulting Approach -->
        <div class="col-lg-6">
          <div class="position-relative">
            <div class="card border-0 shadow-lg">
              <div class="card-body p-5">
                <div class="d-flex align-items-center mb-4">
                  <div class="avatar-circle bg-primary text-white me-3">
                    <i class="bi bi-award fs-4"></i>
                  </div>
                  <div>
                    <h6 class="mb-0">Our Consulting Approach</h6>
                    <small class="text-muted">What sets us apart</small>
                  </div>
                </div>

                <!-- Service Icons -->
                <div class="chart-container bg-light rounded p-3 mb-4">
                  <div class="d-flex align-items-end justify-content-around" style="height: 120px;">
                    <div class="text-center">
                      <i class="bi bi-cpu fs-3 text-primary"></i>
                      <div class="small text-muted mt-1">AI</div>
                    </div>
                    <div class="text-center">
                      <i class="bi bi-database fs-3 text-info"></i>
                      <div class="small text-muted mt-1">Data</div>
                    </div>
                    <div class="text-center">
                      <i class="bi bi-cloud fs-3 text-success"></i>
                      <div class="small text-muted mt-1">Cloud</div>
                    </div>
                    <div class="text-center">
                      <i class="bi bi-shield-check fs-3 text-danger"></i>
                      <div class="small text-muted mt-1">Security</div>
                    </div>
                    <div class="text-center">
                      <i class="bi bi-diagram-3 fs-3 text-warning"></i>
                      <div class="small text-muted mt-1">BI</div>
                    </div>
                  </div>
                </div>

                <!-- Focus Areas -->
                <p class="text-muted mb-0">
                  We focus on regulated, data-intensive industries: financial services, healthcare, and government &mdash; where engineering rigour matters most.
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

const benefits = [
  {
    title: 'Expert Team',
    description: 'Certified data professionals with proven expertise',
    icon: 'bi-people',
    iconColor: 'success'
  },
  {
    title: 'Tailored Solutions',
    description: 'Custom strategies designed for your specific needs',
    icon: 'bi-gear',
    iconColor: 'primary'
  },
  {
    title: 'Industry Expertise',
    description: 'Deep knowledge across banking, healthcare, and more',
    icon: 'bi-building',
    iconColor: 'warning'
  },
  {
    title: 'Proven Methodologies',
    description: 'Structured 5-step approach to deliver results',
    icon: 'bi-clipboard-check',
    iconColor: 'info'
  }
]
</script>

<style scoped>
/* Avatar Circle */
.avatar-circle {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Button Styles */
.btn-primary {
  background-color: #000000;
  border: none;
  font-weight: 600;
  transition: all 0.3s ease;
  padding: 12px 28px;
  border-radius: 8px;
}

.btn-primary:hover {
  background-color: #1a1a1a;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

/* Card Shadow */
.shadow-lg {
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1) !important;
}

/* Responsive */
@media (max-width: 768px) {
  .display-5 {
    font-size: 2rem;
  }

  .lead {
    font-size: 1.1rem;
  }
}
</style>
