<template>
  <div class="industry-card card h-100 p-4 rounded-4 shadow-sm">
    <!-- Icon -->
    <div class="industry-icon-wrapper mb-3" :class="iconBgClass">
      <i v-if="icon" :class="`${icon} ${iconColorClass}`"></i>
      <component v-else-if="svgIcon" :is="svgIcon" />
    </div>

    <!-- Title -->
    <h4 class="h5 fw-bold mb-3">{{ title }}</h4>

    <!-- Description -->
    <p class="text-muted mb-4">{{ description }}</p>

    <!-- Learn More Link (optional) -->
    <a
      v-if="link"
      :href="link"
      class="btn-link fw-semibold d-inline-flex align-items-center"
    >
      {{ linkText || $t('services.learnMore') }}
      <i class="bi bi-arrow-right ms-1"></i>
    </a>
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

  // Link props
  link: {
    type: String,
    default: ''
  },
  linkText: {
    type: String,
    default: 'Learn more'
  },

  // Styling
  iconColor: {
    type: String,
    default: 'primary',
    validator: (value) => {
      return ['primary', 'success', 'warning', 'danger', 'info', 'secondary', 'dark'].includes(value)
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
.industry-card {
  transition: all 0.3s ease;
  cursor: pointer;
}

.industry-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
}

.industry-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.industry-card:hover .industry-icon-wrapper {
  transform: scale(1.1);
}

/* Button Link */
.btn-link {
  color: #7c3aed;
  text-decoration: none;
  transition: all 0.3s ease;
  gap: 0.5rem;
}

.btn-link:hover {
  color: #7c3aed;
  gap: 0.75rem;
}

/* Dark mode support */
:global([data-bs-theme="dark"]) .industry-card {
  background: rgba(255, 255, 255, 0.04) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}

:global([data-bs-theme="dark"]) .industry-card:hover {
  box-shadow: 0 15px 30px rgba(139, 92, 246, 0.15) !important;
  border-color: rgba(139, 92, 246, 0.4) !important;
}

:global([data-bs-theme="dark"]) .industry-card h4 {
  color: #ffffff !important;
}

:global([data-bs-theme="dark"]) .industry-card .text-muted {
  color: rgba(255, 255, 255, 0.78) !important;
}

:global([data-bs-theme="dark"]) .industry-icon-wrapper {
  background: rgba(139, 92, 246, 0.15) !important;
}

/* Accessibility */
.industry-card:focus-visible {
  outline: 2px solid #8b5cf6;
  outline-offset: 2px;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .industry-card,
  .industry-icon-wrapper,
  .btn-link {
    transition: none !important;
  }
}
</style>
