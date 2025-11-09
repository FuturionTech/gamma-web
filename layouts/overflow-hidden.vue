<template>
  <div>
    <body>
    <main class="page-wrapper">
      <!-- Navbar. Remove 'fixed-top' class to make the navigation bar scrollable with the page-->
      <Header/>
      <!-- Page content-->
      <!-- Page content-->
      <div class="container overflow-hidden py-5 mt-5 mb-2 mb-md-3 mb-lg-4 mb-xxl-5">
        <slot/>
      </div>
    </main>
    <!-- Footer-->
    <Footer/>
    <!-- Back to top button-->
    <a class="btn-scroll-top" href="#top" data-scroll>
      <svg viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" stroke-width="1.5"
                stroke-miterlimit="10"></circle>
      </svg>
      <i class="ai-arrow-up"></i>
    </a>
    </body>
  </div>
</template>

<script setup>
// Components auto-imported in Nuxt 3
// Dark mode is handled by ThemeToggle component and Pinia store
</script>