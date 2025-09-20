<template>
  <div>
    <!-- Services Section -->
    <section class="container py-5 mt-5 mb-md-3 mb-lg-4 mb-xxl-5">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="mt-3">
        <ol class="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
          <li class="breadcrumb-item"><NuxtLink to="/">{{ $t('breadcrumbs.home') }}</NuxtLink></li>
          <li class="breadcrumb-item active" aria-current="page">{{ $t('breadcrumbs.services') }}</li>
        </ol>
      </nav>

      <h2 class="h1 text-center pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mt-xl-1">{{ $t('services.title') }}</h2>
      <p class="text-center pb-3 mb-3 mb-lg-4">{{ $t('services.subtitle') }}</p>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        <!-- Services -->
        <div class="col" v-for="(service, index) in services" :key="index">
          <a class="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden" href="#">
            <div
              class="card-body d-flex align-items-end position-absolute top-0 start-0 w-100 h-100 opacity-0 bg-size-cover bg-position-center pb-4"
              :style="{ backgroundImage: `url(${service.image})` }"
            >
              
            </div>
            <div class="card-body pb-3">
              <i :class="service.icon + ' display-4 text-primary mb-4'"></i>
              <h3 class="h4">{{ $t(service.titleKey) }}</h3>
              <p>{{ $t(service.descriptionKey) }}</p>
            </div>

           
          </a>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="container pb-5 mb-md-3 mb-lg-4 mb-xxl-5">
      <div class="row pb-md-4 pb-xl-5">
        <div class="col-md-6 mb-2 mb-md-0">
          <div class="card border-0 h-100 bg-size-cover bg-position-center" style="background-image: url(/assets/img/services/v1/01.jpg);">
            <div class="d-none d-sm-block d-md-none" style="height: 450px;"></div>
            <div class="d-sm-none" style="height: 350px;"></div>
          </div>
        </div>
        <div class="col-md-6 col-xl-5 offset-xl-1">
          <div class="pt-4 pb-sm-4 ps-md-4 ps-xl-0">
            <h2 class="h1 pb-2 pb-sm-3 pb-xl-4">{{ $t('benefits.title') }}</h2>
            <div v-for="(benefit, index) in benefits" :key="index" class="d-flex pb-3 mb-2 mb-xl-3">
              <div class="text-body-secondary pt-1">{{ index + 1 }}</div>
              <div class="ps-3">
                <h3 class="h5">{{ $t(benefit.titleKey) }}</h3>
                <p>{{ $t(benefit.descriptionKey) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from '#imports'
const { t, locale } = useI18n();

useHead({
  title: t('meta.activities.title'),
  meta: [
    { name: 'description', content: t('meta.activities.description') },
    { name: 'keywords', content: t('meta.activities.keywords') },
    { name: 'author', content: 'COBUTAM' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ]
})

const services = ref([
        {
          titleKey: 'services.service1.title',
          descriptionKey: 'services.service1.description',
          image: '/assets/img/landing/corporate/services/3.png',
          icon: 'bi-tools',
        },
        {
          titleKey: 'services.service2.title',
          descriptionKey: 'services.service2.description',
          image: '/assets/img/landing/corporate/services/2.png',
          icon: 'bi-lightning-fill',
        },
        {
          titleKey: 'services.service3.title',
          descriptionKey: 'services.service3.description',
          image: '/assets/img/landing/corporate/services/1.png',
          icon: 'bi-shield-fill',
        },
        {
          titleKey: 'services.service4.title',
          descriptionKey: 'services.service4.description',
          image: '/assets/img/landing/corporate/services/8.png',
          icon: 'bi-droplet-fill',
        },
        {
          titleKey: 'services.service5.title',
          descriptionKey: 'services.service5.description',
          image: '/assets/img/landing/corporate/services/4.png',
          icon: 'bi-building',
        },
        {
          titleKey: 'services.service6.title',
          descriptionKey: 'services.service6.description',
          image: '/assets/img/landing/corporate/services/11.jpeg',
          icon: 'bi-gear-fill',
        },
      ]);
    const benefits = ref([
        {
          titleKey: 'benefits.benefit1.title',
          descriptionKey: 'benefits.benefit1.description',
        },
        {
          titleKey: 'benefits.benefit2.title',
          descriptionKey: 'benefits.benefit2.description',
        },
        {
          titleKey: 'benefits.benefit3.title',
          descriptionKey: 'benefits.benefit3.description',
        },
        {
          titleKey: 'benefits.benefit4.title',
          descriptionKey: 'benefits.benefit4.description',
        },
      ]);

</script>
