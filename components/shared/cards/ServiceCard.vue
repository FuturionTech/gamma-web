<template>
  <div class="service-card card h-100 p-4 rounded-4 border-0 shadow-sm">
    <!-- Icon -->
    <div class="service-icon mb-4">
      <div class="icon-wrapper" :class="gradientClass">
        <!-- Support both SVG component and Bootstrap icons -->
        <component v-if="svgIcon" :is="svgIcon" />
        <i v-else-if="icon" :class="`${icon} text-white`" style="font-size: 32px;"></i>
      </div>
    </div>

    <!-- Title & Description -->
    <h3 class="h4 fw-bold mb-3">{{ title }}</h3>
    <p class="text-muted mb-4">{{ description }}</p>

    <!-- Feature List -->
    <ul v-if="features && features.length > 0" class="list-unstyled mb-4">
      <li
        class="d-flex align-items-center mb-2"
        v-for="(feature, idx) in features"
        :key="idx"
      >
        <i class="bi bi-check-circle-fill text-success me-2 flex-shrink-0"></i>
        <span class="small">{{ feature }}</span>
      </li>
    </ul>

    <!-- Learn More Link -->
    <a
      v-if="link"
      :href="link"
      class="btn-link fw-semibold mt-auto d-inline-flex align-items-center"
    >
      {{ linkText || 'Learn More' }}
      <i class="bi bi-arrow-right ms-1"></i>
    </a>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  // Content props
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    default: () => []
  },

  // Icon props - supports both SVG component and Bootstrap icons
  svgIcon: {
    type: [Object, Function],
    default: null
  },
  icon: {
    type: String,
    default: ''
  },

  // Styling props
  gradientClass: {
    type: String,
    default: 'bg-gradient-primary'
  },

  // Link props
  link: {
    type: String,
    default: ''
  },
  linkText: {
    type: String,
    default: 'Learn More'
  }
})
</script>

<style scoped>
/* Service Card */
.service-card {
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
}

/* Icon Wrapper */
.icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.service-card:hover .icon-wrapper {
  transform: scale(1.1);
}

/* Gradient Classes */
.bg-gradient-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.bg-gradient-info {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
}

.bg-gradient-success {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.bg-gradient-danger {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
}

.bg-gradient-warning {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}

.bg-gradient-purple {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
}

.bg-gradient-dark {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
}

/* Button Link */
.btn-link {
  color: #8b5cf6;
  text-decoration: none;
  transition: all 0.3s ease;
  gap: 0.5rem;
}

.btn-link:hover {
  color: #7c3aed;
  gap: 0.75rem;
}

/* Dark Mode Support */
:global([data-bs-theme="dark"]) .service-card {
  background: #1a1a1a !important;
  border: 1px solid rgba(139, 92, 246, 0.2) !important;
}

:global([data-bs-theme="dark"]) .service-card:hover {
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2) !important;
  border-color: rgba(139, 92, 246, 0.4) !important;
}

/* Accessibility */
.service-card:focus-visible {
  outline: 2px solid #8b5cf6;
  outline-offset: 2px;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .service-card,
  .icon-wrapper,
  .btn-link {
    transition: none !important;
  }
}
</style>
