<template>
  <!-- Industries Section - Clean Modern Design -->
  <section class="py-5 bg-light">
    <div class="container py-4">
      <!-- Loading State -->
      <div v-if="loading" class="row g-4">
        <div class="col-md-6 col-lg-4" v-for="n in 6" :key="n">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4 placeholder-glow">
              <div class="placeholder bg-secondary rounded-circle mb-3" style="width: 56px; height: 56px;"></div>
              <div class="placeholder bg-secondary col-8 mb-2" style="height: 20px;"></div>
              <div class="placeholder bg-secondary col-12 mb-1" style="height: 14px;"></div>
              <div class="placeholder bg-secondary col-10" style="height: 14px;"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Industries Grid using IndustryCard -->
      <div v-else class="row g-4">
        <div class="col-md-6 col-lg-4" v-for="industry in displayIndustries" :key="industry.title">
          <IndustryCard
            :title="industry.title"
            :description="industry.description"
            :icon="industry.icon"
            :iconColor="industry.iconColor"
            :link="industry.link"
            linkText="Learn more"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import IndustryCard from '~/components/shared/cards/IndustryCard.vue'
import { useSolutionsStore } from '~/domains/solutions/stores/useSolutionsStore'

const solutionsStore = useSolutionsStore()

// Fetch solutions if not already loaded
onMounted(async () => {
  if (solutionsStore.solutions.length === 0) {
    await solutionsStore.fetchSolutions(10)
  }
})

const loading = computed(() => solutionsStore.loading && solutionsStore.solutions.length === 0)

// Map solution slugs to icons/colors
const solutionIconMap = {
  'financial-services': { icon: 'bi-bank', iconColor: 'primary' },
  'healthcare-analytics': { icon: 'bi-heart-pulse', iconColor: 'success' },
  'smart-government': { icon: 'bi-shield-check', iconColor: 'info' },
  'retail-intelligence': { icon: 'bi-bar-chart', iconColor: 'warning' },
  'manufacturing-4-0': { icon: 'bi-gear', iconColor: 'secondary' },
  'education-analytics': { icon: 'bi-mortarboard', iconColor: 'danger' },
}

// Static fallback
const staticIndustries = [
  {
    title: 'Banks & Financial Services',
    description: 'Enhancing data security and analytics for better financial decision-making with AI-powered risk modeling and fraud detection.',
    icon: 'bi-bank',
    iconColor: 'primary',
    link: '/solutions/financial-services'
  },
  {
    title: 'Healthcare Services',
    description: 'Developing AI and big data solutions to improve patient care and operational efficiency while maintaining HIPAA compliance.',
    icon: 'bi-heart-pulse',
    iconColor: 'success',
    link: '/solutions/healthcare-analytics'
  },
  {
    title: 'Governments & Public Services',
    description: 'Building secure data infrastructures for public sector organizations with smart city initiatives and citizen service optimization.',
    icon: 'bi-shield-check',
    iconColor: 'info',
    link: '/solutions/smart-government'
  },
  {
    title: 'Retail & Business',
    description: 'Implementing BI tools to streamline operations and improve efficiency with data-driven decision-making and process optimization.',
    icon: 'bi-bar-chart',
    iconColor: 'warning',
    link: '/solutions/retail-intelligence'
  },
  {
    title: 'Manufacturing 4.0',
    description: 'Providing IoT and AI solutions for predictive maintenance, supply chain optimization, and quality control.',
    icon: 'bi-gear',
    iconColor: 'secondary',
    link: '/solutions/manufacturing-4-0'
  },
  {
    title: 'Education & Training',
    description: 'Developing AI-driven platforms for personalized learning experiences with student performance analytics and adaptive learning paths.',
    icon: 'bi-mortarboard',
    iconColor: 'danger',
    link: '/solutions/education-analytics'
  }
]

const displayIndustries = computed(() => {
  if (solutionsStore.solutions.length > 0) {
    return solutionsStore.solutions.map(s => {
      const mapping = solutionIconMap[s.slug] || { icon: 'bi-info-circle', iconColor: 'primary' }
      return {
        title: s.title,
        description: s.description.substring(0, 150) + (s.description.length > 150 ? '...' : ''),
        icon: mapping.icon,
        iconColor: mapping.iconColor,
        link: `/solutions/${s.slug}`,
      }
    })
  }
  return staticIndustries
})
</script>

<style scoped>
/* No custom styles needed - all handled by IndustryCard component */
</style>
