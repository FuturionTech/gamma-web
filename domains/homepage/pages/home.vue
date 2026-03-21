<template>
  <div class="homepage">
    <!-- Hero Section - Full viewport -->
    <HeroSection/>

    <!-- Technologies Trust Bar -->
    <TechPartnersBar/>

    <!-- Core Services - Professional spacing -->
    <div data-aos="fade-up">
      <SectionWrapper
        spacing="lg"
        backgroundColor="transparent"
        has-header
        header-width="lg"
        :debug-mode="debugMode"
      >
        <template #header>
          <h2 class="h1 mb-4">What We Do</h2>
          <p class="fs-lg text-muted mb-0">
            Focused consulting in AI, data engineering, and cloud — from strategy to production
          </p>
        </template>
        <ServicesSection/>
      </SectionWrapper>
    </div>

    <!-- Benefits Section - Light background -->
    <div data-aos="fade-up">
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
            Experience the advantages of working with a dedicated data consulting firm
          </p>
        </template>
        <BenefitsSection/>
      </SectionWrapper>
    </div>

    <!-- Statistics section removed - company is newly incorporated -->

    <!-- Our Process - Clean white -->
    <div data-aos="fade-up">
      <ProcessSection/>
    </div>

    <!-- Industries We Serve - Subtle background -->
    <div data-aos="fade-up">
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
    </div>

    <!-- Final Call to Action -->
    <div data-aos="fade-up">
      <CTASection/>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '#imports'
import { ref, onMounted, onUnmounted } from 'vue'
import { useHomepageStore } from '~/domains/homepage/stores/useHomepageStore'

const { t, locale } = useI18n();
const homepageStore = useHomepageStore()

// Fetch all homepage data from GraphQL in parallel
onMounted(() => {
  homepageStore.fetchAll()
})

// Debug mode for development - helps identify empty sections
const debugMode = ref(false)

// Toggle debug mode for development (remove in production)
if (process.env.NODE_ENV === 'development') {
  // Add keyboard shortcut for debug toggle
  onMounted(() => {
    const handleKeydown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        debugMode.value = !debugMode.value
        // Debug mode toggled
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