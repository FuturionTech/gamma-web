<template>
  <div>
            <!-- Breadcrumb -->
             <div class="container" style="margin-top: 120px;">
              <nav aria-label="breadcrumb">
          <ol class="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
            <li class="breadcrumb-item">
              <NuxtLink to="/">{{ $t('breadcrumb.home') }}</NuxtLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{{ $t('breadcrumb.about') }}</li>
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

        <h1 class="display-2 pb-2 pb-sm-3">{{ $t('hero.title') }}</h1>
        <ul class="list-unstyled d-flex flex-wrap mb-0">
          <li class="d-flex text-body py-1 me-4">
            <i class="ai-check-alt text-primary lead me-2"></i>
            {{ $t('hero.feature1') }}
          </li>
          <li class="d-flex text-body py-1 me-4">
            <i class="ai-check-alt text-primary lead me-2"></i>
            {{ $t('hero.feature2') }}
          </li>
          <li class="d-flex text-body py-1">
            <i class="ai-check-alt text-primary lead me-2"></i>
            {{ $t('hero.feature3') }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- NOS ATOUTS -->
<section class="container py-5 mb-5">
  <div class="text-center mb-5">
    <h2 class="display-6">{{ $t('strengths.title') }}</h2>
    <p class="fs-lg text-muted">{{ $t('strengths.subtitle') }}</p>
  </div>
  
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
    <!-- Atout 1 -->
    <div class="col">
      <div class="card h-100 border-0 shadow-sm">
        <div class="card-body text-center">
          <svg width="50" height="50" class="mb-3 text-primary">
            <path d="M10 2h20v36H10z" fill="currentColor"/>
          </svg>
          <h3 class="h5">{{ $t('strengths.experience.title') }}</h3>
          <p class="text-muted">{{ $t('strengths.experience.description') }}</p>
        </div>
      </div>
    </div>

    <!-- Atout 2 -->
    <div class="col">
      <div class="card h-100 border-0 shadow-sm">
        <div class="card-body text-center">
          <svg width="50" height="50" class="mb-3 text-info">
            <path d="M5 5h30v30H5z" fill="currentColor"/>
          </svg>
          <h3 class="h5">{{ $t('strengths.technical.title') }}</h3>
          <p class="text-muted">{{ $t('strengths.technical.description') }}</p>
        </div>
      </div>
    </div>

    <!-- Atout 3 -->
    <div class="col">
      <div class="card h-100 border-0 shadow-sm">
        <div class="card-body text-center">
          <svg width="50" height="50" class="mb-3 text-success">
            <path d="M20 0L30 10H10L20 0zM5 15h30v20H5z" fill="currentColor"/>
          </svg>
          <h3 class="h5">{{ $t('strengths.certification.title') }}</h3>
          <p class="text-muted">{{ $t('strengths.certification.description') }}</p>
        </div>
      </div>
    </div>

    <!-- Atout 4 -->
    <div class="col">
      <div class="card h-100 border-0 shadow-sm">
        <div class="card-body text-center">
          <svg width="50" height="50" class="mb-3 text-warning">
            <path d="M10 5h20v30H10z" fill="currentColor"/>
          </svg>
          <h3 class="h5">{{ $t('strengths.services.title') }}</h3>
          <p class="text-muted">{{ $t('strengths.services.description') }}</p>
        </div>
      </div>
    </div>

    <!-- Atout 5 -->
    <div class="col">
      <div class="card h-100 border-0 shadow-sm">
        <div class="card-body text-center">
          <svg width="50" height="50" class="mb-3 text-danger">
            <path d="M15 5h10v30H15z" fill="currentColor"/>
          </svg>
          <h3 class="h5">{{ $t('strengths.quality.title') }}</h3>
          <p class="text-muted">{{ $t('strengths.quality.description') }}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- About -->
<section class="container position-relative z-3 mt-5" style="margin-top: -135px;">
  <div class="rounded-2 overflow-hidden">
    <div class="jarallax ratio ratio-16x9" data-jarallax data-speed="0.6">
      <div class="jarallax-img" style="background-image: url(/assets/img/about/agency/about_cover.png);"></div>
    </div>
  </div>
  <div class="row pt-5 mt-n2 mt-sm-0 mt-md-2 mt-lg-4 mt-xl-5">
    <div class="col-md-6 col-lg-5">
      <div class="fs-sm text-uppercase mb-3">{{ $t('about.sectionTitle') }}</div>
      <h2 class="display-6">{{ $t('about.heading') }}</h2>
      
    </div>
    <div class="col-md-6 col-xl-5 offset-lg-1 offset-xl-2 pt-1 pt-sm-2 pt-md-5">
      <p class="fs-xl">{{ $t('about.paragraph1') }}</p>
      <p class="fs-xl">{{ $t('about.paragraph2') }}</p>
      <p class="fs-xl mb-0">{{ $t('about.paragraph3') }}</p>
    </div>
  </div>
</section>


<!-- Approach -->
<section class="pt-5 mt-md-2 mt-xl-4 mt-xxl-5">
  <div class="container pt-2 pt-sm-4 pt-lg-5 mt-xxl-2">
    <div class="fs-sm text-uppercase mb-3">{{ $t('approach.sectionTitle') }}</div>
    <h2 class="display-6 pb-3 mb-lg-4">{{ $t('approach.heading') }}</h2>
    <div class="swiper" data-swiper-options='{
        "spaceBetween": 24,
        "pagination": {
          "el": ".swiper-pagination",
          "clickable": true
        },
        "breakpoints": {
          "576": { "slidesPerView": 2 },
          "992": { "slidesPerView": 3 }
        }
      }'>
      <div class="swiper-wrapper">

        <!-- Item -->
        <div class="swiper-slide h-auto">
          <div class="card border-0 bg-secondary rounded-2 h-100">
            <div class="card-body">
              <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40"
                   xmlns="http://www.w3.org/2000/svg">
                <g class="text-info">
                  <path d="M20.0004 36.0226L10.982 21.3535C9.42594 23.3156 8.49609 25.7968 8.49609 28.4955C8.49609 34.8492 13.6467 39.9998 20.0004 39.9998C26.3541 39.9998 31.5047 34.8492 31.5047 28.4955C31.5047 25.7969 30.5749 23.3156 29.0188 21.3535L20.0004 36.0226Z"
                        fill="currentColor"></path>
                </g>
                <g class="text-primary">
                  <path d="M39.3962 0H0.605469L20.0009 31.5477L39.3962 0ZM25.7601 7.62359L20.0009 16.9914L14.2416 7.62359H25.7601Z"
                        fill="currentColor"></path>
                </g>
              </svg>
              <h3 class="h4">{{ $t('approach.card1.title') }}</h3>
              <p class="mb-0">{{ $t('approach.card1.description') }}</p>
            </div>
          </div>
        </div>

        <!-- Item -->
        <div class="swiper-slide h-auto">
          <div class="card border-0 bg-secondary rounded-2 h-100">
            <div class="card-body">
              <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40"
                   xmlns="http://www.w3.org/2000/svg">
                <g class="text-info">
                  <path d="M26.307 23.1116C26.307 28.3136 22.09 32.5307 16.888 32.5307C11.6859 32.5307 7.46891 28.3136 7.46891 23.1116C7.46891 17.9096 11.6859 13.6925 16.888 13.6925C17.1467 13.6925 17.4028 13.7038 17.6562 13.7243V6.24121C17.4016 6.22973 17.1455 6.22363 16.888 6.22363C7.56102 6.22363 0 13.7846 0 23.1116C0 32.4386 7.56102 39.9996 16.888 39.9996C26.2149 39.9996 33.7759 32.4386 33.7759 23.1116C33.7759 22.8541 33.7698 22.598 33.7584 22.3433H26.2753C26.2958 22.5968 26.307 22.8529 26.307 23.1116Z"
                        fill="currentColor"></path>
                </g>
                <g class="text-primary">
                  <path d="M40 20C40 8.9543 31.0457 0 20 0V20H40Z" fill="currentColor"></path>
                </g>
              </svg>
              <h3 class="h4">{{ $t('approach.card2.title') }}</h3>
              <p class="mb-0">{{ $t('approach.card2.description') }}</p>
            </div>
          </div>
        </div>

        <!-- Item -->
        <div class="swiper-slide h-auto">
          <div class="card border-0 bg-secondary rounded-2 h-100">
            <div class="card-body">
              <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40"
                   xmlns="http://www.w3.org/2000/svg">
                <g class="text-primary">
                  <path d="M25.2791 12.7502C28.1954 9.83389 28.1954 5.10556 25.2791 2.18921C22.3627 -0.727136 17.6344 -0.727137 14.718 2.18921C11.8017 5.10556 11.8017 9.83389 14.718 12.7502C17.6344 15.6666 22.3627 15.6666 25.2791 12.7502Z"
                        fill="currentColor"></path>
                </g>
                <g class="text-info">
                  <path d="M14.6859 29.3056C15.6559 27.0123 16.9202 24.8838 18.4577 22.9467C13.8666 17.9802 7.29664 14.8701 0 14.8701V40.0004H12.5259C12.5259 36.2925 13.2527 32.6942 14.6859 29.3056Z"
                        fill="currentColor"></path>
                </g>
                <g class="text-primary">
                  <path d="M40.0014 40.0004V14.8701C26.1223 14.8701 14.8711 26.1214 14.8711 40.0004H40.0014Z"
                        fill="currentColor"></path>
                </g>
              </svg>
              <h3 class="h4">{{ $t('approach.card3.title') }}</h3>
              <p class="mb-0">{{ $t('approach.card3.description') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative bottom-0 mt-2 pt-4 d-lg-none"></div>
    </div>
  </div>
</section>



    <!-- How we work (Steps) -->
<section class="container pt-5 mt-1 mt-sm-2 mt-xl-4 mt-xxl-5">
  <div class="row align-items-center pt-2 pt-sm-3 pt-md-4 pt-lg-5 mt-xl-2 mt-xxl-3">
    <div class="col-md-6 col-xl-5 pb-3 pb-md-0 mb-4 mb-md-0">
      <div
          class="ratio ratio-1x1 d-flex align-items-center position-relative rounded-circle overflow-hidden bg-size-cover mx-auto"
          style="max-width: 530px; background-image: url(/assets/img/about/agency/steps-img.jpg);">
        <div class="bg-black position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
        <div class="position-relative z-2 p-4" data-bs-theme="dark">
          <div class="text-center mx-auto" style="max-width: 275px;">
            <span class="d-block text-body fs-sm text-uppercase mb-3">{{ $t('howWeWork.sectionTitle') }}</span>
            <h2 class="display-6 mb-0">{{ $t('howWeWork.heading') }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xl-5 offset-xl-1">
      <div class="ps-md-4 ps-xl-0">
        <div class="steps steps-hoverable">
          <div class="step py-3 py-xl-4">
            <div class="step-number">
              <div class="step-number-inner">01</div>
            </div>
            <div class="step-body">
              <h3 class="h5 pb-1 mb-2">{{ $t('howWeWork.step1.title') }}</h3>
              <p class="mb-0">{{ $t('howWeWork.step1.description') }}</p>
            </div>
          </div>
          <div class="step py-3 py-xl-4">
            <div class="step-number">
              <div class="step-number-inner">02</div>
            </div>
            <div class="step-body">
              <h3 class="h5 pb-1 mb-2">{{ $t('howWeWork.step2.title') }}</h3>
              <p class="mb-0">{{ $t('howWeWork.step2.description') }}</p>
            </div>
          </div>
          <div class="step py-3 py-xl-4">
            <div class="step-number">
              <div class="step-number-inner">03</div>
            </div>
            <div class="step-body">
              <h3 class="h5 pb-1 mb-2">{{ $t('howWeWork.step3.title') }}</h3>
              <p class="mb-0">{{ $t('howWeWork.step3.description') }}</p>
            </div>
          </div>
          <div class="step py-3 py-xl-4">
            <div class="step-number">
              <div class="step-number-inner">04</div>
            </div>
            <div class="step-body">
              <h3 class="h5 pb-1 mb-2">{{ $t('howWeWork.step4.title') }}</h3>
              <p class="mb-0">{{ $t('howWeWork.step4.description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Services -->
<section class="bg-secondary py-5">
  <div class="container py-3 py-sm-4 py-lg-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
    <div class="fs-sm text-uppercase mb-3 mt-xl-2 mt-xxl-3">{{ $t('services.title') }}</div>
    <h2 class="h1 pb-3 mb-lg-4">{{ $t('services.heading') }}</h2>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 pb-xl-2 pb-xxl-3">

      <!-- Service 1 -->
      <div class="col">
        <div class="card h-100 border-0 rounded-2">
          <div class="card-body pb-3">
            <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40"
                 xmlns="http://www.w3.org/2000/svg">
              <g class="text-info">
                <path d="M26.307 23.1116C26.307 28.3136 22.09 32.5307 16.888 32.5307C11.6859 32.5307 7.46891 28.3136 7.46891 23.1116C7.46891 17.9096 11.6859 13.6925 16.888 13.6925C17.1467 13.6925 17.4028 13.7038 17.6562 13.7243V6.24121C17.4016 6.22973 17.1455 6.22363 16.888 6.22363C7.56102 6.22363 0 13.7846 0 23.1116C0 32.4386 7.56102 39.9996 16.888 39.9996C26.2149 39.9996 33.7759 32.4386 33.7759 23.1116C33.7759 22.8541 33.7698 22.598 33.7584 22.3433H26.2753C26.2958 22.5968 26.307 22.8529 26.307 23.1116Z"
                      fill="currentColor"></path>
              </g>
            </svg>
            <h3 class="h4">{{ $t('services.service1.title') }}</h3>
            <p class="mb-0">{{ $t('services.service1.description') }}</p>
          </div>
        </div>
      </div>

      <!-- Service 2 -->
      <div class="col">
        <div class="card h-100 border-0 rounded-2">
          <div class="card-body pb-3">
            <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40"
                 xmlns="http://www.w3.org/2000/svg">
              <g class="text-primary">
                <path d="M40 20C40 8.9543 31.0457 0 20 0V20H40Z" fill="currentColor"></path>
              </g>
            </svg>
            <h3 class="h4">{{ $t('services.service2.title') }}</h3>
            <p class="mb-0">{{ $t('services.service2.description') }}</p>
          </div>
        </div>
      </div>

      <!-- Service 3 -->
      <div class="col">
        <div class="card h-100 border-0 rounded-2">
          <div class="card-body pb-3">
            <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40"
                 xmlns="http://www.w3.org/2000/svg">
              <g class="text-info">
                <path d="M25,25h15v15H25V25z" fill="currentColor"></path>
              </g>
            </svg>
            <h3 class="h4">{{ $t('services.service3.title') }}</h3>
            <p class="mb-0">{{ $t('services.service3.description') }}</p>
          </div>
        </div>
      </div>

      <!-- Service 4 -->
      <div class="col">
        <div class="card h-100 border-0 rounded-2">
          <div class="card-body pb-3">
            <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40"
                 xmlns="http://www.w3.org/2000/svg">
              <g class="text-primary">
                <path d="M19.9999 0C11.1313 0 3.61211 5.77313 0.992188 13.7659H39.0077C36.3877 5.77313 28.8686 0 19.9999 0Z"
                      fill="currentColor"></path>
              </g>
            </svg>
            <h3 class="h4">{{ $t('services.service4.title') }}</h3>
            <p class="mb-0">{{ $t('services.service4.description') }}</p>
          </div>
        </div>
      </div>

      <!-- Service 5 -->
      <div class="col">
        <div class="card h-100 border-0 rounded-2">
          <div class="card-body pb-3">
            <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40"
                 xmlns="http://www.w3.org/2000/svg">
              <g class="text-info">
                <path d="M34.9811 16.2655C34.3635 26.3194 26.3194 34.3634 16.2656 34.981V40H40V16.2655H34.9811Z"
                      fill="currentColor"></path>
              </g>
            </svg>
            <h3 class="h4">{{ $t('services.service5.title') }}</h3>
            <p class="mb-0">{{ $t('services.service5.description') }}</p>
          </div>
        </div>
      </div>

      <!-- Service 6 -->
      <div class="col">
        <div class="card h-100 border-0 rounded-2">
          <div class="card-body pb-3">
            <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40"
                 xmlns="http://www.w3.org/2000/svg">
              <g class="text-primary">
                <path d="M29.1953 10.0415C27.141 4.19328 21.571 0 15.0208 0C6.725 0 0 6.725 0 15.0208C0 21.571 4.19328 27.141 10.0415 29.1953V10.0415H29.1953Z"
                      fill="currentColor"></path>
              </g>
            </svg>
            <h3 class="h4">{{ $t('services.service6.title') }}</h3>
            <p class="mb-0">{{ $t('services.service6.description') }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


  </div>
</template>

<script setup>
import TeamsComponent from '~/domains/aboutus/components/TeamsComponent';
import { useHead } from '#imports'
const { t, locale } = useI18n();

useHead({
  title: t('meta.about.title'),
  meta: [
    { name: 'description', content: t('meta.about.description') },
    { name: 'keywords', content: t('meta.about.keywords') },
    { name: 'author', content: 'COBUTAM' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ]
})


</script>

<style scoped>

</style>
