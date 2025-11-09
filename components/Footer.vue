<template>
  <footer class="footer bg-dark py-5" data-bs-theme="dark">
    <div class="container">
      <!-- Main Footer Content -->
      <div class="row g-4 pb-5">
        <!-- Company Info -->
        <div class="col-lg-4 col-md-6">
          <div class="mb-4">
            <HeaderLogo :theme="'dark'" class="mb-3"/>
            <p class="text-light mb-4">
              Transform data into opportunity. Empower businesses to harness data potential with expert consulting in AI, cybersecurity, and business intelligence.
            </p>
            <!-- Social media links removed - to be added when accounts are created -->
            <div class="d-flex gap-3">
              <NuxtLink class="btn btn-icon btn-sm btn-outline-light rounded-circle"
                       href="mailto:info@gammaneutral.ca"
                       aria-label="Email">
                <i class="bi bi-envelope-fill"></i>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Services -->
        <div class="col-lg-2 col-md-6">
          <h6 class="text-white fw-bold mb-3">Services</h6>
          <ul class="list-unstyled">
            <li class="mb-2">
              <NuxtLink class="text-light text-decoration-none hover-primary" to="/services/artificial-intelligence">
                AI Solutions
              </NuxtLink>
            </li>
            <li class="mb-2">
              <NuxtLink class="text-light text-decoration-none hover-primary" to="/services/data-engineering">
                Data Engineering
              </NuxtLink>
            </li>
            <li class="mb-2">
              <NuxtLink class="text-light text-decoration-none hover-primary" to="/services/cybersecurity">
                Cybersecurity
              </NuxtLink>
            </li>
            <li class="mb-2">
              <NuxtLink class="text-light text-decoration-none hover-primary" to="/services/business-intelligence">
                Business Intelligence
              </NuxtLink>
            </li>
            <li class="mb-2">
              <NuxtLink class="text-light text-decoration-none hover-primary" to="/services/cloud-computing">
                Cloud Computing
              </NuxtLink>
            </li>
            <li class="mb-2">
              <NuxtLink class="text-light text-decoration-none hover-primary" to="/services/big-data">
                Big Data
              </NuxtLink>
            </li>
            <li class="mb-2">
              <NuxtLink class="text-light text-decoration-none hover-primary" to="/services/project-management">
                Project Management
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Industries -->
        <div class="col-lg-2 col-md-6">
          <h6 class="text-white fw-bold mb-3">Industries</h6>
          <ul class="list-unstyled">
            <li class="mb-2">
              <NuxtLink class="text-light text-decoration-none hover-primary" to="/industries/banking">
                Banks & Financial Services
              </NuxtLink>
            </li>
            <li class="mb-2">
              <NuxtLink class="text-light text-decoration-none hover-primary" to="/industries/healthcare">
                Healthcare Services
              </NuxtLink>
            </li>
            <li class="mb-2">
              <NuxtLink class="text-light text-decoration-none hover-primary" to="/industries/government">
                Governments & Public Services
              </NuxtLink>
            </li>
            <li class="mb-2">
              <NuxtLink class="text-light text-decoration-none hover-primary" to="/industries/education">
                Education & Training
              </NuxtLink>
            </li>
            <li class="mb-2">
              <NuxtLink class="text-light text-decoration-none hover-primary" to="/industries/business">
                Business Management
              </NuxtLink>
            </li>
            <li class="mb-2">
              <NuxtLink class="text-light text-decoration-none hover-primary" to="/industries/ngo">
                NGOs
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div class="col-lg-2 col-md-6">
          <h6 class="text-white fw-bold mb-3">Company</h6>
          <ul class="list-unstyled">
            <li class="mb-2">
              <NuxtLink class="text-light text-decoration-none hover-primary" to="/about">
                About Us
              </NuxtLink>
            </li>
            <li class="mb-2">
              <NuxtLink class="text-light text-decoration-none hover-primary" to="/resources/careers">
                Careers
              </NuxtLink>
            </li>
            <li class="mb-2">
              <NuxtLink class="text-light text-decoration-none hover-primary" to="/resources/case-studies">
                Case Studies
              </NuxtLink>
            </li>
            <li class="mb-2">
              <NuxtLink class="text-light text-decoration-none hover-primary" to="/contact">
                Contact Us
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="col-lg-2 col-md-6">
          <h6 class="text-white fw-bold mb-3">Contact Info</h6>
          <div class="mb-3">
            <div class="d-flex align-items-start mb-2">
              <i class="bi bi-geo-alt-fill text-primary me-2 mt-1"></i>
              <small class="text-light">
                108 Redpath Ave, Suite 19<br>Toronto, ON M4S 2J7<br>Canada
              </small>
            </div>
            <div class="d-flex align-items-center">
              <i class="bi bi-envelope-fill text-primary me-2"></i>
              <small class="text-light">
                <a href="mailto:info@gammaneutral.ca" class="text-light text-decoration-none hover-primary">
                  info@gammaneutral.ca
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="border-top border-secondary pt-4">
        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-start">
            <p class="text-light mb-0 small">
              &copy; {{ new Date().getFullYear() }} Gamma Neutral Consulting Inc.
              All rights reserved.
            </p>
          </div>
          <div class="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <nav class="nav justify-content-center justify-content-md-end">
              <NuxtLink class="nav-link text-light small hover-primary px-2" to="/privacy-policy">
                Privacy Policy
              </NuxtLink>
              <NuxtLink class="nav-link text-light small hover-primary px-2" to="/terms-of-service">
                Terms of Service
              </NuxtLink>
              <NuxtLink class="nav-link text-light small hover-primary px-2" to="/cookie-policy">
                Cookie Policy
              </NuxtLink>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Components auto-imported in Nuxt 3
</script>

<style scoped>
.hover-primary {
  transition: color 0.2s ease-in-out;
}

.hover-primary:hover {
  color: var(--bs-primary) !important;
}

.footer {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%) !important;
}

/* Override Bootstrap's bg-dark to ensure dark footer always */
.footer.bg-dark {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%) !important;
}

/* Ensure footer stays dark in all theme modes */
:global([data-bs-theme="light"]) .footer,
:global([data-bs-theme="dark"]) .footer {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%) !important;
}

.nav-link {
  transition: color 0.2s ease-in-out;
}

.btn-outline-light:hover {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
  transform: translateY(-2px);
}

@media (max-width: 767.98px) {
  .footer .col-lg-4,
  .footer .col-lg-2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .footer .d-flex {
    justify-content: center;
  }
}
</style>
