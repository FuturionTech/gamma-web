<template>
  <div class="benefit-card">
    <!-- Icon with gradient + glow -->
    <div class="benefit-icon-wrapper mb-3" :class="`gradient-${iconColor}`">
      <i v-if="icon" :class="icon"></i>
      <component v-else-if="svgIcon" :is="svgIcon" />
      <span class="icon-glow"></span>
    </div>

    <!-- Title -->
    <h4 class="h6 fw-bold mb-2 benefit-title">{{ title }}</h4>

    <!-- Description -->
    <p class="text-muted small mb-0 benefit-desc">{{ description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

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
    default: 'primary',
    validator: (value) => {
      return ['primary', 'success', 'warning', 'danger', 'info', 'secondary'].includes(value)
    }
  }
})
</script>

<style scoped>
.benefit-card {
  transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
  padding: 1rem;
  margin: -1rem;
  border-radius: 16px;
  height: 100%;
}

.benefit-card:hover {
  background: rgba(0, 0, 0, 0.02);
  transform: translateY(-4px);
}

/* ========================================
   WORLD-CLASS ICON WRAPPER
   ======================================== */
.benefit-icon-wrapper {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  color: #ffffff;
  transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.35s ease;
  position: relative;
  z-index: 1;
  overflow: visible;
}

/* Gradient variations matching brand system */
.gradient-primary {
  background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%);
  box-shadow: 0 8px 20px rgba(124, 58, 237, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2);
}
.gradient-success {
  background: linear-gradient(135deg, #10b981 0%, #14b8a6 100%);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2);
}
.gradient-warning {
  background: linear-gradient(135deg, #f59e0b 0%, #fb923c 100%);
  box-shadow: 0 8px 20px rgba(245, 158, 11, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2);
}
.gradient-danger {
  background: linear-gradient(135deg, #ef4444 0%, #ec4899 100%);
  box-shadow: 0 8px 20px rgba(239, 68, 68, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2);
}
.gradient-info {
  background: linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%);
  box-shadow: 0 8px 20px rgba(14, 165, 233, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2);
}
.gradient-secondary {
  background: linear-gradient(135deg, #64748b 0%, #475569 100%);
  box-shadow: 0 8px 20px rgba(100, 116, 139, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* Ambient glow behind the icon */
.icon-glow {
  position: absolute;
  inset: -4px;
  border-radius: 18px;
  background: inherit;
  filter: blur(16px);
  opacity: 0;
  z-index: -1;
  transition: opacity 0.35s ease;
}

.gradient-primary .icon-glow  { background: #7c3aed; }
.gradient-success .icon-glow  { background: #10b981; }
.gradient-warning .icon-glow  { background: #f59e0b; }
.gradient-danger .icon-glow   { background: #ef4444; }
.gradient-info .icon-glow     { background: #0ea5e9; }
.gradient-secondary .icon-glow { background: #64748b; }

.benefit-card:hover .benefit-icon-wrapper {
  transform: scale(1.08) translateY(-2px);
}

.benefit-card:hover .icon-glow {
  opacity: 0.45;
}

/* Typography */
.benefit-title {
  color: #0f172a;
  letter-spacing: -0.01em;
  font-size: 1rem;
  line-height: 1.35;
}

.benefit-desc {
  color: #64748b;
  line-height: 1.55;
  font-size: 0.85rem;
}

/* Dark mode */
[data-bs-theme="dark"] .benefit-card:hover {
  background: rgba(255, 255, 255, 0.03);
}

[data-bs-theme="dark"] .benefit-title {
  color: #ffffff !important;
}

[data-bs-theme="dark"] .benefit-desc {
  color: rgba(255, 255, 255, 0.65) !important;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .benefit-card,
  .benefit-icon-wrapper,
  .icon-glow {
    transition: none !important;
  }
  .benefit-card:hover,
  .benefit-card:hover .benefit-icon-wrapper {
    transform: none;
  }
}
</style>
