<template>
  <div class="service-card card h-100 p-4 rounded-4 border-0">
    <!-- Icon -->
    <div class="service-icon mb-4">
      <div class="icon-wrapper">
        <!-- Support both SVG component and Bootstrap icons -->
        <component v-if="svgIcon" :is="svgIcon" />
        <i v-else-if="icon" :class="icon" class="service-icon-i"></i>
      </div>
    </div>

    <!-- Title & Description -->
    <h3 class="h5 fw-bold mb-3 card-title-text">{{ title }}</h3>
    <p class="card-desc-text mb-4">{{ description }}</p>

    <!-- Feature List -->
    <ul v-if="features && features.length > 0" class="list-unstyled mb-4">
      <li
        class="d-flex align-items-center mb-2"
        v-for="(feature, idx) in features"
        :key="idx"
      >
        <i class="bi bi-check2 feature-check me-2 flex-shrink-0"></i>
        <span class="small feature-text">{{ feature }}</span>
      </li>
    </ul>

    <!-- Learn More Link -->
    <a
      v-if="link"
      :href="link"
      class="btn-link fw-semibold mt-auto d-inline-flex align-items-center"
    >
      {{ linkText || $t('services.learnMore') }}
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

  // Styling props (kept for backward compat but no longer drives card bg)
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
/* Service Card — uses CSS vars for theme-aware colors */
.service-card {
  background: var(--bs-body-bg, #ffffff);
  border: 1px solid var(--bs-border-color, #e5e7eb) !important;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}

.service-card:hover {
  transform: translateY(-3px);
  border-color: rgba(139, 92, 246, 0.3) !important;
  box-shadow: 0 12px 32px rgba(139, 92, 246, 0.12) !important;
}

/* Icon Wrapper — Purple accent circle */
.icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
  transition: transform 0.3s ease, background 0.3s ease;
}

.service-icon-i {
  font-size: 1.5rem;
  line-height: 1;
}

.service-card:hover .icon-wrapper {
  transform: scale(1.08);
  background: rgba(139, 92, 246, 0.2);
}

/* Text Colors — use CSS vars so they adapt to theme */
.card-title-text {
  color: var(--bs-heading-color, #1f2937);
}

.card-desc-text {
  color: var(--bs-secondary-color, #6b7280);
  font-size: 0.9rem;
  line-height: 1.6;
}

.feature-check {
  color: #8b5cf6;
  font-size: 0.85rem;
}

.feature-text {
  color: var(--bs-body-color, #4b5563);
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
  background: rgba(255, 255, 255, 0.04) !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
  box-shadow: none !important;
}

:global([data-bs-theme="dark"]) .service-card:hover {
  box-shadow: 0 12px 32px rgba(139, 92, 246, 0.2) !important;
  border-color: rgba(139, 92, 246, 0.4) !important;
  background: rgba(255, 255, 255, 0.06) !important;
}

:global([data-bs-theme="dark"]) .card-title-text {
  color: #ffffff !important;
}

:global([data-bs-theme="dark"]) .card-desc-text {
  color: rgba(255, 255, 255, 0.8) !important;
}

:global([data-bs-theme="dark"]) .feature-check {
  color: #a78bfa !important;
}

:global([data-bs-theme="dark"]) .feature-text {
  color: rgba(255, 255, 255, 0.75) !important;
}

:global([data-bs-theme="dark"]) .icon-wrapper {
  background: rgba(139, 92, 246, 0.2);
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
