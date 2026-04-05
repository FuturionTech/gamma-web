<template>
  <div class="section-header text-center mb-5">
    <!-- Optional Badge/Tag -->
    <div v-if="badge" class="mb-3">
      <span class="badge bg-primary bg-opacity-10 text-primary px-4 py-2 rounded-pill">
        {{ badge }}
      </span>
    </div>

    <!-- Main Heading -->
    <h2 :class="headingClass">{{ title }}</h2>

    <!-- Subtitle/Description -->
    <p
      v-if="subtitle"
      :class="subtitleClass"
      :style="maxWidth ? { maxWidth: maxWidth } : {}"
      class="mx-auto"
    >
      {{ subtitle }}
    </p>

    <!-- Optional slot for custom content -->
    <slot></slot>
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
  subtitle: {
    type: String,
    default: ''
  },
  badge: {
    type: String,
    default: ''
  },

  // Styling
  headingSize: {
    type: String,
    default: 'h1', // h1, h2, display-3, display-4, etc.
    validator: (value) => {
      return ['h1', 'h2', 'h3', 'h4', 'display-3', 'display-4', 'display-5', 'display-6'].includes(value)
    }
  },
  maxWidth: {
    type: String,
    default: '600px'
  }
})

const headingClass = computed(() => {
  const baseClass = 'fw-bold mb-3'
  if (props.headingSize.startsWith('display')) {
    return `${props.headingSize} ${baseClass}`
  }
  return `${props.headingSize} ${baseClass}`
})

const subtitleClass = computed(() => {
  return 'fs-lg text-muted mb-0'
})
</script>

<style scoped>
.section-header {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fs-lg {
  font-size: 1.125rem;
}

/* Dark mode support for badge */
/* Badge text — use darker purple for AA contrast on light bg */
.badge.text-primary {
  color: #6d28d9 !important;
}

[data-bs-theme="dark"] .badge {
  background: rgba(139, 92, 246, 0.2) !important;
  color: #a78bfa !important;
}

/* Enforce explicit text colors for the headings and subtitles */
.section-header h1,
.section-header h2,
.section-header h3,
.section-header h4,
.section-header h5,
.section-header h6 {
  color: var(--bs-heading-color, #212529) !important;
}

.section-header .text-muted {
  color: rgba(108, 117, 125, 1) !important; /* Bootstrap gray-600 */
}

/* Dark mode overrides */
[data-bs-theme="dark"] .section-header h1,
[data-bs-theme="dark"] .section-header h2,
[data-bs-theme="dark"] .section-header h3,
[data-bs-theme="dark"] .section-header h4,
[data-bs-theme="dark"] .section-header h5,
[data-bs-theme="dark"] .section-header h6 {
  color: #ffffff !important;
}

[data-bs-theme="dark"] .section-header .text-muted {
  color: rgba(255, 255, 255, 0.75) !important;
}
</style>
