<template>
  <div class="process-step-card card h-100 p-4 rounded-4 border-0 shadow-sm">
    <!-- Number Badge -->
    <div class="step-number-wrapper mx-auto mb-4" :class="badgeColorClass">
      <span class="fw-bold text-white">{{ stepNumber }}</span>
    </div>

    <!-- Icon (optional) -->
    <div v-if="icon || svgIcon" class="mb-3 text-center">
      <i v-if="icon" :class="`${icon} fs-1 text-primary`"></i>
      <component v-else-if="svgIcon" :is="svgIcon" />
    </div>

    <!-- Title -->
    <h4 class="h5 fw-bold mb-2 text-center">{{ title }}</h4>

    <!-- Description -->
    <p class="text-muted small mb-3 text-center">{{ description }}</p>

    <!-- Sub-items/Features (optional) -->
    <ul v-if="items && items.length > 0" class="list-unstyled mb-0 small">
      <li
        class="d-flex align-items-start mb-2"
        v-for="(item, idx) in items"
        :key="idx"
      >
        <i class="bi bi-check2 text-success me-2 flex-shrink-0 mt-1"></i>
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  // Content
  stepNumber: {
    type: [String, Number],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    default: () => []
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
  badgeColor: {
    type: String,
    default: 'gradient', // gradient, primary, success, warning, danger, info
    validator: (value) => {
      return ['gradient', 'primary', 'success', 'warning', 'danger', 'info', 'dark'].includes(value)
    }
  }
})

const badgeColorClass = computed(() => {
  if (props.badgeColor === 'gradient') {
    return 'bg-gradient-primary'
  }
  return `bg-${props.badgeColor}`
})
</script>

<style scoped>
.process-step-card {
  transition: all 0.3s ease;
  text-align: center;
}

.process-step-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
}

.step-number-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.process-step-card:hover .step-number-wrapper {
  transform: scale(1.1);
}

/* Gradient background */
.bg-gradient-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Dark mode support */
:global([data-bs-theme="dark"]) .process-step-card {
  background: #1a1a1a !important;
  border: 1px solid rgba(139, 92, 246, 0.2) !important;
}

:global([data-bs-theme="dark"]) .process-step-card:hover {
  box-shadow: 0 15px 35px rgba(139, 92, 246, 0.15) !important;
}

/* Accessibility */
.process-step-card:focus-visible {
  outline: 2px solid #8b5cf6;
  outline-offset: 2px;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .process-step-card,
  .step-number-wrapper {
    transition: none !important;
  }
}
</style>
