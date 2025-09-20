<template>
  <section class="container py-5 mb-sm-2 mb-md-0 my-lg-3 my-xl-4 my-xxl-5">
    <h2 class="h1 text-center text-sm-start pb-3 pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mb-3 mb-lg-4">Our blog</h2>
    <div class="row">
      <div class="col-lg-6 pb-3 mb-2 mb-sm-3">
        <a class="card h-100 border-0 rounded-1 overflow-hidden text-decoration-none bg-size-cover bg-position-center"
           href="#"
           style="max-width: 600px; min-height: 300px; background-image: url('/assets/img/landing/corporate/blog-img.jpg');">
          <div class="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
          <div class="card-body d-flex flex-column justify-content-end h-100 position-relative z-2" data-bs-theme="dark">
            <h3>New business strategies for 2022</h3>
            <p class="text-body mb-0">Leo vitae sem eget eget at in vivamus placerat sodales tristique risusiis senectusic quisque faucibus est justo egetert lobortis ultrices eu dignissim. Dapibus est ac risus maximus...</p>
          </div>
        </a>
      </div>
      <div class="col-lg-6">
        <div class="row row-cols-1 row-cols-sm-2 g-4">
          <article class="col" v-for="article in articles" :key="article.id">
            <div class="pb-4 pt-2 pt-xl-3 ms-md-3 border-bottom">
              <h3 class="h4">
                <a :href="article.link">{{ article.title }}</a>
              </h3>
              <p class="mb-4">{{ article.description }}</p>
              <div class="d-flex align-items-center">
                <span class="fs-sm text-body-secondary">{{ article.date }}</span>
                <span class="fs-xs opacity-20 mx-3">|</span>
                <a class="badge text-nav fs-xs border" :href="article.categoryLink">{{ article.category }}</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
    <div class="text-end pb-md-4 pt-3 mt-2 mt-sm-3 mt-lg-4">
      <a class="d-inline-flex align-items-center fw-semibold text-decoration-none" href="#">
        All articles
        <i class="ai-arrow-right fs-4 ms-2"></i>
      </a>
    </div>
  </section>
</template>

<script setup>
const articles = [
  {
    id: 1,
    title: 'Promotion from scratch to the first sales',
    description: 'Suscipit consectetur nam hac in enim, adipiscing aenean tortor ac commodo eu nibh a tempus sed...',
    date: 'August 13, 2022',
    category: 'Strategy',
    categoryLink: '#',
    link: '#'
  },
  {
    id: 2,
    title: 'New business strategies for 2022',
    description: 'Orci massa sapien varius odio et vel egestas ultricies commodo tristique ullamcorper sit vitae cursus...',
    date: 'August 2, 2022',
    category: 'Business',
    categoryLink: '#',
    link: '#'
  },
  {
    id: 3,
    title: 'Outgoing year results, the main news',
    description: 'Mauris suscipit in tempor, platea lobortis mollis rutrum aliquam pulvinar ultricies orci augue libero...',
    date: 'July 27, 2022',
    category: 'Analytics',
    categoryLink: '#',
    link: '#'
  },
  {
    id: 4,
    title: 'How to define goals and objectives',
    description: 'Sed convallis integer egestas sapien sapien purus enim massa porttitor vulputate metus purus in fringilla...',
    date: 'July 19, 2022',
    category: 'Strategy',
    categoryLink: '#',
    link: '#'
  }
]
</script>

<style scoped>
/* Add any specific styles for the blog section here */
</style>
