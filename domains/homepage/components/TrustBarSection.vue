<template>
  <!-- Trust Bar with Partner Logos -->
  <section class="py-4 bg-light border-top border-bottom">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-3 text-center text-lg-start mb-3 mb-lg-0">
          <p class="text-muted small mb-0 fw-semibold text-uppercase letter-spacing">Trusted Partners</p>
        </div>
        <div class="col-lg-9">
          <div class="d-flex justify-content-center justify-content-lg-end align-items-center flex-wrap gap-4 gap-md-5">
            <!-- AWS Logo -->
            <div class="partner-logo">
              <svg height="30" viewBox="0 0 80 30" class="text-muted">
                <text x="0" y="20" font-size="18" font-weight="bold" fill="currentColor">AWS</text>
              </svg>
            </div>

            <!-- Microsoft Azure Logo -->
            <div class="partner-logo">
              <svg height="30" viewBox="0 0 100 30" class="text-primary">
                <text x="0" y="20" font-size="16" font-weight="bold" fill="currentColor">Azure</text>
              </svg>
            </div>

            <!-- Google Cloud Logo -->
            <div class="partner-logo">
              <svg height="30" viewBox="0 0 120 30" class="text-muted">
                <text x="0" y="20" font-size="14" font-weight="bold" fill="currentColor">Google Cloud</text>
              </svg>
            </div>

            <!-- Snowflake Logo -->
            <div class="partner-logo">
              <svg height="30" viewBox="0 0 120 30" class="text-info">
                <text x="0" y="20" font-size="14" font-weight="bold" fill="currentColor">SNOWFLAKE</text>
              </svg>
            </div>

            <!-- Databricks Logo -->
            <div class="partner-logo">
              <svg height="30" viewBox="0 0 120 30" class="text-danger">
                <text x="0" y="20" font-size="14" font-weight="bold" fill="currentColor">DATABRICKS</text>
              </svg>
            </div>

            <!-- Tableau Logo -->
            <div class="partner-logo">
              <svg height="30" viewBox="0 0 100 30" class="text-warning">
                <text x="0" y="20" font-size="14" font-weight="bold" fill="currentColor">TABLEAU</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.letter-spacing {
  letter-spacing: 2px;
}

.hover-opacity-100 {
  transition: opacity 0.3s ease;
  cursor: pointer;
}

.hover-opacity-100:hover {
  opacity: 1 !important;
}
</style>