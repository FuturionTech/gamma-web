<template>
  <div>
    <section class="container py-5">
      <nav aria-label="breadcrumb" class="mt-3">
        <ol class="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
          <li class="breadcrumb-item"><NuxtLink to="/">{{ $t('breadcrumbs.home') }}</NuxtLink></li>
          <li class="breadcrumb-item active" aria-current="page">{{ $t('breadcrumbs.privicy-policy') }}</li>
        </ol>
      </nav>

      <h1 class="text-center">{{ $t('privacyPolicy.title') }}</h1>
      <p class="text-center mb-5">{{ $t('privacyPolicy.subtitle') }}</p>

      <div class="mb-4">
        <h2>{{ $t('privacyPolicy.section1.title') }}</h2>
        <p>{{ $t('privacyPolicy.section1.content') }}</p>
      </div>

      <div class="mb-4">
        <h2>{{ $t('privacyPolicy.section2.title') }}</h2>
        <p>{{ $t('privacyPolicy.section2.content') }}</p>
      </div>

      <div class="mb-4">
        <h2>{{ $t('privacyPolicy.section3.title') }}</h2>
        <p>{{ $t('privacyPolicy.section3.content') }}</p>
      </div>

      <div class="mb-4">
        <h2>{{ $t('privacyPolicy.section4.title') }}</h2>
        <p>{{ $t('privacyPolicy.section4.content') }}</p>
      </div>

      <div class="mb-4">
        <h2>{{ $t('privacyPolicy.section5.title') }}</h2>
        <p>{{ $t('privacyPolicy.section5.content') }}</p>
      </div>

      <div class="mb-4">
        <h2>{{ $t('privacyPolicy.section6.title') }}</h2>
        <p>{{ $t('privacyPolicy.section6.content') }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from '#imports'
const { t, locale } = useI18n();

useHead({
  title: t('meta.qhse.title'),
  meta: [
    { name: 'description', content: t('meta.qhse.description') },
    { name: 'keywords', content: t('meta.qhse.keywords') },
    { name: 'author', content: 'COBUTAM' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ]
})


</script>

<style scoped>
h1 {
  font-size: 2.5rem;
  font-weight: bold;
}
h2 {
  font-size: 1.75rem;
  margin-top: 1rem;
}
p {
  font-size: 1rem;
  line-height: 1.6;
}
</style>
