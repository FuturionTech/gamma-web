<template>
  <!-- Trust Signals Section -->
  <section class="py-5 bg-light">
    <div class="container">
      <!-- Header -->
      <div class="text-center mb-5">
        <h2 class="h1 mb-3">Trusted by Industry Leaders</h2>
        <p class="fs-lg text-muted">
          Fortune 500 companies and government agencies rely on our data expertise
        </p>
      </div>

      <!-- Partner Logos Grid -->
      <div class="row g-4 mb-5">
        <div class="col-6 col-md-4 col-lg-2">
          <div class="text-center p-3">
            <div class="h4 fw-bold text-primary mb-0">AWS</div>
            <small class="text-muted">Partner</small>
          </div>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <div class="text-center p-3">
            <div class="h4 fw-bold text-info mb-0">Azure</div>
            <small class="text-muted">Partner</small>
          </div>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <div class="text-center p-3">
            <div class="h4 fw-bold text-success mb-0">Google</div>
            <small class="text-muted">Cloud Partner</small>
          </div>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <div class="text-center p-3">
            <div class="h4 fw-bold text-warning mb-0">Snowflake</div>
            <small class="text-muted">Partner</small>
          </div>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <div class="text-center p-3">
            <div class="h4 fw-bold text-danger mb-0">Databricks</div>
            <small class="text-muted">Partner</small>
          </div>
        </div>
        <div class="col-6 col-md-4 col-lg-2">
          <div class="text-center p-3">
            <div class="h4 fw-bold text-purple mb-0">Tableau</div>
            <small class="text-muted">Partner</small>
          </div>
        </div>
      </div>

      <!-- Certifications & Awards -->
      <div class="row g-4 align-items-center pt-5 border-top">
        <div class="col-lg-4">
          <h3 class="h3 mb-3">Industry Certifications</h3>
          <p class="text-muted">
            Our commitment to excellence is recognized by leading industry organizations
          </p>
        </div>
        <div class="col-lg-8">
          <div class="row g-3">
            <!-- ISO 27001 -->
            <div class="col-6 col-md-4">
              <div class="d-flex align-items-center p-3 rounded-3 bg-white">
                <div class="bg-success bg-opacity-10 rounded-3 p-2 me-3">
                  <i class="bi bi-shield-check text-success fs-4"></i>
                </div>
                <div>
                  <h6 class="small mb-0">ISO 27001</h6>
                  <small class="text-muted">Certified</small>
                </div>
              </div>
            </div>

            <!-- SOC 2 Type II -->
            <div class="col-6 col-md-4">
              <div class="d-flex align-items-center p-3 rounded-3 bg-white">
                <div class="bg-primary bg-opacity-10 rounded-3 p-2 me-3">
                  <i class="bi bi-lock text-primary fs-4"></i>
                </div>
                <div>
                  <h6 class="small mb-0">SOC 2</h6>
                  <small class="text-muted">Type II</small>
                </div>
              </div>
            </div>

            <!-- GDPR Compliant -->
            <div class="col-6 col-md-4">
              <div class="d-flex align-items-center p-3 rounded-3 bg-white">
                <div class="bg-info bg-opacity-10 rounded-3 p-2 me-3">
                  <i class="bi bi-file-check text-info fs-4"></i>
                </div>
                <div>
                  <h6 class="small mb-0">GDPR</h6>
                  <small class="text-muted">Compliant</small>
                </div>
              </div>
            </div>

            <!-- Gartner -->
            <div class="col-6 col-md-4">
              <div class="d-flex align-items-center p-3 rounded-3 bg-white">
                <div class="bg-warning bg-opacity-10 rounded-3 p-2 me-3">
                  <i class="bi bi-award text-warning fs-4"></i>
                </div>
                <div>
                  <h6 class="small mb-0">Gartner</h6>
                  <small class="text-muted">Leader 2024</small>
                </div>
              </div>
            </div>

            <!-- AWS Advanced -->
            <div class="col-6 col-md-4">
              <div class="d-flex align-items-center p-3 rounded-3 bg-white">
                <div class="bg-danger bg-opacity-10 rounded-3 p-2 me-3">
                  <i class="bi bi-star text-danger fs-4"></i>
                </div>
                <div>
                  <h6 class="small mb-0">AWS</h6>
                  <small class="text-muted">Advanced</small>
                </div>
              </div>
            </div>

            <!-- Microsoft Gold -->
            <div class="col-6 col-md-4">
              <div class="d-flex align-items-center p-3 rounded-3 bg-white">
                <div class="bg-purple bg-opacity-10 rounded-3 p-2 me-3">
                  <i class="bi bi-trophy text-purple fs-4"></i>
                </div>
                <div>
                  <h6 class="small mb-0">Microsoft</h6>
                  <small class="text-muted">Gold Partner</small>
                </div>
              </div>
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
/* Custom Colors */
.text-purple {
  color: #6f42c1;
}

.bg-purple {
  background-color: #6f42c1;
}

/* Card Styles */
.bg-white {
  background-color: #fff !important;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.bg-white:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

/* Border */
.border-top {
  border-color: rgba(0, 0, 0, 0.1) !important;
}

/* Responsive */
@media (max-width: 768px) {
  .h3 {
    font-size: 1.5rem;
  }
}
</style>