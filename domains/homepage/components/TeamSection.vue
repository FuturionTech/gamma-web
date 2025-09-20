<template>
  <section class="container pt-5 mt-md-2 mt-lg-3 mt-xl-4 mt-xxl-5">
    <div class="row g-4 pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2">
      <div class="col-lg-4 d-flex flex-column">
        <h2 class="display-2 d-none d-lg-block">Meet our team</h2>
        <h2 class="h1 d-lg-none text-center mb-0">Meet our team</h2>
        <div class="d-none d-lg-flex mt-auto mb-n3">
          <div data-aos="fade-left" data-aos-duration="700" data-aos-anchor-placement="bottom-bottom">
            <svg class="text-info" width="169" height="169" viewBox="0 0 169 169" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <circle cx="84.5" cy="84.5" r="84.5"></circle>
            </svg>
          </div>
          <div data-aos="fade-right" data-aos-duration="700" data-aos-anchor-placement="bottom-bottom">
            <svg class="text-primary" width="169" height="169" viewBox="0 0 169 169" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M169 84.5C169 101.213 164.044 117.55 154.759 131.446C145.474 145.342 132.277 156.172 116.837 162.568C101.396 168.963 84.4063 170.637 68.0149 167.376C51.6235 164.116 36.567 156.068 24.7495 144.251C12.9319 132.433 4.88409 117.377 1.62364 100.985C-1.63681 84.5937 0.0365658 67.6036 6.43217 52.1632C12.8278 36.7229 23.6583 23.5258 37.5543 14.2408C51.4503 4.95583 67.7875 -6.12546e-06 84.5 -7.38722e-06L84.5 84.5L169 84.5Z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-4" v-for="member in team" :key="member.id">
        <div class="card card-hover border-0 rounded-1 overflow-hidden">
          <NuxtImg :src="member.image" :alt="'Image of ' + member.name"/>
          <div class="position-absolute top-0 start-0 w-100 h-100 opacity-0">
            <div class="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
            <div class="card-body d-flex flex-column justify-content-end h-100 position-relative z-2 text-center" data-bs-theme="dark">
              <h3 class="h5 mb-1">{{ member.name }}</h3>
              <p class="text-body mb-3">{{ member.position }}</p>
              <div class="d-flex justify-content-center">
                <a v-for="social in member.socials" :key="social.platform" :class="'btn btn-icon btn-sm btn-light btn-' + social.platform + ' rounded-circle mx-2'" :href="social.link" :aria-label="social.platform">
                  <i :class="'ai-' + social.platform"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 d-none d-lg-flex flex-column justify-content-center text-center">
        <p class="lead px-3 mb-0">The main competencies of the team: find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque congue aliqua dolor do amet sint velit officia viverra arcu in rhoncus egestas lorem consequat sollicitudin.</p>
      </div>
      <div class="col-lg-4 d-flex flex-column justify-content-center text-center">
        <div class="mx-auto" style="max-width: 245px;">
          <h3 class="h2 mb-4">Get to know our team better</h3>
          <a class="btn btn-outline-primary" href="#">About us</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const team = [
  {
    id: 1,
    name: 'Guy Hawkins',
    position: 'Head of Marketing',
    image: '/assets/img/landing/corporate/team/01.jpg',
    socials: [
      { platform: 'facebook', link: '#' },
      { platform: 'x', link: '#' },
      { platform: 'linkedin', link: '#' }
    ]
  },
  {
    id: 2,
    name: 'Martha Winter',
    position: 'Data Analyst',
    image: '/assets/img/landing/corporate/team/02.jpg',
    socials: [
      { platform: 'instagram', link: '#' },
      { platform: 'facebook', link: '#' },
      { platform: 'linkedin', link: '#' }
    ]
  },
  {
    id: 3,
    name: 'Jane Cooper',
    position: 'Head of PR Department',
    image: '/assets/img/landing/corporate/team/03.jpg',
    socials: [
      { platform: 'instagram', link: '#' },
      { platform: 'facebook', link: '#' },
      { platform: 'linkedin', link: '#' }
    ]
  },
  {
    id: 4,
    name: 'Albert Flores',
    position: 'Art Director',
    image: '/assets/img/landing/corporate/team/04.jpg',
    socials: [
      { platform: 'facebook', link: '#' },
      { platform: 'behance', link: '#' },
      { platform: 'dribbble', link: '#' }
    ]
  },
  {
    id: 5,
    name: 'Robert Fox',
    position: 'CTO',
    image: '/assets/img/landing/corporate/team/05.jpg',
    socials: [
      { platform: 'facebook', link: '#' },
      { platform: 'x', link: '#' },
      { platform: 'stack-overflow', link: '#' }
    ]
  },
  {
    id: 6,
    name: 'Michelle Yang',
    position: 'CEO, Founder',
    image: '/assets/img/landing/corporate/team/06.jpg',
    socials: [
      { platform: 'instagram', link: '#' },
      { platform: 'facebook', link: '#' },
      { platform: 'linkedin', link: '#' }
    ]
  }
]
</script>

<style scoped>
/* Add any specific styles for the team section here */
</style>
