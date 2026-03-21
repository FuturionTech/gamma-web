<template>
  <li class="nav-item">
    <NuxtLink class="nav-link fw-semibold" to="/services">
      Services
    </NuxtLink>
  </li>
</template>

<script setup>
// Primary nav link — links to services page
</script>

<style scoped>
.nav-link {
  color: white !important;
  transition: color 0.2s ease-in-out;
}

.nav-link:hover,
.nav-link:focus {
  color: #8b5cf6 !important;
}

.nav-link.router-link-active {
  color: #8b5cf6 !important;
  font-weight: 600;
}
</style>