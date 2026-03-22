<template>
  <li class="nav-item">
    <NuxtLink class="nav-link fw-semibold" to="/" exact>
      {{ $t('nav.home') }}
    </NuxtLink>
  </li>
  <li class="nav-item">
    <NuxtLink class="nav-link fw-semibold" to="/services">
      {{ $t('nav.services') }}
    </NuxtLink>
  </li>
</template>

<script setup>
// Primary nav links — Home + Services
</script>

<style>
/* HomeMenu nav styles — unscoped so they apply to multi-root li elements */
.nav-item .nav-link {
  transition: color 0.2s ease-in-out;
}
</style>
