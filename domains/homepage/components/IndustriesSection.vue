<template>
  <!-- Industries Section - Clean Modern Design -->
  <section class="py-5 bg-light">
    <div class="container py-4">
      <!-- Industries Grid using IndustryCard -->
      <div class="row g-4">
        <div class="col-md-6 col-lg-4" v-for="industry in industries" :key="industry.title">
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

const industries = [
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
</script>

<style scoped>
/* No custom styles needed - all handled by IndustryCard component */
</style>
