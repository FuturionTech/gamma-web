<template>
  <div class="theme-toggle-wrapper">
    <button
      @click="toggleTheme"
      class="theme-toggle-btn"
      :title="`Switch to ${isDark ? 'light' : 'dark'} mode`"
      aria-label="Toggle theme"
    >
      <!-- Sun icon for light mode with SVG fallback -->
      <svg v-if="!isDark" class="theme-icon" width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
      </svg>
      <!-- Moon icon for dark mode with SVG fallback -->
      <svg v-else class="theme-icon" width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

// Theme state
const isDark = ref(false)

// Toggle theme function
const toggleTheme = () => {
  isDark.value = !isDark.value
  updateTheme()
}

// Update theme on document
const updateTheme = () => {
  const html = document.documentElement

  if (isDark.value) {
    html.setAttribute('data-bs-theme', 'dark')
    html.classList.add('dark-mode')
    html.classList.remove('light-mode')
    localStorage.setItem('theme', 'dark')
  } else {
    html.setAttribute('data-bs-theme', 'light')
    html.classList.add('light-mode')
    html.classList.remove('dark-mode')
    localStorage.setItem('theme', 'light')
  }

  // Dispatch custom event for other components to react
  window.dispatchEvent(new CustomEvent('theme-changed', { detail: { isDark: isDark.value } }))
}

// Initialize theme from localStorage or system preference
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = prefersDark
  }

  updateTheme()

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      isDark.value = e.matches
      updateTheme()
    }
  })
})
</script>

<style scoped>
.theme-toggle-wrapper {
  display: inline-block;
}

.theme-toggle-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: rgba(139, 92, 246, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.theme-toggle-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease;
}

.theme-toggle-btn:hover {
  background: rgba(139, 92, 246, 0.2);
  border-color: rgba(139, 92, 246, 0.5);
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
}

.theme-toggle-btn:hover::before {
  width: 100%;
  height: 100%;
}

.theme-toggle-btn:active {
  transform: scale(0.95);
}

.theme-icon {
  width: 20px;
  height: 20px;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
  display: block;
}

.theme-toggle-btn:hover .theme-icon {
  transform: rotate(20deg);
}

/* Light mode styles */
:global(.light-mode) .theme-toggle-btn,
:global(.navbar-scrolled) .theme-toggle-btn {
  background: rgba(139, 92, 246, 0.1);
  border: 2px solid rgba(139, 92, 246, 0.3);
  color: #8b5cf6;
}

:global(.light-mode) .theme-toggle-btn:hover,
:global(.navbar-scrolled) .theme-toggle-btn:hover {
  background: rgba(139, 92, 246, 0.2);
  border-color: rgba(139, 92, 246, 0.5);
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
  color: #7c3aed;
}

/* Animation for theme change */
@keyframes rotate-in {
  from {
    transform: rotate(-180deg) scale(0);
    opacity: 0;
  }
  to {
    transform: rotate(0) scale(1);
    opacity: 1;
  }
}

.theme-icon {
  animation: rotate-in 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .theme-toggle-btn {
    width: 36px;
    height: 36px;
  }

  .theme-icon {
    font-size: 1rem;
  }
}
</style>

<style>
/* Global dark mode styles */
.dark-mode {
  --bs-body-bg: #0f0f0f;
  --bs-body-color: #e5e7eb;
  --bs-border-color: rgba(255, 255, 255, 0.1);
  --bs-card-bg: #1a1a1a;
}

.dark-mode .bg-light {
  background-color: #1a1a1a !important;
}

.dark-mode .bg-white {
  background-color: #0f0f0f !important;
}

.dark-mode .text-dark {
  color: #e5e7eb !important;
}

.dark-mode .text-muted {
  color: #9ca3af !important;
}

.dark-mode .card {
  background-color: #1a1a1a;
  border-color: rgba(255, 255, 255, 0.1);
}

.dark-mode .shadow-sm {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4) !important;
}

/* Smooth transitions for theme changes */
* {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
</style>