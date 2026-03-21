<template>
  <!-- Industries Section - Clean Modern Design -->
  <section class="py-5 bg-light">
    <div class="container py-4">
      <!-- Loading State -->
      <div v-if="loading" class="row g-4">
        <div class="col-md-6 col-lg-4" v-for="n in 3" :key="n">
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
        <div class="col-md-6 col-lg-4" v-for="(industry, index) in displayIndustries" :key="industry.title">
          <IndustryCard
            :title="industry.title"
            :description="industry.description"
            :icon="industry.icon"
            :iconColor="industry.iconColor"
            :link="industry.link"
            linkText="Talk to a Specialist"
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

// Primary industry slugs to show
const primarySlugs = ['financial-services', 'healthcare-analytics', 'smart-government']

// Static fallback — 3 primary industries with honest framing
const staticIndustries = [
  {
    title: 'Financial Services',
    description: 'We work with banks, insurance companies, and investment firms to build AI-powered risk models, modernize legacy data infrastructure, and meet regulatory requirements from OSFI and PIPEDA.',
    icon: 'bi-bank',
    iconColor: 'primary',
    link: '/solutions/financial-services'
  },
  {
    title: 'Healthcare',
    description: 'We are building capabilities in health data interoperability, patient analytics, and PHIPA-compliant data architectures for Canadian healthcare organizations.',
    icon: 'bi-heart-pulse',
    iconColor: 'success',
    link: '/solutions/healthcare-analytics'
  },
  {
    title: 'Government & Public Sector',
    description: 'We help government agencies modernize data infrastructure, implement secure cloud environments, and build analytics platforms that support evidence-based policy decisions.',
    icon: 'bi-shield-check',
    iconColor: 'info',
    link: '/solutions/smart-government'
  }
]

const displayIndustries = computed(() => {
  if (solutionsStore.solutions.length > 0) {
    // Filter to primary industries only
    const filtered = solutionsStore.solutions.filter(s => primarySlugs.includes(s.slug))
    if (filtered.length > 0) {
      return filtered.map(s => {
        const mapping = solutionIconMap[s.slug] || { icon: 'bi-info-circle', iconColor: 'primary' }
        // Use static description if available (they're better), else API
        const staticMatch = staticIndustries.find(si => si.link === `/solutions/${s.slug}`)
        return {
          title: s.title,
          description: staticMatch?.description || s.description.substring(0, 200),
          icon: mapping.icon,
          iconColor: mapping.iconColor,
          link: `/solutions/${s.slug}`,
        }
      })
    }
  }
  return staticIndustries
})
</script>

<style scoped>
/* No custom styles needed - all handled by IndustryCard component */
</style>
