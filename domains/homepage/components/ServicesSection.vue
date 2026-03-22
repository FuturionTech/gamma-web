<template>
  <!-- Services Grid Section -->
  <section class="py-5">
    <div class="container">
      <!-- Loading State -->
      <div v-if="homepageStore.loadingServices" class="row g-4">
        <div class="col-lg-4 col-md-6" v-for="n in 6" :key="n">
          <div class="card h-100 p-4 rounded-4 border-0 shadow-sm">
            <div class="placeholder-glow">
              <div class="placeholder bg-secondary rounded-circle mb-3" style="width: 56px; height: 56px;"></div>
              <div class="placeholder bg-secondary col-8 mb-3" style="height: 20px;"></div>
              <div class="placeholder bg-secondary col-12 mb-2" style="height: 14px;"></div>
              <div class="placeholder bg-secondary col-10 mb-2" style="height: 14px;"></div>
              <div class="placeholder bg-secondary col-8 mb-4" style="height: 14px;"></div>
              <div class="placeholder bg-secondary col-6 mb-2" style="height: 12px;"></div>
              <div class="placeholder bg-secondary col-7 mb-2" style="height: 12px;"></div>
              <div class="placeholder bg-secondary col-5" style="height: 12px;"></div>
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
      <div class="text-center mt-5">
        <NuxtLink to="/services" class="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-semibold">
          {{ t('services.viewAll') }}
          <i class="bi bi-arrow-right ms-2"></i>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ServiceCard from '~/components/shared/cards/ServiceCard.vue'
import { useHomepageStore } from '~/domains/homepage/stores/useHomepageStore'

const { t, tm, locale } = useI18n()
const homepageStore = useHomepageStore()

// Icon-to-gradient mapping for API services
const iconGradientMap: Record<string, string> = {
  brain: 'bg-gradient-primary',
  database: 'bg-gradient-info',
  cloud: 'bg-gradient-success',
  shield: 'bg-gradient-danger',
  chart: 'bg-gradient-warning',
  server: 'bg-gradient-purple',
}

// Bootstrap icon mapping from API icon names
const iconBootstrapMap: Record<string, string> = {
  brain: 'bi bi-cpu',
  database: 'bi bi-database',
  cloud: 'bi bi-cloud',
  shield: 'bi bi-shield-check',
  chart: 'bi bi-bar-chart',
  server: 'bi bi-hdd-stack',
}

// Service translation keys mapped to icons/gradients (i18n fallback)
const serviceKeys = ['ai', 'dataEngineering', 'cloud', 'cybersecurity', 'bi', 'bigData'] as const
const serviceIcons: Record<string, string> = {
  ai: 'bi bi-cpu',
  dataEngineering: 'bi bi-database',
  cloud: 'bi bi-cloud',
  cybersecurity: 'bi bi-shield-check',
  bi: 'bi bi-bar-chart',
  bigData: 'bi bi-hdd-stack',
}
const serviceGradients: Record<string, string> = {
  ai: 'bg-gradient-primary',
  dataEngineering: 'bg-gradient-info',
  cloud: 'bg-gradient-success',
  cybersecurity: 'bg-gradient-danger',
  bi: 'bg-gradient-warning',
  bigData: 'bg-gradient-purple',
}

// Re-fetch when locale changes — the Accept-Language header
// in useGraphql picks up the new locale automatically
watch(locale, () => {
  homepageStore.fetchServices(6)
})

// Prefer API data (top 6), fall back to i18n static
const displayServices = computed(() => {
  if (homepageStore.services.length > 0) {
    return homepageStore.services.slice(0, 6).map(s => ({
      title: s.title,
      description: s.short_description || s.description,
      features: s.features.map(f => f.title),
      icon: iconBootstrapMap[s.icon ?? ''] || 'bi bi-gear',
      gradientClass: iconGradientMap[s.icon ?? ''] || 'bg-gradient-primary',
      link: '',
    }))
  }
  return serviceKeys.map(key => ({
    title: t(`services.${key}.title`),
    description: t(`services.${key}.description`),
    features: tm(`services.${key}.features`) as string[],
    icon: serviceIcons[key],
    gradientClass: serviceGradients[key],
    link: '',
  }))
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
