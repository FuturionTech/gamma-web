<template>
  <li class="nav-item dropdown">
    <NuxtLink class="nav-link dropdown-toggle fw-semibold" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" role="button">
      Industries
    </NuxtLink>
    <div class="dropdown-menu dropdown-menu-end p-4 shadow-lg border-0" style="min-width: 380px;">
      <div class="mb-3">
        <h6 class="dropdown-header text-primary fw-bold px-0 pb-2">
          <i class="ai-briefcase text-primary me-2"></i>
          Industry Expertise
        </h6>
        <p class="text-muted small mb-3 px-0">Specialized data solutions across key sectors</p>
      </div>

      <div class="row g-2">
        <div class="col-12">
          <NuxtLink class="dropdown-item rounded-2 py-3" to="/industries/banking">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 me-3">
                <div class="bg-primary-subtle rounded-circle p-2">
                  <i class="ai-credit-card text-primary"></i>
                </div>
              </div>
              <div>
                <div class="fw-semibold">Banking & Financial Services</div>
                <small class="text-muted">Risk analysis, fraud detection, regulatory compliance</small>
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="col-12">
          <NuxtLink class="dropdown-item rounded-2 py-3" to="/industries/healthcare">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 me-3">
                <div class="bg-success-subtle rounded-circle p-2">
                  <i class="ai-heart text-success"></i>
                </div>
              </div>
              <div>
                <div class="fw-semibold">Healthcare Services</div>
                <small class="text-muted">Patient analytics, clinical insights, health informatics</small>
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="col-12">
          <NuxtLink class="dropdown-item rounded-2 py-3" to="/industries/government">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 me-3">
                <div class="bg-info-subtle rounded-circle p-2">
                  <i class="ai-map-pin text-info"></i>
                </div>
              </div>
              <div>
                <div class="fw-semibold">Government & Public Services</div>
                <small class="text-muted">Public policy analytics, citizen services optimization</small>
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="col-12">
          <NuxtLink class="dropdown-item rounded-2 py-3" to="/industries/education">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 me-3">
                <div class="bg-warning-subtle rounded-circle p-2">
                  <i class="ai-book text-warning"></i>
                </div>
              </div>
              <div>
                <div class="fw-semibold">Education & Training</div>
                <small class="text-muted">Learning analytics, student performance insights</small>
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="col-12">
          <NuxtLink class="dropdown-item rounded-2 py-3" to="/industries/business">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 me-3">
                <div class="bg-secondary-subtle rounded-circle p-2">
                  <i class="ai-briefcase text-secondary"></i>
                </div>
              </div>
              <div>
                <div class="fw-semibold">Business Management</div>
                <small class="text-muted">Operations optimization, strategic planning</small>
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="col-12">
          <NuxtLink class="dropdown-item rounded-2 py-3" to="/industries/ngo">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 me-3">
                <div class="bg-danger-subtle rounded-circle p-2">
                  <i class="ai-users text-danger"></i>
                </div>
              </div>
              <div>
                <div class="fw-semibold">Non-Governmental Organizations</div>
                <small class="text-muted">Impact measurement, donor analytics, program evaluation</small>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Call to Action -->
      <hr class="my-3">
      <div class="text-center">
        <NuxtLink class="btn btn-primary btn-sm" to="/contact">
          <i class="ai-phone-call me-2"></i>
          Discuss Your Industry Needs
        </NuxtLink>
      </div>
    </div>
  </li>
</template>

<script setup>
</script>

<style scoped>
.dropdown-toggle {
  color: white !important;
  transition: color 0.2s ease-in-out;
}

.dropdown-toggle:hover,
.dropdown-toggle:focus {
  color: #8b5cf6 !important;
}

.dropdown-menu {
  border-radius: 1rem;
  margin-top: 0.5rem;
}

.dropdown-item {
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  margin-bottom: 0.25rem;
}

.dropdown-item:hover {
  background-color: var(--bs-primary-bg-subtle);
  transform: translateX(4px);
}

.dropdown-header {
  border-bottom: 1px solid var(--bs-border-color);
}

@media (max-width: 991.98px) {
  .dropdown-menu {
    min-width: auto !important;
    width: 100%;
  }
}
</style>