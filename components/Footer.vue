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
            <div class="d-flex gap-3">
              <NuxtLink class="btn btn-icon btn-sm btn-outline-light rounded-circle"
                       href="https://linkedin.com/company/gamma-neutral-consulting"
                       target="_blank" rel="noopener" aria-label="LinkedIn">
                <i class="ai-linkedin"></i>
              </NuxtLink>
              <NuxtLink class="btn btn-icon btn-sm btn-outline-light rounded-circle"
                       href="https://twitter.com/gammaneutral"
                       target="_blank" rel="noopener" aria-label="Twitter">
                <i class="ai-x"></i>
              </NuxtLink>
              <NuxtLink class="btn btn-icon btn-sm btn-outline-light rounded-circle"
                       href="mailto:info@gammaneutral.ca"
                       aria-label="Email">
                <i class="ai-mail"></i>
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
          </ul>
        </div>

        <!-- Industries -->
        <div class="col-lg-2 col-md-6">
          <h6 class="text-white fw-bold mb-3">Industries</h6>
          <ul class="list-unstyled">
            <li class="mb-2">
              <NuxtLink class="text-light text-decoration-none hover-primary" to="/industries/banking">
                Banking & Finance
              </NuxtLink>
            </li>
            <li class="mb-2">
              <NuxtLink class="text-light text-decoration-none hover-primary" to="/industries/healthcare">
                Healthcare
              </NuxtLink>
            </li>
            <li class="mb-2">
              <NuxtLink class="text-light text-decoration-none hover-primary" to="/industries/government">
                Government
              </NuxtLink>
            </li>
            <li class="mb-2">
              <NuxtLink class="text-light text-decoration-none hover-primary" to="/industries/education">
                Education
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
              <i class="ai-map-pin text-primary me-2 mt-1"></i>
              <small class="text-light">
                Toronto, Ontario<br>Canada
              </small>
            </div>
            <div class="d-flex align-items-center mb-2">
              <i class="ai-phone text-primary me-2"></i>
              <small class="text-light">
                <a href="tel:+14161234567" class="text-light text-decoration-none hover-primary">
                  +1 (416) 123-4567
                </a>
              </small>
            </div>
            <div class="d-flex align-items-center">
              <i class="ai-mail text-primary me-2"></i>
              <small class="text-light">
                <a href="mailto:info@gammaneutral.ca" class="text-light text-decoration-none hover-primary">
                  {{ $t('footer.email', 'info@gammaneutral.ca') }}
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

<script>
import { useThemeStore } from "../stores/theme";
import { computed } from "vue";
import HeaderLogo from "./logo/HeaderLogo.vue";

export default {
  name: "Footer",
  components: {
    HeaderLogo
  },
  setup() {
    const store = useThemeStore();

    const logoUrl = computed(() => store.mode ? '/img/logos/white-logo.png' : '/img/logos/black-logo.png');

    return {
      logoUrl
    };
  }
};
</script>

<style scoped>
.hover-primary {
  transition: color 0.2s ease-in-out;
}

.hover-primary:hover {
  color: var(--bs-primary) !important;
}

.footer {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
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
