<template>
  <div class="d-flex align-items-center justify-content-center">
    <NuxtLink class="navbar-brand pe-sm-3" to="/">
      <span class="text-primary flex-shrink-0 me-2 position-relative d-inline-block">
        <div class="d-flex align-items-center">
          <div class="logo-text">
            <span class="fw-bold fs-3 text-dark">Gamma</span>
            <span class="fw-light fs-3" style="color: rgba(255,255,255,0.8);">Neutral</span>
            <span class="fw-light fs-4 logo-consulting">Consulting</span>
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
  display: inline-flex;
  align-items: baseline;
}

.logo-consulting {
  color: #8b5cf6;
  margin-left: 0.35rem;
  letter-spacing: 0;
  font-weight: 500 !important;
}

/* Responsivité du logo en fonction de la taille d'écran */
@media (max-width: 991px) {
  .logo-consulting {
    font-size: 1.15rem !important;
  }
}

@media (max-width: 768px) {
  .logo-text .fs-3 {
    font-size: 1.4rem !important;
  }
  .logo-consulting {
    font-size: 1rem !important;
    margin-left: 0.25rem;
  }
}

@media (max-width: 576px) {
  .logo-text .fs-3 {
    font-size: 1.1rem !important;
  }
  .logo-consulting {
    font-size: 0.85rem !important;
  }
}
</style>