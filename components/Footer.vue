<template>
  <footer class="footer" data-bs-theme="dark">
    <div class="container">
      <!-- Main Footer Content -->
      <div class="row g-4 g-lg-5 pb-5">
        <!-- Company Info — Brand + tagline + email -->
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <HeaderLogo :theme="'dark'" class="mb-3"/>
          <p class="footer-text mb-4" style="max-width: 300px;">
            {{ $t('footer.tagline') }}
          </p>

          <!-- Email CTA -->
          <a :href="company.mailtoHref"
             class="footer-email-link d-inline-flex align-items-center gap-2">
            <span class="footer-email-icon">
              <i class="bi bi-envelope"></i>
            </span>
            <span>{{ company.email }}</span>
          </a>
        </div>

        <!-- Services -->
        <div class="col-lg-3 col-md-6">
          <h6 class="footer-heading">{{ $t('footer.services') }}</h6>
          <ul class="footer-links">
            <li
              v-for="item in serviceNavItems"
              :key="item.key"
            >
              <NuxtLink :to="item.link">{{ item.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div class="col-lg-2 col-6">
          <h6 class="footer-heading">{{ $t('footer.company') }}</h6>
          <ul class="footer-links">
            <li><NuxtLink to="/about">{{ $t('footer.companyItems.about') }}</NuxtLink></li>
            <li><NuxtLink to="/services">{{ $t('footer.services') }}</NuxtLink></li>
            <li><NuxtLink to="/careers">{{ $t('footer.companyItems.careers') }}</NuxtLink></li>
            <li><NuxtLink to="/faq">{{ $t('footer.companyItems.faq') }}</NuxtLink></li>
            <li><NuxtLink to="/contact">{{ $t('footer.companyItems.contact') }}</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="col-lg-3 col-6">
          <h6 class="footer-heading">{{ $t('footer.contactInfo') }}</h6>
          <ul class="footer-links footer-contact">
            <li>
              <i class="bi bi-geo-alt me-2 footer-icon"></i>
              <span>{{ company.address.line1 }}<br>{{ company.address.line2 }}</span>
            </li>
            <li>
              <i class="bi bi-envelope me-2 footer-icon"></i>
              <a :href="company.mailtoHref">{{ company.email }}</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="footer-divider"></div>

      <!-- Powered By -->
      <div class="footer-powered-by">
        <a href="https://futurion.tech" target="_blank" rel="noopener noreferrer" class="powered-by-pill">
          {{ $t('footer.poweredBy') }} <span class="powered-by-brand">Futurion</span>
        </a>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p class="footer-copyright">
          &copy; {{ new Date().getFullYear() }} {{ $t('footer.copyright') }}
        </p>
        <nav class="footer-bottom-nav">
          <NuxtLink to="/privacy-policy">{{ $t('footer.privacyPolicy') }}</NuxtLink>
          <NuxtLink to="/terms-of-service">{{ $t('footer.termsOfService') }}</NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const { t } = useI18n()
const company = useCompanyInfo()

// Service nav items linking to individual service detail pages
const serviceKeys = ['ai', 'dataEngineering', 'cloud', 'cybersecurity', 'bi', 'bigData']

const serviceNavItems = computed(() =>
  serviceKeys.map((key) => ({
    key,
    label: t(`footer.servicesItems.${key}`),
    link: `/services/${t(`services.${key}.slug`)}`,
  }))
)
</script>

<style scoped>
/* ================================
   FOOTER BASE — pure black for max contrast
   ================================ */
.footer {
  background: #000000 !important;
  padding: 4rem 0 2rem;
  overflow-x: hidden;
}

/* ================================
   TYPOGRAPHY — high contrast text
   ================================ */
.footer-heading {
  color: #ffffff;
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1.25rem;
}

.footer-text {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.9rem;
  line-height: 1.7;
}

/* ================================
   LINKS — visible on black
   ================================ */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.65rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease, transform 0.2s ease;
  display: inline-block;
}

.footer-links a:hover {
  color: #ffffff;
  transform: translateX(3px);
}

/* Contact list */
.footer-contact li {
  display: flex;
  align-items: flex-start;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.footer-contact a {
  color: rgba(255, 255, 255, 0.7);
}

.footer-contact a:hover {
  color: #ffffff;
}

.footer-icon {
  color: #a78bfa;
  flex-shrink: 0;
  margin-top: 2px;
}

/* ================================
   EMAIL CTA
   ================================ */
.footer-email-link {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.footer-email-link:hover {
  color: #ffffff;
  border-color: rgba(139, 92, 246, 0.5);
  background: rgba(139, 92, 246, 0.1);
}

.footer-email-icon {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(139, 92, 246, 0.2);
  color: #a78bfa;
  font-size: 0.8rem;
}

/* ================================
   DIVIDER + BOTTOM
   ================================ */
.footer-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.12);
  margin-bottom: 1.5rem;
}

/* ================================
   POWERED BY PILL
   ================================ */
.footer-powered-by {
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.powered-by-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 1.25rem;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.powered-by-pill:hover {
  background: rgba(139, 92, 246, 0.1);
  border-color: rgba(139, 92, 246, 0.3);
  color: rgba(255, 255, 255, 0.85);
}

.powered-by-brand {
  color: #8b5cf6;
  font-weight: 700;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-copyright {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
  margin: 0;
}

.footer-bottom-nav {
  display: flex;
  gap: 1.5rem;
}

.footer-bottom-nav a {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 0.8rem;
  transition: color 0.2s ease;
}

.footer-bottom-nav a:hover {
  color: rgba(255, 255, 255, 0.9);
}

/* ================================
   MOBILE
   ================================ */
@media (max-width: 991.98px) {
  .footer {
    padding: 3rem 0 1.5rem;
  }
}

@media (max-width: 767.98px) {
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }

  .footer-bottom-nav {
    justify-content: center;
  }

  .footer-text {
    max-width: none !important;
  }

  .footer-email-link {
    justify-content: center;
  }
}

@media (max-width: 575.98px) {
  .footer-links a {
    font-size: 0.9rem;
    padding: 0.15rem 0;
  }

  .footer-links li {
    margin-bottom: 0.75rem;
  }

  .footer-email-link {
    font-size: 0.8rem;
    padding: 0.4rem 0.75rem;
    word-break: break-all;
    max-width: 100%;
  }

  .footer-contact a {
    word-break: break-all;
  }
}

/* ================================
   ACCESSIBILITY
   ================================ */
.footer-links a:focus-visible,
.footer-email-link:focus-visible,
.footer-bottom-nav a:focus-visible {
  outline: 2px solid #8b5cf6;
  outline-offset: 2px;
  border-radius: 4px;
}

@media (prefers-reduced-motion: reduce) {
  .footer-links a,
  .footer-email-link,
  .footer-bottom-nav a {
    transition: none !important;
  }
}
</style>
