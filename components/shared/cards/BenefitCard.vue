<template>
  <div class="benefit-card">
    <!-- Icon -->
    <div class="benefit-icon-wrapper mb-3" :class="iconBgClass">
      <i v-if="icon" :class="`${icon} ${iconColorClass}`"></i>
      <component v-else-if="svgIcon" :is="svgIcon" />
    </div>

    <!-- Title -->
    <h4 class="h5 fw-bold mb-2">{{ title }}</h4>

    <!-- Description -->
    <p class="text-muted small mb-0">{{ description }}</p>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  // Content
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },

  // Icon props
  icon: {
    type: String,
    default: ''
  },
  svgIcon: {
    type: [Object, Function],
    default: null
  },

  // Styling
  iconColor: {
    type: String,
    default: 'primary', // primary, success, warning, danger, info
    validator: (value) => {
      return ['primary', 'success', 'warning', 'danger', 'info', 'secondary'].includes(value)
    }
  }
})

const iconBgClass = computed(() => {
  return `bg-${props.iconColor} bg-opacity-10`
})

const iconColorClass = computed(() => {
  return `text-${props.iconColor}`
})
</script>

<style scoped>
.benefit-card {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  padding: 1rem;
  margin: -1rem;
  border-radius: 16px;
  height: 100%;
}

.benefit-card:hover {
  background: rgba(0, 0, 0, 0.02);
  transform: translateY(-4px);
}

.benefit-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 16px; /* Squircle looks more modern than pure circle */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  z-index: 1;
}

/* Ambient glow behind the icon */
.benefit-icon-wrapper::after {
  content: '';
  position: absolute;
  top: 10%; left: 10%; right: 10%; bottom: 10%;
  border-radius: 16px;
  background: inherit;
  filter: blur(12px);
  opacity: 0;
  z-index: -1;
  transition: all 0.4s ease;
}

.benefit-card:hover .benefit-icon-wrapper {
  transform: scale(1.1) rotate(-5deg);
}

.benefit-card:hover .benefit-icon-wrapper::after {
  opacity: 0.6;
  transform: scale(1.2) translateY(4px);
}

/* Dark mode support */
:global([data-bs-theme="dark"]) .benefit-card:hover {
  background: rgba(255, 255, 255, 0.03);
}

:global([data-bs-theme="dark"]) .benefit-icon-wrapper {
  opacity: 0.9;
}

:global([data-bs-theme="dark"]) .benefit-card h4 {
  color: #ffffff !important;
  font-weight: 600;
  letter-spacing: -0.02em;
}

:global([data-bs-theme="dark"]) .benefit-card .text-muted {
  color: rgba(255, 255, 255, 0.7) !important;
  line-height: 1.6;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .benefit-card,
  .benefit-icon-wrapper,
  .benefit-icon-wrapper::after {
    transition: none !important;
  }
  .benefit-card:hover {
    transform: none;
  }
  .benefit-card:hover .benefit-icon-wrapper {
    transform: none;
  }
}
</style>
