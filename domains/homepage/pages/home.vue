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

const homeTitle = 'Gamma Neutral Consulting | AI & Data Consulting, Toronto'
const homeDescription = 'Gamma Neutral Consulting partners with financial institutions, healthcare organizations, and government agencies to design AI systems, data architectures, and analytics platforms that deliver measurable outcomes.'
useHead({
  title: homeTitle,
  meta: [
    { name: 'description', content: homeDescription },
    { name: 'keywords', content: 'Artificial Intelligence consulting Toronto, AI consulting, data engineering, cloud architecture, machine learning, business intelligence, cybersecurity consulting, Canada' },
    { name: 'author', content: 'Gamma Neutral Consulting Inc.' },
  ],
})
usePageSeo({
  title: homeTitle,
  description: homeDescription,
  path: '/',
})

// LocalBusiness schema
const company = useCompanyInfo()
useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': 'https://gammaneutral.com/#professionalservice',
      name: company.name,
      url: 'https://gammaneutral.com',
      email: company.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: company.address.street,
        addressLocality: company.address.city,
        addressRegion: company.address.province,
        postalCode: company.address.postalCode,
        addressCountry: 'CA',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 43.7001, longitude: -79.3946 },
      areaServed: [
        { '@type': 'City', name: 'Toronto' },
        { '@type': 'AdministrativeArea', name: 'Ontario' },
        { '@type': 'Country', name: 'Canada' },
      ],
      serviceType: ['AI Consulting', 'Data Engineering', 'Cloud Architecture', 'Cybersecurity', 'Business Intelligence', 'Big Data'],
      priceRange: '$$$$',
      knowsLanguage: ['en', 'fr'],
    }),
  }],
})
</script>

<style scoped>
</style>