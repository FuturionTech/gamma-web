<template>
  <!-- Industries Section - Static Data -->
  <div class="row g-4">
    <div class="col-md-6 col-lg-4" v-for="industry in industries" :key="industry.title">
      <IndustryCard
        :title="industry.title"
        :description="industry.description"
        :icon="industry.icon"
        :iconColor="industry.iconColor"
      />
    </div>
  </div>
</template>

<script setup>
import IndustryCard from '~/components/shared/cards/IndustryCard.vue'

const industries = [
  {
    title: 'Banks & Financial Services',
    description: 'Enhancing data security and analytics for better financial decision-making.',
    icon: 'bi-bank',
    iconColor: 'primary',
  },
  {
    title: 'Healthcare Services',
    description: 'Developing AI and big data solutions to improve patient care and operational efficiency.',
    icon: 'bi-heart-pulse',
    iconColor: 'danger',
  },
  {
    title: 'Governments & Public Services',
    description: 'Building secure data infrastructures for public sector organizations.',
    icon: 'bi-building',
    iconColor: 'info',
  },
  {
    title: 'Education & Training',
    description: 'Developing AI-driven platforms for personalized learning experiences.',
    icon: 'bi-mortarboard',
    iconColor: 'success',
  },
  {
    title: 'Business Management',
    description: 'Implementing BI tools to streamline operations and improve efficiency.',
    icon: 'bi-briefcase',
    iconColor: 'warning',
  },
  {
    title: 'NGOs & Non-Profits',
    description: 'Providing data solutions to support mission-driven initiatives.',
    icon: 'bi-globe2',
    iconColor: 'secondary',
  }
]
</script>
