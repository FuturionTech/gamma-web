<template>
  <header class="navbar navbar-expand-lg fixed-top navbar-initial" data-bs-theme="dark">
    <div class="container">

      <!-- Navbar brand (Logo) -->
      <HeaderLogo/>

      <!-- Mobile menu toggler (Hamburger) -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-label="Toggle navigation" :aria-expanded="isNavbarOpen.toString()" @click="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar collapse (Main navigation) -->
      <nav class="collapse navbar-collapse" id="navbarNav" ref="navbarNav">
        <ul class="navbar-nav mx-auto" style="--ar-scroll-height: 520px;">
          <HomeMenu/>
          <SolutionsMenu/>
          <AboutMenu/>
          <RessourcesMenu/>
        </ul>

        <!-- Desktop CTA and Language -->
        <div class="d-none d-lg-flex align-items-center">
          <ThemeToggle class="me-3"/>
          <LanguageSelector class="me-3"/>
          <NuxtLink class="btn btn-primary" to="/contact">
            <i class="ai-phone-call fs-sm me-2"></i>
            Contact Us
          </NuxtLink>
        </div>
        <!-- Mobile CTA -->
        <div class="d-lg-none p-3 mt-n3">
          <NuxtLink class="btn btn-primary w-100" to="/contact">
            <i class="ai-phone-call fs-xl me-2 ms-n1"></i>
            Contact Us
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import HomeMenu from "./menus/HomeMenu.vue";
import SolutionsMenu from "./menus/SolutionsMenu.vue";
import AboutMenu from "./menus/AboutMenu.vue";
import LanguageSelector from "./selectors/LanguageSelector.vue";
import ThemeToggle from "./selectors/ThemeToggle.vue";
import HeaderLogo from "./logo/HeaderLogo.vue";
import RessourcesMenu from "~/components/menus/RessourcesMenu.vue";

export default {
  name: "Header",
  components: {
    RessourcesMenu,
    HeaderLogo,
    ThemeToggle,
    LanguageSelector,
    AboutMenu,
    SolutionsMenu,
    HomeMenu
  },
  data() {
    return {
      isNavbarOpen: false,  // Suivi de l'état du menu
    };
  },
  methods: {
    // Basculer l'état du menu (ouvert/fermé)
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    }
  },
  watch: {
    // Observer pour surveiller les changements de route
    $route(to, from) {
      const navbar = this.$refs.navbarNav;
      if (navbar.classList.contains('show')) {
        navbar.classList.remove('show'); // Ferme le menu
      }
      this.isNavbarOpen = false; // Réinitialise l'état du bouton hamburger
    }
  }
}
</script>

<style scoped>
/* Initial navbar state (semi-transparent dark) */
.navbar-initial {
  background-color: rgba(0, 0, 0, 0.7) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

/* Make sure text is visible on transparent background */
.navbar-initial .navbar-brand,
.navbar-initial .nav-link,
.navbar-initial .dropdown-toggle,
.navbar-initial .btn-outline {
  color: white !important;
}

/* Ensure dropdown toggle arrow is visible in initial state */
.navbar-initial .dropdown-toggle::after {
  border-top-color: white !important;
}

/* Scrolled state will be handled by HeroSection component */
</style>

<style>
/* Global styles for navbar states */
.navbar-transparent {
  background-color: rgba(0, 0, 0, 0.7) !important;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1) !important;
}

.navbar-transparent .navbar-brand,
.navbar-transparent .nav-link,
.navbar-transparent .dropdown-toggle,
.navbar-transparent .dropdown-item,
.navbar-transparent .btn {
  color: white !important;
}

/* Ensure dropdown toggle arrow is visible */
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
.navbar-scrolled {
  background-color: #1a1a1a !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5) !important;
  transition: all 0.3s ease;
}

.navbar-scrolled .navbar-brand,
.navbar-scrolled .nav-link,
.navbar-scrolled .dropdown-toggle,
.navbar-scrolled .dropdown-item {
  color: white !important;
}

/* Ensure dropdown toggle arrow is visible in scrolled state */
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

/* Fix navbar toggler for dark theme */
.navbar-transparent .navbar-toggler,
.navbar-scrolled .navbar-toggler {
  border-color: rgba(255, 255, 255, 0.3);
}

.navbar-transparent .navbar-toggler-icon,
.navbar-scrolled .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.8%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
</style>
