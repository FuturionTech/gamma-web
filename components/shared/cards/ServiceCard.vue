<template>
  <component
    :is="link ? 'NuxtLink' : 'div'"
    :to="link || undefined"
    class="service-card card h-100 p-4 rounded-4 border-0 text-decoration-none"
    :class="{ 'service-card-linkable': !!link }"
    @click="onCardClick"
  >
    <!-- Icon -->
    <div class="service-icon mb-4">
      <div class="icon-wrapper">
        <component v-if="svgIcon" :is="svgIcon" />
        <i v-else-if="icon" :class="icon" class="service-icon-i"></i>
      </div>
    </div>

    <!-- Title & Description -->
    <h3 class="h5 fw-bold mb-3 card-title-text">{{ title }}</h3>
    <p class="card-desc-text mb-4">{{ description }}</p>

    <!-- Feature List -->
    <ul v-if="features && features.length > 0" class="list-unstyled mb-0 mt-auto">
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
    <div v-if="link" class="learn-more-link mt-4 pt-3">
      <span class="learn-more-text">
        {{ learnMoreLabel || $t('services.learnMore') }}
        <i class="bi bi-arrow-right ms-2 learn-more-arrow"></i>
      </span>
    </div>
  </component>
</template>

<script setup lang="ts">
const { $trackEvent } = useNuxtApp()

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: Array as () => string[],
    default: () => [],
  },
  svgIcon: {
    type: [Object, Function] as any,
    default: null,
  },
  icon: {
    type: String,
    default: '',
  },
  gradientClass: {
    type: String,
    default: 'bg-gradient-primary',
  },
  link: {
    type: String,
    default: '',
  },
  learnMoreLabel: {
    type: String,
    default: '',
  },
})

const onCardClick = () => {
  $trackEvent('service_card_click', { service: props.title })
}
</script>

<style scoped>
/* Service Card — uses CSS vars for theme-aware colors */
.service-card {
  background: var(--bs-body-bg, #ffffff);
  border: 1px solid var(--bs-border-color, #e5e7eb) !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  color: inherit;
}

.service-card-linkable {
  cursor: pointer;
}

.service-card:hover {
  transform: translateY(-3px);
  border-color: rgba(139, 92, 246, 0.3) !important;
  box-shadow: 0 12px 32px rgba(139, 92, 246, 0.12) !important;
}

/* Learn More Link */
.learn-more-link {
  border-top: 1px solid var(--bs-border-color, #e5e7eb);
}

.learn-more-text {
  color: #8b5cf6;
  font-weight: 600;
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
  transition: color 0.3s ease;
}

.learn-more-arrow {
  transition: transform 0.3s ease;
  display: inline-block;
}

.service-card:hover .learn-more-arrow {
  transform: translateX(4px);
}

.service-card:hover .learn-more-text {
  color: #7c3aed;
}

:global([data-bs-theme="dark"]) .learn-more-link {
  border-top-color: rgba(255, 255, 255, 0.1);
}

:global([data-bs-theme="dark"]) .learn-more-text {
  color: #a78bfa;
}

:global([data-bs-theme="dark"]) .service-card:hover .learn-more-text {
  color: #c4b5fd;
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
  background: rgba(139, 92, 246, 0.18);
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
  color: #7c3aed;
  font-size: 0.85rem;
}

.feature-text {
  color: var(--bs-body-color, #4b5563);
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
  .icon-wrapper {
    transition: none !important;
  }
}
</style>
