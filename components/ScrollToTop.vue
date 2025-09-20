<template>
  <transition name="scroll-to-top-fade">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="scroll-to-top-btn position-fixed"
      type="button"
      aria-label="Scroll to top"
      :title="`${Math.round(scrollProgress)}% scrolled`"
    >
      <!-- Progress Ring -->
      <svg class="progress-ring" width="48" height="48">
        <circle
          class="progress-ring-bg"
          stroke-width="2"
          fill="transparent"
          r="22"
          cx="24"
          cy="24"
        />
        <circle
          class="progress-ring-fill"
          :style="{ strokeDasharray: `${scrollProgress * 1.38} 138` }"
          stroke-width="2"
          fill="transparent"
          r="22"
          cx="24"
          cy="24"
        />
      </svg>
      <!-- Arrow Icon -->
      <i class="bi bi-arrow-up-short scroll-arrow"></i>
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const scrollProgress = ref(0)
const scrollThreshold = 300

// Throttle function for better performance
let ticking = false
const checkScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

      isVisible.value = scrollTop > scrollThreshold
      scrollProgress.value = Math.min((scrollTop / docHeight) * 100, 100)

      ticking = false
    })
    ticking = true
  }
}

// Smooth scroll with easing
const scrollToTop = () => {
  const startPosition = window.pageYOffset
  const startTime = performance.now()
  const duration = 600

  const easeInOutCubic = (t) => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  const animateScroll = (currentTime) => {
    const elapsedTime = currentTime - startTime
    const progress = Math.min(elapsedTime / duration, 1)
    const easing = easeInOutCubic(progress)

    window.scrollTo(0, startPosition * (1 - easing))

    if (progress < 1) {
      requestAnimationFrame(animateScroll)
    }
  }

  requestAnimationFrame(animateScroll)
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  checkScroll() // Check initial state
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style scoped>
/* Main button container */
.scroll-to-top-btn {
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.3),
              0 2px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 1050;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: visible;
}

/* Progress ring styles */
.progress-ring {
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-90deg);
  width: 48px;
  height: 48px;
}

.progress-ring-bg {
  stroke: rgba(255, 255, 255, 0.2);
}

.progress-ring-fill {
  stroke: white;
  stroke-linecap: round;
  transition: stroke-dasharray 0.2s ease;
  stroke-dasharray: 0 138;
}

/* Arrow icon */
.scroll-arrow {
  position: relative;
  z-index: 2;
  font-size: 1.5rem;
  font-weight: bold;
}

.scroll-to-top-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
}

.scroll-to-top-btn:active {
  transform: translateY(0);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
}

.scroll-to-top-btn:focus {
  outline: none;
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3), 0 0 0 3px rgba(139, 92, 246, 0.2);
}

/* Responsive adjustments */
@media (max-width: 767.98px) {
  .scroll-to-top-btn {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 2.75rem;
    height: 2.75rem;
    font-size: 1rem;
  }
}

@media (max-width: 575.98px) {
  .scroll-to-top-btn {
    bottom: 1rem;
    right: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 0.875rem;
  }
}

/* Animation transitions */
.scroll-to-top-fade-enter-active,
.scroll-to-top-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-to-top-fade-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.scroll-to-top-fade-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.scroll-to-top-fade-enter-to,
.scroll-to-top-fade-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .scroll-to-top-btn {
    background: #000;
    border: 2px solid #fff;
  }

  .scroll-to-top-btn:hover {
    background: #333;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .scroll-to-top-btn {
    transition: none;
  }

  .scroll-to-top-fade-enter-active,
  .scroll-to-top-fade-leave-active {
    transition: opacity 0.2s ease;
  }

  .scroll-to-top-fade-enter-from,
  .scroll-to-top-fade-leave-to {
    transform: none;
  }
}

/* Dark theme compatibility */
@media (prefers-color-scheme: dark) {
  .scroll-to-top-btn {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }

  .scroll-to-top-btn:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  }
}
</style>