<template>
  <header
    class="navbar navbar-expand-lg fixed-top"
    :class="[navbarClasses]"
    data-bs-theme="dark"
  >
    <div class="container">

      <!-- Navbar brand (Logo) -->
      <HeaderLogo/>

      <!-- Mobile: hamburger only -->
      <button
        class="mobile-menu-toggle d-lg-none"
        type="button"
        :aria-expanded="isMobileOpen"
        aria-label="Toggle navigation"
        @click="isMobileOpen = !isMobileOpen"
      >
        <span class="toggle-bar" :class="{ open: isMobileOpen }"></span>
      </button>

      <!-- Desktop navigation -->
      <nav class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <HomeMenu/>
          <li class="nav-item">
            <NuxtLink class="nav-link fw-semibold" to="/about">{{ $t('nav.about') }}</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link fw-semibold" to="/careers">{{ $t('nav.careers') }}</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link fw-semibold" to="/faq">{{ $t('breadcrumbs.faq') }}</NuxtLink>
          </li>
        </ul>

        <!-- Desktop CTA and Language -->
        <div class="d-none d-lg-flex align-items-center">
          <ThemeToggle class="me-3"/>
          <LanguageSelector class="me-3"/>
          <NuxtLink class="btn btn-primary" to="/contact">
            <i class="ai-phone-call fs-sm me-2"></i>
            {{ $t('nav.bookCall') }}
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>

  <!-- Fullscreen Mobile Menu Overlay -->
  <Teleport to="body">
    <Transition name="mobile-menu">
      <div v-if="isMobileOpen" class="mobile-overlay">
        <!-- Top bar: close button only -->
        <div class="mobile-overlay-header">
          <div></div>
          <button class="mobile-close-btn" @click="isMobileOpen = false" aria-label="Close menu">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>

        <!-- Content -->
        <div class="mobile-overlay-content">
          <!-- Nav Links -->
          <nav class="mobile-nav">
            <NuxtLink
              v-for="(link, i) in mobileLinks"
              :key="link.to"
              :to="link.to"
              class="mobile-nav-link"
              :style="{ animationDelay: `${0.05 + i * 0.07}s` }"
              @click="isMobileOpen = false"
            >
              <span class="mobile-nav-icon"><i :class="link.icon"></i></span>
              <span>{{ $t(link.label) }}</span>
            </NuxtLink>
          </nav>

          <!-- CTA -->
          <div class="mobile-cta" :style="{ animationDelay: `${0.05 + mobileLinks.length * 0.07}s` }">
            <NuxtLink class="btn btn-primary btn-lg rounded-pill px-5 py-3 w-100" to="/contact" @click="isMobileOpen = false">
              <i class="bi bi-calendar-check me-2"></i>
              {{ $t('nav.bookCall') }}
            </NuxtLink>
          </div>
        </div>

        <!-- Bottom: theme + language + tagline -->
        <div class="mobile-overlay-footer">
          <div class="mobile-preferences">
            <div class="mobile-pref-item" @click.stop>
              <ThemeToggle />
            </div>
            <div class="mobile-pref-divider"></div>
            <div class="mobile-pref-item" @click.stop>
              <LanguageSelector />
            </div>
          </div>
          <p class="mobile-tagline">Gamma Neutral Consulting Inc.</p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import HomeMenu from "./menus/HomeMenu.vue";
import LanguageSelector from "./selectors/LanguageSelector.vue";
import ThemeToggle from "./selectors/ThemeToggle.vue";
import HeaderLogo from "./logo/HeaderLogo.vue";

const { isScrolled, isMenuOpen, toggleMenu, closeMenu } = useNavbar()
const route = useRoute()

const isMobileOpen = ref(false)

const mobileLinks = [
  { to: '/', label: 'nav.home', icon: 'bi bi-house' },
  { to: '/services', label: 'nav.services', icon: 'bi bi-grid' },
  { to: '/about', label: 'nav.about', icon: 'bi bi-people' },
  { to: '/careers', label: 'nav.careers', icon: 'bi bi-briefcase' },
  { to: '/faq', label: 'breadcrumbs.faq', icon: 'bi bi-chat-dots' },
]

// Check if current page is homepage
const isHomePage = computed(() => route.path === '/')

// Compute navbar classes based on page and scroll state
const navbarClasses = computed(() => {
  return isHomePage.value
    ? (isScrolled.value ? 'navbar-scrolled' : 'navbar-transparent')
    : 'navbar-scrolled navbar-solid'
})

// Close mobile menu on route change
watch(() => route.path, () => {
  isMobileOpen.value = false
  closeMenu()
})

// Lock body scroll when mobile menu is open
watch(isMobileOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})
</script>


<style>
/* Sticky header transitions */
.navbar.fixed-top {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

/* Global styles for navbar states */
.navbar.navbar-transparent {
  background-color: rgba(0, 0, 0, 0.7) !important;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1) !important;
}

