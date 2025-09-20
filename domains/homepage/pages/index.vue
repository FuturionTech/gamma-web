<template>
  <div class="homepage">
    <!-- Hero Section - Full viewport -->
    <HeroSection/>

    <!-- Core Services - Professional spacing -->
    <SectionWrapper
      spacing="lg"
      backgroundColor="transparent"
      has-header
      header-width="lg"
      :debug-mode="debugMode"
    >
      <template #header>
        <h2 class="h1 mb-4">Our Core Services</h2>
        <p class="fs-lg text-muted mb-0">
          Transform your business with our comprehensive data solutions
        </p>
      </template>
      <ServicesSection/>
    </SectionWrapper>

    <!-- Benefits Section - Light background -->
    <SectionWrapper
      spacing="lg"
      backgroundColor="light"
      has-header
      header-width="lg"
      :debug-mode="debugMode"
    >
      <template #header>
        <h2 class="h1 mb-4">Why Choose Gamma Neutral</h2>
        <p class="fs-lg text-muted mb-0">
          Experience the advantages of working with Canada's leading data consulting firm
        </p>
      </template>
      <BenefitsSection/>
    </SectionWrapper>

    <!-- Statistics & Impact - Dark theme -->
    <SectionWrapper
      spacing="lg"
      backgroundColor="primary"
      has-header
      header-width="lg"
      :debug-mode="debugMode"
    >
      <template #header>
        <h2 class="h1 mb-4 text-white">Our Impact in Numbers</h2>
        <p class="fs-lg text-white opacity-75 mb-0">
          Proven results that demonstrate our commitment to excellence
        </p>
      </template>
      <StatsSection/>
    </SectionWrapper>

    <!-- Our Process - Clean white -->
    <ProcessSection/>

    <!-- Industries We Serve - Subtle background -->
    <SectionWrapper
      spacing="lg"
      backgroundColor="light"
      has-header
      header-width="lg"
      :debug-mode="debugMode"
    >
      <template #header>
        <h2 class="h1 mb-4">Industries We Serve</h2>
        <p class="fs-lg text-muted mb-0">
          Specialized expertise across diverse sectors and business domains
        </p>
      </template>
      <IndustriesSection/>
    </SectionWrapper>

    <!-- Final Call to Action -->
    <CTASection/>
  </div>
</template>

<script setup>
import { useHead } from '#imports'
import { ref, onMounted, onUnmounted } from 'vue'

const { t, locale } = useI18n();

// Debug mode for development - helps identify empty sections
const debugMode = ref(false)

// Toggle debug mode for development (remove in production)
if (process.env.NODE_ENV === 'development') {
  // Add keyboard shortcut for debug toggle
  onMounted(() => {
    const handleKeydown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        debugMode.value = !debugMode.value
        console.log('Debug mode:', debugMode.value ? 'ON' : 'OFF')
      }
    }
    document.addEventListener('keydown', handleKeydown)

    onUnmounted(() => {
      document.removeEventListener('keydown', handleKeydown)
    })
  })
}

useHead({
  title: 'Gamma Neutral Consulting - Transform Your Data Into Strategic Power',
  meta: [
    { name: 'description', content: 'Leading data consulting firm specializing in AI, Machine Learning, Data Engineering, and Cloud Solutions. Transform your business with data-driven insights.' },
    { name: 'keywords', content: 'data consulting, AI, machine learning, data engineering, cloud computing, business intelligence, Toronto, Canada' },
    { name: 'author', content: 'Gamma Neutral Consulting Inc.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ]
})
</script>

<style scoped>
</style>