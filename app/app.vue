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
import { useHead } from '#imports'

// Add Bootstrap Icons and other necessary CDNs
useHead({
  link: [
    // Bootstrap Icons
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css'
    },
    // Font Awesome Icons
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
      integrity: 'sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==',
      crossorigin: 'anonymous',
      referrerpolicy: 'no-referrer'
    },
    // Around Icons
    {
      rel: 'stylesheet',
      href: '/assets/icons/around-icons.min.css'
    }
  ]
})
</script>