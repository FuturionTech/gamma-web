<template>
  <li class="nav-item">
    <NuxtLink class="nav-link fw-semibold" to="/">
      {{ $t('header.home') }}
    </NuxtLink>
  </li>
</template>

<script setup>
// Removed useLocalePath as it's not needed with current routing setup
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