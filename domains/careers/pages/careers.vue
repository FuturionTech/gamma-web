<template>
  <div>
    <!-- Breadcrumb -->
    <div class="container" style="margin-top: 120px;">
      <nav aria-label="breadcrumb">
        <ol class="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
          <li class="breadcrumb-item">
            <NuxtLink to="/">{{ $t('breadcrumbs.home') }}</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ $t('breadcrumbs.careers') }}</li>
        </ol>
      </nav>
    </div>

    <!-- Hero -->
    <section class="bg-primary position-relative py-5 mt-5">
      <div class="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100"
           style="background-color: rgba(255,255,255, .03);"></div>
      <div class="container position-relative z-2 py-5 mb-4 mb-sm-5" data-bs-theme="dark">
        <div class="row pb-5 mb-2 mb-sm-0 mb-lg-3">
          <div class="col-lg-10 col-xl-9">
            <h1 class="display-2 pb-2 pb-sm-3">{{ $t('careers.title') }}</h1>
            <p class="fs-lg text-body">{{ $t('careers.subtitle') }}</p>
            <p class="text-body">{{ $t('careers.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="container py-5 mb-5">
      <div class="text-center mb-5">
        <h2 class="display-6">{{ $t('careers.benefits.title') }}</h2>
      </div>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-2 g-4">
        <div class="col">
          <div class="card h-100 border-0 bg-light">
            <div class="card-body p-4">
              <i class="ai-award h3 text-primary mb-3"></i>
              <p class="mb-0">{{ $t('careers.benefits.competitive') }}</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0 bg-light">
            <div class="card-body p-4">
              <i class="ai-bar-chart-2 h3 text-primary mb-3"></i>
              <p class="mb-0">{{ $t('careers.benefits.growth') }}</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0 bg-light">
            <div class="card-body p-4">
              <i class="ai-time h3 text-primary mb-3"></i>
              <p class="mb-0">{{ $t('careers.benefits.flexible') }}</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0 bg-light">
            <div class="card-body p-4">
              <i class="ai-rocket h3 text-primary mb-3"></i>
              <p class="mb-0">{{ $t('careers.benefits.innovative') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="container py-5 mb-5">
      <div class="text-center">
        <a href="mailto:careers@gammaneutral.com" class="btn btn-primary btn-lg">
          {{ $t('careers.apply') }}
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
// Set page title and meta
useHead({
  title: 'Careers - Gamma Neutral Consulting',
  meta: [
    { name: 'description', content: 'Join our team of data experts at Gamma Neutral Consulting' }
  ]
})
</script>