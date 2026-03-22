<template>
  <div class="homepage">
    <!-- Hero Section - Full viewport -->
    <HeroSection/>

    <!-- Core Services - Professional spacing -->
    <SectionWrapper
      id="services"
      spacing="lg"
      backgroundColor="transparent"
      has-header
      header-width="lg"
      :debug-mode="debugMode"
    >
      <template #header>
        <h2 class="h1 mb-4">{{ $t('homepage.servicesTitle') }}</h2>
        <p class="fs-lg text-muted mb-0">
          {{ $t('homepage.servicesSubtitle') }}
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
        <h2 class="h1 mb-4">{{ $t('homepage.whyChooseTitle') }}</h2>
        <p class="fs-lg text-muted mb-0">
          {{ $t('homepage.whyChooseSubtitle') }}
        </p>
      </template>
      <WhyChooseUsSection/>
    </SectionWrapper>

    <!-- Statistics section removed - company is newly incorporated -->

    <!-- Our Process - Clean white -->
    <ProcessSection/>

    <!-- Industries We Serve -->
    <SectionWrapper
      spacing="md"
      backgroundColor="light"
      has-header
      header-width="lg"
      :debug-mode="debugMode"
    >
      <template #header>
        <h2 class="h1 mb-2">{{ $t('homepage.industriesTitle') }}</h2>
        <p class="fs-lg text-muted mb-0">
          {{ $t('homepage.industriesSubtitle') }}
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
import { useHomepageStore } from '~/domains/homepage/stores/useHomepageStore'

const { t, locale } = useI18n();
const homepageStore = useHomepageStore()

// Re-fetch all homepage data when locale changes
watch(locale, () => {
  homepageStore.fetchAll()
})

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
  title: 'Gamma Neutral Consulting | AI & Data Consulting, Toronto',
  meta: [
    { name: 'description', content: 'Gamma Neutral partners with financial institutions, healthcare organizations, and government agencies to design AI systems, data architectures, and analytics platforms that deliver measurable outcomes.' },
    { name: 'keywords', content: 'AI consulting Toronto, data engineering, cloud architecture, machine learning, business intelligence, cybersecurity consulting, Canada' },
    { name: 'author', content: 'Gamma Neutral Consulting Inc.' },
  ]
})
</script>

<style scoped>
</style>