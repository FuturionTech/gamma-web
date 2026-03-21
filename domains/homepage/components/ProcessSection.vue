<template>
  <!-- Process Section - Clean and Simple -->
  <section class="py-5 bg-light">
    <div class="container">
      <!-- Section Header using shared component -->
      <SectionHeader
        title="Our Proven Process"
        subtitle="We follow a structured methodology to deliver exceptional results"
        headingSize="display-5"
        maxWidth="600px"
      />

      <!-- Process Steps using ProcessStepCard -->
      <div class="row g-4 mb-5">
        <div class="col-md-6 col-lg-4" v-for="(step, index) in processSteps" :key="step.title">
          <ProcessStepCard
            :stepNumber="index + 1"
            :title="step.title"
            :description="step.description"
            :items="step.items"
            :badgeColor="step.badgeColor"
          />
        </div>

        <!-- Results Card (consistent light design) -->
        <div class="col-md-6 col-lg-4">
          <div class="card h-100 border-0 shadow-sm results-card">
            <div class="card-body p-4">
              <!-- Trophy Icon -->
              <div class="d-flex align-items-center mb-3">
                <span class="badge bg-primary bg-opacity-10 text-primary rounded-circle p-3 me-3 d-flex align-items-center justify-content-center badge-icon">
                  ★
                </span>
                <h4 class="mb-0">Results</h4>
              </div>

              <!-- Description -->
              <p class="text-muted mb-3">
                Our proven process delivers:
              </p>

              <!-- Features -->
              <div class="small">
                <div class="d-flex align-items-start mb-2">
                  <span class="text-primary me-2">→</span>
                  <span>Faster Time to Market</span>
                </div>
                <div class="d-flex align-items-start mb-2">
                  <span class="text-primary me-2">→</span>
                  <span>Reduced Operational Costs</span>
                </div>
                <div class="d-flex align-items-start mb-2">
                  <span class="text-primary me-2">→</span>
                  <span>Improved Data Quality</span>
                </div>
                <div class="d-flex align-items-start">
                  <span class="text-primary me-2">→</span>
                  <span>Competitive Advantage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center">
        <a href="/contact" class="btn btn-primary btn-lg px-5 py-3">
          Start Your Data Transformation →
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '~/components/shared/sections/SectionHeader.vue'
import ProcessStepCard from '~/components/shared/cards/ProcessStepCard.vue'

const processSteps = [
  {
    title: 'Discovery',
    description: 'We begin by understanding your unique challenges, data landscape, and business objectives.',
    items: ['Requirements Analysis', 'Current State Assessment', 'Stakeholder Interviews'],
    badgeColor: 'primary'
  },
  {
    title: 'Solution Design',
    description: 'Our experts architect comprehensive solutions aligned with your goals and industry best practices.',
    items: ['Architecture Planning', 'Technology Selection', 'Roadmap Creation'],
    badgeColor: 'gradient'
  },
  {
    title: 'Development',
    description: 'Using agile methodologies, we build robust solutions with continuous testing and refinement.',
    items: ['Agile Development', 'Quality Assurance', 'CI/CD Pipeline'],
    badgeColor: 'info'
  },
  {
    title: 'Deployment',
    description: 'Seamless deployment with comprehensive training ensures your team maximizes value.',
    items: ['Production Release', 'User Training', 'Documentation'],
    badgeColor: 'warning'
  },
  {
    title: 'Support',
    description: 'Our partnership continues with dedicated support and optimization for sustained success.',
    items: ['Ongoing Monitoring', 'Performance Tuning', 'Regular Updates'],
    badgeColor: 'success'
  }
]
</script>

<style scoped>
/* Badge styling for Results card */
.badge-icon {
  width: 48px;
  height: 48px;
  font-size: 1.2rem;
  font-weight: bold;
}

/* Results card hover to match process step cards */
.results-card {
  transition: all 0.3s ease;
}

.results-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
}

/* Button hover */
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(139, 92, 246, 0.3);
}

/* Dark mode support */
:global([data-bs-theme="dark"]) .bg-light {
  background-color: rgba(255, 255, 255, 0.03) !important;
}

:global([data-bs-theme="dark"]) .results-card {
  background-color: var(--bs-body-bg) !important;
  border-color: var(--bs-border-color) !important;
}

:global([data-bs-theme="dark"]) .results-card:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4) !important;
}
</style>
