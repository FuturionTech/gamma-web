<template>
  <section class="position-relative " style="margin-bottom: 50px;">
    <div class="bg-secondary position-absolute bottom-0 start-0 w-100" style="height: calc(100% - 3rem);"></div>
    <div class="container position-relative z-2">
      <div class="row align-items-center">
        <!-- Left Content -->
        <div class="col-lg-6 py-5 mb-5 mb-lg-0">
          <h2 class="display-5 text-center text-lg-start pt-3 mt-3 mb-4">
            {{ $t('homepage.contact.title') }}
          </h2>
          <p class="fs-lg text-center text-lg-start pb-3 mb-4">
            {{ $t('homepage.contact.description') }}
          </p>
          <div class="text-center text-lg-start pt-4">
            <NuxtLink class="btn btn-outline-primary px-4" to="contact">
              {{ $t('homepage.contact.cta') }}
            </NuxtLink>
          </div>
          <div class="d-none d-lg-flex justify-content-end mt-n4 me-n4">
            <div data-aos="fade-left" data-aos-duration="700" data-aos-anchor-placement="bottom-bottom">
              <svg class="text-danger" width="117" height="117" viewBox="0 0 117 117" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M-2.51516e-06 58.5C-3.52666e-06 70.0702 3.43096 81.3806 9.85902 91.0008C16.2871 100.621 25.4235 108.119 36.113 112.547C46.8025 116.975 58.5649 118.133 69.9128 115.876C81.2607 113.619 91.6844 108.047 99.8657 99.8657C108.047 91.6844 113.619 81.2607 115.876 69.9128C118.133 58.5649 116.975 46.8025 112.547 36.113C108.119 25.4235 100.621 16.2871 91.0009 9.85903C81.3806 3.43096 70.0702 -4.24071e-06 58.5 -5.11423e-06L58.5 58.5L-2.51516e-06 58.5Z"></path>
              </svg>
            </div>
            <div data-aos="fade-right" data-aos-duration="700" data-aos-anchor-placement="bottom-bottom">
              <svg class="text-info" width="117" height="117" viewBox="0 0 117 117" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <circle cx="58.5" cy="58.5" r="58.5"></circle>
              </svg>
            </div>
          </div>
        </div>
        <!-- Right Content -->
        <div class="col-lg-6">
          <div class="bg-primary text-white d-flex flex-column align-items-center justify-content-center position-relative h-100 rounded-1 p-5">
            <div class="position-relative z-2 py-sm-3 py-md-4" style="max-width: 360px;" data-bs-theme="dark">
              <h2 class="display-6 mb-4">
                {{ $t('homepage.contact.ready') }}
              </h2>
              <p class="text-body-light mb-4">
                {{ $t('homepage.contact.message') }}
              </p>
              <div class="d-flex flex-column flex-sm-row align-items-center pt-3">
                <NuxtLink class="btn btn-light w-100 w-sm-auto me-sm-4 mb-2 mb-sm-0" to="contact">
                  {{ $t('homepage.contact.contact_us') }}
                </NuxtLink>
                <a class="d-inline-block text-white fw-medium p-2" href="mailto:info@cobutam.com">
                  info@cobutam.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
