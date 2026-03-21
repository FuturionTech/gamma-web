<template>
  <!-- Services Grid Section -->
  <section class="py-5 my-5">
    <div class="container">
      <!-- Loading State -->
      <div v-if="homepageStore.loadingServices" class="row g-4">
        <div class="col-lg-4 col-md-6" v-for="n in 6" :key="n">
          <div class="card h-100 p-4 rounded-4 border-0 shadow-sm">
            <div class="placeholder-glow">
              <div class="placeholder bg-secondary rounded-3 mb-4" style="width: 64px; height: 64px;"></div>
              <div class="placeholder bg-secondary col-8 mb-3" style="height: 24px;"></div>
              <div class="placeholder bg-secondary col-12 mb-2" style="height: 16px;"></div>
              <div class="placeholder bg-secondary col-10 mb-4" style="height: 16px;"></div>
              <div class="placeholder bg-secondary col-6 mb-2" style="height: 14px;"></div>
              <div class="placeholder bg-secondary col-7 mb-2" style="height: 14px;"></div>
              <div class="placeholder bg-secondary col-5" style="height: 14px;"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Services Grid -->
      <div v-else class="row g-4">
        <div class="col-lg-4 col-md-6" v-for="service in displayServices" :key="service.title">
          <ServiceCard
            :title="service.title"
            :description="service.description"
            :features="service.features"
            :icon="service.icon"
            :gradientClass="service.gradientClass"
            :link="service.link"
          />
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-5">
        <a href="/services" class="btn btn-primary btn-lg px-5 py-3 rounded-pill">
          View All Services
          <i class="bi bi-arrow-right ms-2"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import ServiceCard from '~/components/shared/cards/ServiceCard.vue'
import { useHomepageStore } from '~/domains/homepage/stores/useHomepageStore'

const homepageStore = useHomepageStore()

// Icon-to-gradient mapping for API services
const iconGradientMap = {
  brain: 'bg-gradient-primary',
  database: 'bg-gradient-info',
  cloud: 'bg-gradient-success',
  shield: 'bg-gradient-danger',
  chart: 'bg-gradient-warning',
  server: 'bg-gradient-purple',
}

// Bootstrap icon mapping from API icon names
const iconBootstrapMap = {
  brain: 'bi bi-cpu',
  database: 'bi bi-database',
  cloud: 'bi bi-cloud',
  shield: 'bi bi-shield-check',
  chart: 'bi bi-bar-chart',
  server: 'bi bi-hdd-stack',
}

// Static fallback data
const staticServices = [
  {
    title: 'Artificial Intelligence',
    description: 'Comprehensive AI solutions spanning machine learning, deep learning, NLP, computer vision, and algorithm development.',
    features: ['Machine Learning', 'Deep Learning', 'Natural Language Processing'],
    icon: 'bi bi-cpu',
    gradientClass: 'bg-gradient-primary',
    link: '/services'
  },
  {
    title: 'Data Engineering',
    description: 'Build robust data pipelines and architectures that ensure seamless data flow across your organization.',
    features: ['ETL/ELT Pipelines', 'Real-time Processing', 'Data Lake Design'],
    icon: 'bi bi-database',
    gradientClass: 'bg-gradient-info',
    link: '/services'
  },
  {
    title: 'Cloud Computing',
    description: 'Migrate and optimize your infrastructure with scalable cloud solutions from AWS, Azure, and GCP.',
    features: ['Cloud Migration', 'Serverless Architecture', 'Cost Optimization'],
    icon: 'bi bi-cloud',
    gradientClass: 'bg-gradient-success',
    link: '/services'
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your data assets with enterprise-grade security solutions and compliance frameworks.',
    features: ['Threat Detection', 'Compliance Management', '24/7 Monitoring'],
    icon: 'bi bi-shield-check',
    gradientClass: 'bg-gradient-danger',
    link: '/services'
  },
  {
    title: 'Business Intelligence',
    description: 'Transform raw data into actionable insights with interactive dashboards and reports.',
    features: ['Interactive Dashboards', 'KPI Monitoring', 'Strategic Reporting'],
    icon: 'bi bi-bar-chart',
    gradientClass: 'bg-gradient-warning',
    link: '/services'
  },
  {
    title: 'Big Data Solutions',
    description: 'Process and analyze massive datasets with distributed computing and advanced analytics.',
    features: ['Distributed Processing', 'Spark & Hadoop', 'Data Lake Solutions'],
    icon: 'bi bi-hdd-stack',
    gradientClass: 'bg-gradient-purple',
    link: '/services'
  }
]

// Prefer API data, fall back to static
const displayServices = computed(() => {
  if (homepageStore.services.length > 0) {
    return homepageStore.services.map(s => ({
      title: s.title,
      description: s.short_description || s.description,
      features: s.features.map(f => f.title),
      icon: iconBootstrapMap[s.icon] || 'bi bi-gear',
      gradientClass: iconGradientMap[s.icon] || 'bg-gradient-primary',
      link: '/services',
    }))
  }
  return staticServices
})
</script>

<style scoped>
/* Button Primary */
.btn-primary {
  background-color: #000000;
  border: none;
  font-weight: 600;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

/* Utilities */
.rounded-4 {
  border-radius: 1rem !important;
}
</style>
