<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <!-- Development Performance Monitor -->
    <SectionPerformanceMonitor />

    <!-- Scroll to Top Button -->
    <ScrollToTop />
  </div>
</template>

<script setup>
// Icon stylesheets are loaded globally via nuxt.config.ts head.link
</script>

<style>
/* Prevent horizontal scroll on mobile */
html, body {
  overflow-x: hidden;
  max-width: 100vw;
}

/* Page transition — smooth fade + subtle slide */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
