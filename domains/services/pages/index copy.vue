<template>
  <div>
    <!-- Services Section -->
    <section class="container py-5 mt-5 mb-md-3 mb-lg-4 mb-xxl-5">
      <nav aria-label="breadcrumb" class="mt-3">
        <ol class="breadcrumb pt-lg-3 pb-lg-4 pb-2">
          <li class="breadcrumb-item">
            <a href="index.html">{{ $t('breadcrumbs.home') }}</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ $t('breadcrumbs.services') }}</li>
        </ol>
      </nav>

      <h2 class="h1 text-center pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mt-xl-1">
        {{ $t('services.title') }}
      </h2>
      <p class="text-center pb-3 mb-3 mb-lg-4">{{ $t('services.subtitle') }}</p>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        <!-- Services -->
        <div v-for="(service, index) in services" :key="index" class="col">
          <div class="card h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden">
            <div
              class="card-body d-flex align-items-end position-absolute top-0 start-0 w-100 h-100 opacity-0 bg-size-cover bg-position-center pb-4"
              :style="{ backgroundImage: `url(${service.image})` }"
            ></div>
            <div class="card-body pb-3">
              <i :class="service.icon + ' display-4 text-primary mb-4'"></i>
              <h3 class="h4">{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
            <div class="card-footer border-0 pt-3 mb-3">
              <a :href="service.link" class="btn btn-icon btn-lg btn-outline-primary rounded-circle">
                <i class="ai-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="container py-5 mt-5">
      <div class="row">
        <div class="col-md-6">
          <img src="/assets/img/services/v1/01.jpg" class="img-fluid rounded" alt="Benefits Image" />
        </div>
        <div class="col-md-6">
          <h2 class="h1 mb-4">{{ $t('benefits.title') }}</h2>
          <div v-for="(benefit, index) in benefits" :key="index" class="d-flex align-items-start mb-4">
            <div class="text-primary me-3">
              <span class="badge bg-primary text-white fs-5">{{ index + 1 }}</span>
            </div>
            <div>
              <h3 class="h5">{{ benefit.title }}</h3>
              <p>{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: this.$t('services.service1.title'),
          description: this.$t('services.service1.description'),
          image: "/assets/img/landing/corporate/services/01.jpg",
          icon: "bi-tools",
          link: "/services/petroleum",
        },
        {
          title: this.$t('services.service2.title'),
          description: this.$t('services.service2.description'),
          image: "/assets/img/landing/corporate/services/01.jpg",
          icon: "bi-lightning-fill",
          link: "/services/energy",
        },
        {
          title: this.$t('services.service3.title'),
          description: this.$t('services.service3.description'),
          image: "/assets/img/landing/corporate/services/01.jpg",
          icon: "bi-shield-fill",
          link: "/services/fire-safety",
        },
        {
          title: this.$t('services.service4.title'),
          description: this.$t('services.service4.description'),
          image: "/assets/img/landing/corporate/services/01.jpg",
          icon: "bi-droplet-fill",
          link: "/services/hydraulics",
        },
        {
          title: this.$t('services.service5.title'),
          description: this.$t('services.service5.description'),
          image: "/assets/img/landing/corporate/services/01.jpg",
          icon: "bi-building",
          link: "/services/construction",
        },
        {
          title: this.$t('services.service6.title'),
          description: this.$t('services.service6.description'),
          image: "/assets/img/landing/corporate/services/01.jpg",
          icon: "bi-gear-fill",
          link: "/services/after-sales",
        },
      ],
      benefits: [
        {
          title: this.$t('benefits.benefit1.title'),
          description: this.$t('benefits.benefit1.description'),
        },
        {
          title: this.$t('benefits.benefit2.title'),
          description: this.$t('benefits.benefit2.description'),
        },
        {
          title: this.$t('benefits.benefit3.title'),
          description: this.$t('benefits.benefit3.description'),
        },
        {
          title: this.$t('benefits.benefit4.title'),
          description: this.$t('benefits.benefit4.description'),
        },
      ],
    };
  },
};
</script>
