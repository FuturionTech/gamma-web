<template>
  <section class="tech-partners-bar py-4">
    <div class="container">
      <!-- Section Title -->
      <p class="text-center tech-heading text-uppercase fw-semibold small mb-4 tracking-wide">
        Technologies We Specialize In
      </p>

      <!-- Technology Badges -->
      <div class="d-flex flex-wrap justify-content-center align-items-center gap-3 gap-lg-4">
        <div
          v-for="(tech, index) in technologies"
          :key="tech.name"
          class="tech-badge d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
          :style="{ animationDelay: `${index * 80}ms` }"
        >
          <i :class="tech.icon" class="tech-icon"></i>
          <span class="tech-name small fw-medium">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const technologies = [
  { name: 'AWS', icon: 'bi bi-cloud' },
  { name: 'Microsoft Azure', icon: 'bi bi-microsoft' },
  { name: 'Google Cloud', icon: 'bi bi-google' },
  { name: 'Databricks', icon: 'bi bi-braces' },
  { name: 'Snowflake', icon: 'bi bi-snow' },
  { name: 'Apache Spark', icon: 'bi bi-lightning-charge' },
  { name: 'Kubernetes', icon: 'bi bi-diagram-3' },
  { name: 'Docker', icon: 'bi bi-box' },
  { name: 'Terraform', icon: 'bi bi-layers' },
  { name: 'Python', icon: 'bi bi-filetype-py' },
  { name: 'TensorFlow', icon: 'bi bi-cpu' },
  { name: 'Power BI', icon: 'bi bi-bar-chart-line' },
]
</script>

<style scoped>
.tech-partners-bar {
  background: linear-gradient(180deg, #f8f7fc 0%, #f9fafb 100%);
  border-top: 1px solid rgba(0, 0, 0, 0.04);
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}

.tech-heading {
  color: #6b7280;
}

.tracking-wide {
  letter-spacing: 0.1em;
}

.tech-badge {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards;
}

.tech-badge:hover {
  background: white;
  border-color: rgba(139, 92, 246, 0.2);
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.1);
  transform: translateY(-1px);
}

.tech-icon {
  font-size: 1.1rem;
  color: #6b7280;
  transition: color 0.3s ease;
}

.tech-badge:hover .tech-icon {
  color: #8b5cf6;
}

.tech-name {
  color: #4b5563;
  white-space: nowrap;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Dark mode support */
:global([data-bs-theme="dark"]) .tech-partners-bar {
  background: linear-gradient(180deg, #111111 0%, #0f0f0f 100%);
  border-top-color: rgba(255, 255, 255, 0.05);
  border-bottom-color: rgba(255, 255, 255, 0.05);
}

:global([data-bs-theme="dark"]) .tech-badge {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.08);
}

:global([data-bs-theme="dark"]) .tech-badge:hover {
  background: rgba(139, 92, 246, 0.1);
  border-color: rgba(139, 92, 246, 0.3);
}

:global([data-bs-theme="dark"]) .tech-heading {
  color: rgba(255, 255, 255, 0.85);
}

:global([data-bs-theme="dark"]) .tech-icon {
  color: #d1d5db;
}

:global([data-bs-theme="dark"]) .tech-name {
  color: #e5e7eb;
}

/* Responsive */
@media (max-width: 575px) {
  .tech-badge {
    padding: 0.35rem 0.65rem !important;
  }

  .tech-name {
    font-size: 0.75rem;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .tech-badge {
    animation: none !important;
    opacity: 1;
  }
}
</style>
