<template>
  <component
    :is="link ? 'NuxtLink' : 'div'"
    :to="link || undefined"
    class="service-card h-100 p-4 rounded-5 border-0 text-decoration-none"
    :class="{ 'service-card-linkable': !!link }"
    @click="onCardClick"
  >
    <!-- Card Inner Base -->
    <div class="service-card-inner h-100 d-flex flex-column">
      <!-- Icon with Ambient Glow -->
      <div class="service-icon mb-4">
        <div class="icon-orb" :class="gradientClass">
          <component v-if="svgIcon" :is="svgIcon" />
          <i v-else-if="icon" :class="icon" class="service-icon-i"></i>
          <div class="orb-glow"></div>
        </div>
      </div>

      <!-- Title & Description -->
      <h3 class="h5 fw-bold mb-3 card-title-text">{{ title }}</h3>
      <p class="card-desc-text mb-4">{{ description }}</p>

      <!-- Feature List -->
      <ul v-if="features && features.length > 0" class="list-unstyled mb-0 mt-auto pt-2">
        <li
          class="d-flex align-items-center mb-2"
          v-for="(feature, idx) in features"
          :key="idx"
        >
          <div class="feature-dot me-2 flex-shrink-0"></div>
          <span class="feature-text">{{ feature }}</span>
        </li>
      </ul>

      <!-- Learn More Link -->
      <div v-if="link" class="learn-more-box mt-4 pt-4">
        <span class="learn-more-btn">
          {{ learnMoreLabel || $t('services.learnMore') }}
          <i class="bi bi-arrow-right-short ms-1 learn-more-arrow"></i>
        </span>
      </div>
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
/* Card Base — Glassmorphic Surface */
.service-card {
  background: #ffffff;
  border: 1px solid #f1f5f9 !important;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
  cursor: default;
  display: flex;
  flex-direction: column;
}

.service-card-linkable {
  cursor: pointer;
}

.service-card:hover {
  transform: translateY(-10px);
  background: #ffffff;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border-color: rgba(124, 58, 237, 0.15) !important;
}

/* Icon Orb — Professional Gradients & Glow */
.icon-orb {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  position: relative;
  overflow: visible;
  transition: transform 0.5s ease;
  z-index: 1;
}

.service-icon-i {
  font-size: 1.75rem;
  line-height: 1;
  z-index: 2;
}

.orb-glow {
  position: absolute;
  inset: -10px;
  background: inherit;
  border-radius: 50%;
  filter: blur(20px);
  opacity: 0.15;
  transition: opacity 0.5s ease;
  z-index: 0;
}

.service-card:hover .icon-orb {
  transform: scale(1.1) rotate(5deg);
}

.service-card:hover .orb-glow {
  opacity: 0.35;
}

/* Gradients Matching Design Token */
.bg-gradient-primary { background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%); }
.bg-gradient-info    { background: linear-gradient(135deg, #0ea4e9 0%, #6366f1 100%); }
.bg-gradient-success { background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%); }
.bg-gradient-danger  { background: linear-gradient(135deg, #ef4444 0%, #7c3aed 100%); }
.bg-gradient-warning { background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%); }
.bg-gradient-purple  { background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%); }
.bg-gradient-dark    { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); }

/* Typography & Content */
.card-title-text {
  color: #0f172a;
  letter-spacing: -0.01em;
}

.card-desc-text {
  color: #64748b;
  font-size: 0.925rem;
  line-height: 1.6;
}

.feature-dot {
  width: 6px;
  height: 6px;
  background: #cbd5e1;
  border-radius: 50%;
  transition: background 0.3s ease;
}

.feature-text {
  color: #475569;
  font-size: 0.825rem;
  font-weight: 500;
}

.service-card:hover .feature-dot {
  background: #7c3aed;
}

/* Interaction: Learn More */
.learn-more-box {
  border-top: 1px solid #f1f5f9;
}

.learn-more-btn {
  color: #7c3aed;
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
}

.learn-more-arrow {
  font-size: 1.25rem;
  transition: transform 0.3s ease;
}

.service-card:hover .learn-more-btn {
  color: #3b82f6;
}

.service-card:hover .learn-more-arrow {
  transform: translateX(4px);
}

/* Dark Mode Sophistication */
:global([data-bs-theme="dark"]) .service-card {
  background: rgba(15, 23, 42, 0.4);
  border-color: rgba(255, 255, 255, 0.06) !important;
  box-shadow: none;
}

:global([data-bs-theme="dark"]) .service-card:hover {
  background: rgba(15, 23, 42, 0.8);
  border-color: rgba(124, 58, 237, 0.3) !important;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

:global([data-bs-theme="dark"]) .card-title-text { color: #ffffff; }
:global([data-bs-theme="dark"]) .card-desc-text { color: rgba(255, 255, 255, 0.7); }
:global([data-bs-theme="dark"]) .feature-text { color: rgba(255, 255, 255, 0.6); }
:global([data-bs-theme="dark"]) .learn-more-box { border-top-color: rgba(255, 255, 255, 0.08); }
:global([data-bs-theme="dark"]) .learn-more-btn { color: #a78bfa; }
:global([data-bs-theme="dark"]) .service-card:hover .learn-more-btn { color: #ffffff; }

/* Reduced Motion Optimization */
@media (prefers-reduced-motion: reduce) {
  .service-card, .icon-orb, .orb-glow, .learn-more-btn, .learn-more-arrow {
    transition: none !important;
  }
}
</style>
