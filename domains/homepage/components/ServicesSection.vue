<template>
  <!-- Services Grid Section -->
  <section class="py-5">
    <div class="container">
      <!-- Loading State -->
      <div v-if="homepageStore.loadingServices" class="row g-4">
        <div class="col-lg-4 col-md-6" v-for="n in 3" :key="n">
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
        <div class="col-lg-4 col-md-6" v-for="(service, index) in displayServices" :key="service.title">
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
      <div class="text-center mt-4 pt-2">
        <NuxtLink to="/services" class="btn btn-outline-primary btn-lg px-4 py-2 rounded-pill">
          View All Services
          <i class="bi bi-arrow-right ms-2"></i>
        </NuxtLink>
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

// Static fallback data — top 3 services for homepage
const staticServices = [
  {
    title: 'Artificial Intelligence',
    description: 'We build AI systems that move past the pilot stage — from fraud detection to patient risk scoring — delivering measurable outcomes in production.',
    features: ['Custom ML model development', 'NLP and document intelligence', 'MLOps and model monitoring'],
    icon: 'bi bi-cpu',
    gradientClass: 'bg-gradient-primary',
    link: '/services'
  },
  {
    title: 'Data Engineering',
    description: 'The foundation of every data initiative is reliable, well-governed data. We build the pipelines and architectures that turn siloed information into a unified asset.',
    features: ['ETL/ELT pipeline design', 'Data warehouse/lakehouse architecture', 'Data quality frameworks'],
    icon: 'bi bi-database',
    gradientClass: 'bg-gradient-info',
    link: '/services'
  },
  {
    title: 'Cloud Computing',
    description: 'We help organizations move to the cloud with a strategy that balances performance, cost, and compliance across AWS, Azure, and GCP.',
    features: ['Cloud migration strategy', 'Infrastructure as code', 'Cost optimization and FinOps'],
    icon: 'bi bi-cloud',
    gradientClass: 'bg-gradient-success',
    link: '/services'
  }
]

// Prefer API data (top 3), fall back to static
const displayServices = computed(() => {
  if (homepageStore.services.length > 0) {
    return homepageStore.services.slice(0, 3).map(s => ({
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
