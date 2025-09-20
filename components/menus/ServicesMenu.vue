<template>
  <li class="nav-item dropdown">
    <NuxtLink class="nav-link dropdown-toggle fw-semibold" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" role="button">
      Services
    </NuxtLink>
    <div class="dropdown-menu dropdown-menu-lg p-4 shadow-lg border-0" style="min-width: 540px;">
      <div class="row g-4">
        <!-- Data & Analytics Services -->
        <div class="col-6">
          <h6 class="dropdown-header text-primary fw-bold px-0 pb-2">
            <i class="ai-bar-chart-2 text-primary me-2"></i>
            Data & Analytics
          </h6>
          <NuxtLink class="dropdown-item rounded-2 py-2" to="/services/artificial-intelligence">
            <div class="d-flex align-items-start">
              <i class="ai-chip text-muted me-3 mt-1"></i>
              <div>
                <div class="fw-semibold">Artificial Intelligence</div>
                <small class="text-muted">ML models & automation</small>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink class="dropdown-item rounded-2 py-2" to="/services/data-engineering">
            <div class="d-flex align-items-start">
              <i class="ai-database text-muted me-3 mt-1"></i>
              <div>
                <div class="fw-semibold">Data Engineering</div>
                <small class="text-muted">Data pipelines & ETL</small>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink class="dropdown-item rounded-2 py-2" to="/services/business-intelligence">
            <div class="d-flex align-items-start">
              <i class="ai-pie-chart text-muted me-3 mt-1"></i>
              <div>
                <div class="fw-semibold">Business Intelligence</div>
                <small class="text-muted">Insights & reporting</small>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink class="dropdown-item rounded-2 py-2" to="/services/big-data">
            <div class="d-flex align-items-start">
              <i class="ai-server text-muted me-3 mt-1"></i>
              <div>
                <div class="fw-semibold">Big Data Solutions</div>
                <small class="text-muted">Large-scale processing</small>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- Technology & Management Services -->
        <div class="col-6">
          <h6 class="dropdown-header text-primary fw-bold px-0 pb-2">
            <i class="ai-settings text-primary me-2"></i>
            Technology & Management
          </h6>
          <NuxtLink class="dropdown-item rounded-2 py-2" to="/services/cybersecurity">
            <div class="d-flex align-items-start">
              <i class="ai-shield text-muted me-3 mt-1"></i>
              <div>
                <div class="fw-semibold">Cybersecurity</div>
                <small class="text-muted">Security & compliance</small>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink class="dropdown-item rounded-2 py-2" to="/services/cloud-computing">
            <div class="d-flex align-items-start">
              <i class="ai-cloud text-muted me-3 mt-1"></i>
              <div>
                <div class="fw-semibold">Cloud Computing</div>
                <small class="text-muted">Cloud migration & ops</small>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink class="dropdown-item rounded-2 py-2" to="/services/project-management">
            <div class="d-flex align-items-start">
              <i class="ai-layers text-muted me-3 mt-1"></i>
              <div>
                <div class="fw-semibold">Project Management</div>
                <small class="text-muted">Agile delivery & PMO</small>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Call to Action -->
      <hr class="my-3">
      <div class="d-flex align-items-center justify-content-between">
        <NuxtLink class="btn btn-outline-primary btn-sm" to="/services">
          View All Services
        </NuxtLink>
        <NuxtLink class="btn btn-primary btn-sm" to="/contact">
          <i class="ai-phone-call me-2"></i>
          Get Consultation
        </NuxtLink>
      </div>
    </div>
  </li>
</template>

<script setup>
// Removed useLocalePath as it's not needed with current routing setup
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
  margin-bottom: 0.5rem;
}

@media (max-width: 991.98px) {
  .dropdown-menu {
    min-width: auto !important;
    width: 100%;
  }

  .row {
    flex-direction: column;
  }

  .col-6 {
    width: 100%;
  }
}
</style>
