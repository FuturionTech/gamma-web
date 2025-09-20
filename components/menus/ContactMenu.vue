<template>
  <li class="nav-item">
    <NuxtLink class="nav-link fw-semibold" to="/contact">
      {{ $t('header.contact_us') }}
    </NuxtLink>
  </li>
</template>

<script setup>
</script>

<style scoped>
.nav-link {
  color: var(--bs-gray-800);
  transition: color 0.2s ease-in-out;
}

.nav-link:hover,
.nav-link:focus {
  color: var(--bs-primary);
}
</style>
