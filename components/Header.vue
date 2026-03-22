<template>
  <header
    class="navbar navbar-expand-lg fixed-top"
    :class="[navbarClasses]"
    data-bs-theme="dark"
  >
    <div class="container">

      <!-- Navbar brand (Logo) -->
      <HeaderLogo/>

      <!-- Mobile controls: theme + language + hamburger -->
      <div class="d-flex d-lg-none align-items-center gap-2">
        <ThemeToggle />
        <LanguageSelector />
        <button
          class="mobile-menu-toggle"
          type="button"
          :aria-expanded="isMobileOpen"
          aria-label="Toggle navigation"
          @click="isMobileOpen = !isMobileOpen"
        >
          <span class="toggle-bar" :class="{ open: isMobileOpen }"></span>
        </button>
      </div>

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
      <div v-if="isMobileOpen" class="mobile-overlay" @click.self="isMobileOpen = false">
        <div class="mobile-overlay-content">
          <!-- Nav Links — centered, staggered -->
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

          <!-- Tagline -->
          <p class="mobile-tagline" :style="{ animationDelay: `${0.1 + mobileLinks.length * 0.07}s` }">
            Gamma Neutral Consulting Inc.
          </p>
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
   ANIMATED HAMBURGER TOGGLE
   ================================ */
.mobile-menu-toggle {
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  z-index: 1060;
}

.toggle-bar {
  position: relative;
  width: 22px;
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
  top: -7px;
}

.toggle-bar::after {
  top: 7px;
}

/* Animate to X */
.toggle-bar.open {
  background: transparent;
}

.toggle-bar.open::before {
  top: 0;
  transform: rotate(45deg);
}

.toggle-bar.open::after {
  top: 0;
  transform: rotate(-45deg);
}

/* ================================
   FULLSCREEN MOBILE OVERLAY
   ================================ */
.mobile-overlay {
  position: fixed;
  inset: 0;
  z-index: 1050;
  background: rgba(10, 10, 20, 0.97);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-overlay-content {
  text-align: center;
  width: 100%;
  max-width: 320px;
  padding: 0 1.5rem;
}

/* Transition for the overlay */
.mobile-menu-enter-active {
  transition: opacity 0.3s ease;
}

.mobile-menu-leave-active {
  transition: opacity 0.25s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
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
  padding: 1rem 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  border-radius: 16px;
  transition: all 0.2s ease;
  animation: mobileSlideIn 0.4s ease-out forwards;
  opacity: 0;
  transform: translateY(12px);
}

.mobile-nav-link:hover,
.mobile-nav-link:focus {
  color: #ffffff;
  background: rgba(139, 92, 246, 0.12);
}

.mobile-nav-link.router-link-active {
  color: #ffffff;
  background: rgba(139, 92, 246, 0.15);
}

.mobile-nav-link.router-link-active .mobile-nav-icon {
  color: #8b5cf6;
}

.mobile-nav-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  font-size: 1.1rem;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.mobile-nav-link:hover .mobile-nav-icon {
  background: rgba(139, 92, 246, 0.2);
  color: #c4b5fd;
}

/* CTA in mobile overlay */
.mobile-cta {
  animation: mobileSlideIn 0.4s ease-out forwards;
  opacity: 0;
  transform: translateY(12px);
  margin-bottom: 2rem;
}

.mobile-cta .btn-primary {
  background: #8b5cf6;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
}

.mobile-cta .btn-primary:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(139, 92, 246, 0.4);
}

/* Tagline */
.mobile-tagline {
  color: rgba(255, 255, 255, 0.25);
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  animation: mobileSlideIn 0.4s ease-out forwards;
  opacity: 0;
  transform: translateY(12px);
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
.mobile-nav-link:focus-visible {
  outline: 2px solid #8b5cf6;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .mobile-nav-link,
  .mobile-cta,
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
