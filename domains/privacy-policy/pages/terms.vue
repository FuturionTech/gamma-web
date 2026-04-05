<template>
  <div class="privacy-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-gradient py-5">
        <div class="container" style="padding-top: 80px;">
          <nav aria-label="breadcrumb" class="mb-3">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><NuxtLink to="/" class="text-white text-opacity-75">{{ $t('breadcrumbs.home') }}</NuxtLink></li>
              <li class="breadcrumb-item active text-white">{{ $t('terms.breadcrumb') }}</li>
            </ol>
          </nav>
          <h1 class="display-4 fw-bold text-white">{{ $t('terms.pageTitle') }}</h1>
          <p class="text-white text-opacity-75 lead mb-0">{{ $t('terms.effectiveDate') }}</p>
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
import TermsContentEn from '~/domains/privacy-policy/components/TermsContentEn.vue'
import TermsContentFr from '~/domains/privacy-policy/components/TermsContentFr.vue'

const { locale } = useI18n()

// Pick content component based on active locale
const contentComponent = computed(() =>
  locale.value === 'fr' ? TermsContentFr : TermsContentEn
)

useHead(() => ({
  title: locale.value === 'fr'
    ? "Conditions d'utilisation - Gamma Neutral Consulting"
    : 'Terms and Conditions - Gamma Neutral Consulting',
  meta: [
    {
      name: 'description',
      content:
        locale.value === 'fr'
          ? "Conditions d'utilisation de Gamma Neutral Consulting Inc. Découvrez nos modalités de service, conditions de paiement, droits de propriété intellectuelle et ententes juridiques."
          : 'Terms and Conditions for Gamma Neutral Consulting Inc. Learn about our service terms, payment conditions, intellectual property rights, and legal agreements.',
    },
    { name: 'author', content: 'Gamma Neutral Consulting Inc.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'robots', content: 'index, follow' },
  ],
}))
</script>

<style lang="scss">
@use '~/domains/privacy-policy/styles/legal-page.scss';
</style>
