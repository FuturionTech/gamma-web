<template>
  <!-- Industries Section - Static Data -->
  <section class="py-5 bg-light">
    <div class="container py-4">
      <div class="row g-4">
        <div class="col-md-6 col-lg-4" v-for="industry in industries" :key="industry.title">
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

const industries = [
  {
    title: 'Financial Services',
    description: 'Enhancing data security and analytics for better financial decision-making. We work with banks, insurance companies, and investment firms to build AI-powered risk models and meet regulatory requirements from OSFI and PIPEDA.',
    icon: 'bi-bank',
    iconColor: 'primary',
    link: '/contact?industry=financial-services'
  },
  {
    title: 'Healthcare',
    description: 'Developing AI and data solutions to improve patient care and operational efficiency. We are building capabilities in health data interoperability, patient analytics, and PHIPA-compliant data architectures.',
    icon: 'bi-heart-pulse',
    iconColor: 'success',
    link: '/contact?industry=healthcare'
  },
  {
    title: 'Government & Public Sector',
    description: 'Building secure data infrastructures for public sector organizations. We help government agencies modernize data infrastructure, implement secure cloud environments, and build analytics platforms for evidence-based decisions.',
    icon: 'bi-shield-check',
    iconColor: 'info',
    link: '/contact?industry=government'
  }
]
</script>

<style scoped>
/* Dark mode support for section background */
:global([data-bs-theme="dark"]) .bg-light {
  background-color: rgba(255, 255, 255, 0.03) !important;
}
</style>
