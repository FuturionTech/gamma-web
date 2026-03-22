<template>
  <li class="nav-item">
    <NuxtLink class="nav-link fw-semibold" to="/" exact>
      Home
    </NuxtLink>
  </li>
  <li class="nav-item">
    <NuxtLink class="nav-link fw-semibold" to="/services">
      Services
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
