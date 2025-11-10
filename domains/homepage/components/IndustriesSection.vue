<template>
  <!-- Industries Section - Clean Modern Design -->
  <section class="py-5 bg-light">
    <div class="container py-4">
      <!-- Section Header using shared component -->
      <SectionHeader
        title="Industries We Serve"
        subtitle="Specialized expertise across diverse sectors and business domains"
        headingSize="h1"
        maxWidth="700px"
      />

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
import SectionHeader from '~/components/shared/sections/SectionHeader.vue'
import IndustryCard from '~/components/shared/cards/IndustryCard.vue'

const industries = [
  {
    title: 'Banks & Financial Services',
    description: 'Enhancing data security and analytics for better financial decision-making with AI-powered risk modeling and fraud detection.',
    icon: 'bi-bank',
    iconColor: 'primary',
    link: '/industries/banking'
  },
  {
    title: 'Healthcare Services',
    description: 'Developing AI and big data solutions to improve patient care and operational efficiency while maintaining HIPAA compliance.',
    icon: 'bi-heart-pulse',
    iconColor: 'success',
    link: '/industries/healthcare'
  },
  {
    title: 'Governments & Public Services',
    description: 'Building secure data infrastructures for public sector organizations with smart city initiatives and citizen service optimization.',
    icon: 'bi-shield-check',
    iconColor: 'info',
    link: '/industries/government'
  },
  {
    title: 'Business Management',
    description: 'Implementing BI tools to streamline operations and improve efficiency with data-driven decision-making and process optimization.',
    icon: 'bi-bar-chart',
    iconColor: 'warning',
    link: '/industries/business'
  },
  {
    title: 'Non-Governmental Organizations',
    description: 'Providing data solutions to support mission-driven initiatives with impact measurement, donor analytics, and program optimization.',
    icon: 'bi-globe',
    iconColor: 'secondary',
    link: '/industries/ngo'
  },
  {
    title: 'Education & Training',
    description: 'Developing AI-driven platforms for personalized learning experiences with student performance analytics and adaptive learning paths.',
    icon: 'bi-mortarboard',
    iconColor: 'danger',
    link: '/industries/education'
  }
]
</script>

<style scoped>
/* No custom styles needed - all handled by IndustryCard component */
</style>
