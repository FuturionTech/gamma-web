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
  transition: all 0.3s ease;
}

.benefit-icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.benefit-card:hover .benefit-icon-wrapper {
  transform: scale(1.1);
}

/* Dark mode support */
:global([data-bs-theme="dark"]) .benefit-icon-wrapper {
  background: rgba(139, 92, 246, 0.15) !important;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .benefit-card,
  .benefit-icon-wrapper {
    transition: none !important;
  }
}
</style>
