<template>
  <div class="privacy-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-gradient py-5">
        <div class="container" style="padding-top: 80px;">
          <nav aria-label="breadcrumb" class="mb-3">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><NuxtLink to="/" class="text-white text-opacity-75">{{ $t('breadcrumbs.home') }}</NuxtLink></li>
              <li class="breadcrumb-item active text-white">{{ $t('privacy.breadcrumb') }}</li>
            </ol>
          </nav>
          <h1 class="display-4 fw-bold text-white">{{ $t('privacy.pageTitle') }}</h1>
          <p class="text-white text-opacity-75 lead mb-0">{{ $t('privacy.effectiveDate') }}</p>
        </div>
      </div>
    </section>

    <!-- Main Content — locale-specific -->
    <section class="content-section">
      <div class="container">
        <div class="content-wrapper">
          <component :is="contentComponent" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '#imports'
import PrivacyContentEn from '~/domains/privacy-policy/components/PrivacyContentEn.vue'
import PrivacyContentFr from '~/domains/privacy-policy/components/PrivacyContentFr.vue'

const { locale } = useI18n()

// Pick content component based on active locale
const contentComponent = computed(() =>
  locale.value === 'fr' ? PrivacyContentFr : PrivacyContentEn
)

useHead(() => ({
  title: locale.value === 'fr'
    ? 'Politique de confidentialité - Gamma Neutral Consulting'
    : 'Privacy Policy - Gamma Neutral Consulting',
  meta: [
    {
      name: 'description',
      content:
        locale.value === 'fr'
          ? "Politique de confidentialité de Gamma Neutral Consulting Inc. Découvrez comment nous recueillons, utilisons et protégeons vos renseignements personnels conformément à la LPRPDE et aux lois canadiennes sur la protection de la vie privée."
          : 'Privacy Policy for Gamma Neutral Consulting Inc. Learn how we collect, use, and protect your personal information in compliance with PIPEDA and Canadian privacy laws.',
    },
    { name: 'author', content: 'Gamma Neutral Consulting Inc.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'robots', content: 'index, follow' },
  ],
}))

usePageSeo({
  title: locale.value === 'fr' ? 'Politique de confidentialité | Gamma Neutral' : 'Privacy Policy | Gamma Neutral Consulting',
  description: locale.value === 'fr' ? 'Politique de confidentialité de Gamma Neutral Consulting Inc.' : 'Privacy Policy for Gamma Neutral Consulting Inc. PIPEDA and Canadian privacy laws.',
  path: '/privacy-policy',
})
</script>

<style lang="scss">
@use '~/domains/privacy-policy/styles/legal-page.scss';
</style>
