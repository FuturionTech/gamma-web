<template>
  <!-- Industries Section -->
  <div>
    <!-- Loading State -->
    <div v-if="homepageStore.loadingSolutions" class="row g-4">
      <div class="col-md-6 col-lg-4" v-for="n in 6" :key="n">
        <div class="card h-100 p-4 rounded-4 border-0 shadow-sm">
          <div class="placeholder-glow">
            <div class="placeholder bg-secondary rounded-circle mb-3" style="width: 56px; height: 56px;"></div>
            <div class="placeholder bg-secondary col-7 mb-3" style="height: 18px;"></div>
            <div class="placeholder bg-secondary col-12 mb-2" style="height: 14px;"></div>
            <div class="placeholder bg-secondary col-10 mb-2" style="height: 14px;"></div>
            <div class="placeholder bg-secondary col-8" style="height: 14px;"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Industries Grid -->
    <div v-else class="row g-4">
      <div class="col-md-6 col-lg-4" v-for="industry in displayIndustries" :key="industry.title">
        <IndustryCard
          :title="industry.title"
          :description="industry.description"
          :icon="industry.icon"
          :iconColor="industry.iconColor"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IndustryCard from '~/components/shared/cards/IndustryCard.vue'
import { useHomepageStore } from '~/domains/homepage/stores/useHomepageStore'

const { locale } = useI18n()
const homepageStore = useHomepageStore()

// Map API icon names to Bootstrap Icons
const iconBootstrapMap: Record<string, string> = {
  bank: 'bi-bank',
  landmark: 'bi-building',
  hospital: 'bi-heart-pulse',
  'graduation-cap': 'bi-mortarboard',
  cog: 'bi-gear',
  'shopping-cart': 'bi-cart',
}

// Map API icon_color hex to Bootstrap color names
const iconColorMap: Record<string, string> = {
  '#10B981': 'success',
  '#3B82F6': 'info',
  '#EC4899': 'danger',
  '#8B5CF6': 'primary',
  '#F59E0B': 'warning',
  '#EF4444': 'danger',
}

const { t } = useI18n()

// i18n-driven static fallback
const industryKeys = ['banking', 'healthcare', 'government', 'education', 'business', 'ngo'] as const
const industryIcons = ['bi-bank', 'bi-heart-pulse', 'bi-building', 'bi-mortarboard', 'bi-briefcase', 'bi-globe2'] as const
const industryColors = ['primary', 'danger', 'info', 'success', 'warning', 'secondary'] as const

// Prefer API data, fall back to i18n static
const displayIndustries = computed(() => {
  if (homepageStore.solutions.length > 0) {
    return homepageStore.solutions.slice(0, 6).map(s => ({
      title: s.title,
      description: s.description || '',
      icon: iconBootstrapMap[s.icon ?? ''] || 'bi-gear',
      iconColor: iconColorMap[s.icon_color ?? ''] || 'primary',
    }))
  }
  return industryKeys.map((key, i) => ({
    title: t(`industries.${key}.title`),
    description: t(`industries.${key}.description`),
    icon: industryIcons[i],
    iconColor: industryColors[i],
  }))
})
</script>