.navbar.navbar-solid {
  background-color: #1a1a1a !important;
  background: #1a1a1a !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

.navbar-transparent .navbar-brand,
.navbar-transparent .nav-link,
.navbar-transparent .dropdown-toggle,
.navbar-transparent .dropdown-item,
.navbar-transparent .btn {
  color: white !important;
}

.navbar-transparent .dropdown-toggle::after {
  border-top-color: white !important;
}

.navbar-transparent .btn-primary {
  background-color: #8b5cf6;
  border-color: #8b5cf6;
  color: white !important;
}

.navbar-transparent .dropdown-menu {
  background-color: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.navbar-transparent .dropdown-item {
  color: rgba(255, 255, 255, 0.8) !important;
}

.navbar-transparent .dropdown-item:hover {
  background-color: rgba(139, 92, 246, 0.2);
  color: white !important;
}

/* Scrolled navbar state */
.navbar.navbar-scrolled {
  background-color: #1a1a1a !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5) !important;
  transition: all 0.3s ease;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

.navbar.navbar-scrolled.navbar-solid {
  background-color: #1a1a1a !important;
  background: #1a1a1a !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  opacity: 1 !important;
}

.navbar-scrolled .navbar-brand,
.navbar-scrolled .nav-link,
.navbar-scrolled .dropdown-toggle,
.navbar-scrolled .dropdown-item {
  color: white !important;
}

.navbar-scrolled .dropdown-toggle::after {
  border-top-color: white !important;
}

.navbar-scrolled .btn-primary {
  background-color: #8b5cf6;
  border-color: #8b5cf6;
}

.navbar-scrolled .dropdown-menu {
  background-color: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Language selector styles */
.navbar-transparent .language-selector,
.navbar-scrolled .language-selector {
  color: white !important;
}

.navbar-transparent .language-selector .dropdown-toggle,
.navbar-scrolled .language-selector .dropdown-toggle {
  color: white !important;
}

/* ================================
   HAMBURGER TOGGLE
   ================================ */
.mobile-menu-toggle {
  width: 44px;
  height: 44px;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  z-index: 1060;
  transition: all 0.3s ease;
}

.mobile-menu-toggle:hover {
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.05);
}

.toggle-bar {
  position: relative;
  width: 20px;
  height: 2px;
  background: #ffffff;
  border-radius: 2px;
  transition: background 0.2s ease;
}

.toggle-bar::before,
.toggle-bar::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: #ffffff;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.toggle-bar::before {
  top: -6px;
}

.toggle-bar::after {
  top: 6px;
}

.toggle-bar.open {
  background: transparent;
}

.toggle-bar.open::before {
  top: 0;
  width: 22px;
  height: 2.5px;
  background: #ffffff;
  transform: rotate(45deg);
}

.toggle-bar.open::after {
  top: 0;
  width: 22px;
  height: 2.5px;
  background: #ffffff;
  transform: rotate(-45deg);
}

/* ================================
   FULLSCREEN MOBILE OVERLAY
   ================================ */
.mobile-overlay {
  position: fixed;
  inset: 0;
  z-index: 1050;
  background: #0a0a14;
  display: flex;
  flex-direction: column;
}

/* Transition */
.mobile-menu-enter-active {
  transition: opacity 0.3s ease;
}

.mobile-menu-leave-active {
  transition: opacity 0.2s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

/* ================================
   OVERLAY HEADER — logo + close
   ================================ */
.mobile-overlay-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  animation: mobileSlideIn 0.25s ease-out forwards;
  opacity: 0;
}

.mobile-overlay-logo {
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.mobile-overlay-logo .fw-light {
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
}

.mobile-close-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #ffffff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.mobile-close-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.2);
}

/* ================================
   OVERLAY CONTENT — nav + CTA
   ================================ */
.mobile-overlay-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.5rem;
  max-width: 360px;
  margin: 0 auto;
  width: 100%;
}

/* ================================
   MOBILE NAV LINKS
   ================================ */
.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 2rem;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.875rem 1.25rem;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 1.15rem;
  font-weight: 600;
  border-radius: 14px;
  transition: all 0.2s ease;
  animation: mobileSlideIn 0.4s ease-out forwards;
  opacity: 0;
  transform: translateY(12px);
}

.mobile-nav-link:hover,
.mobile-nav-link:focus {
  color: #ffffff;
  background: rgba(139, 92, 246, 0.1);
}

.mobile-nav-link.router-link-active {
  color: #ffffff;
  background: rgba(139, 92, 246, 0.12);
}

.mobile-nav-link.router-link-active .mobile-nav-icon {
  background: rgba(139, 92, 246, 0.25);
  color: #a78bfa;
}

.mobile-nav-icon {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  font-size: 1rem;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.mobile-nav-link:hover .mobile-nav-icon {
  background: rgba(139, 92, 246, 0.2);
  color: #c4b5fd;
}

/* CTA */
.mobile-cta {
  animation: mobileSlideIn 0.4s ease-out forwards;
  opacity: 0;
  transform: translateY(12px);
}

.mobile-cta .btn-primary {
  background: #8b5cf6;
  border: none;
  font-weight: 600;
  font-size: 1rem;
}

.mobile-cta .btn-primary:hover {
  background: #7c3aed;
}

/* ================================
   OVERLAY FOOTER — preferences + tagline
   ================================ */
.mobile-overlay-footer {
  padding: 1.25rem 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  text-align: center;
  animation: mobileSlideIn 0.4s ease-out 0.3s forwards;
  opacity: 0;
}

.mobile-preferences {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
}

.mobile-pref-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.75rem;
}

.mobile-pref-divider {
  width: 1px;
  height: 24px;
  background: rgba(255, 255, 255, 0.1);
}

.mobile-tagline {
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  margin: 0;
}

@keyframes mobileSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ================================
   ACCESSIBILITY
   ================================ */
.mobile-nav-link:focus-visible,
.mobile-close-btn:focus-visible {
  outline: 2px solid #8b5cf6;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .mobile-nav-link,
  .mobile-cta,
  .mobile-overlay-header,
  .mobile-overlay-footer,
  .mobile-tagline,
  .toggle-bar,
  .toggle-bar::before,
  .toggle-bar::after,
  .mobile-menu-enter-active,
  .mobile-menu-leave-active {
    animation: none !important;
    transition: none !important;
    opacity: 1;
    transform: none;
  }
}
</style>
