<template>
  <div class="d-flex align-items-center justify-content-center">
    <NuxtLink class="navbar-brand pe-sm-3" to="/">
      <span class="text-primary flex-shrink-0 me-2 position-relative d-inline-block">
        <div class="d-flex align-items-center">
          <div class="logo-text">
            <span class="fw-bold fs-3 text-dark">Gamma</span>
            <span class="fw-light fs-3 text-muted">Neutral</span>
          </div>
        </div>
      </span>
    </NuxtLink>
  </div>
</template>

<style scoped>
.logo-text {
  font-family: 'Arial', sans-serif;
  letter-spacing: -1px;
}

/* Responsivité du logo en fonction de la taille d'écran */
@media (max-width: 768px) {
  .logo-text .fs-3 {
    font-size: 1.5rem !important;
  }
}

@media (max-width: 576px) {
  .logo-text .fs-3 {
    font-size: 1.25rem !important;
  }
}
</style>