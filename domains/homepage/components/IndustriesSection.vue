<template>
  <!-- Industries Section -->
  <div>
    <!-- Loading State -->
    <div v-if="homepageStore.loadingIndustries" class="row g-4">
      <div class="col-sm-6 col-lg-4" v-for="n in 6" :key="n">
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
      <div class="col-sm-6 col-lg-4" v-for="industry in displayIndustries" :key="industry.title">
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

const { t, locale } = useI18n()
const homepageStore = useHomepageStore()

// Map API icon names (Heroicons/Font Awesome style) to Bootstrap Icons
const iconBootstrapMap: Record<string, string> = {
  'building-columns': 'bi-bank',
  'heart-pulse': 'bi-heart-pulse',
  'landmark': 'bi-building',
  'briefcase': 'bi-briefcase',
  'circle-dot': 'bi-globe2',
  'graduation-cap': 'bi-mortarboard',
  'bank': 'bi-bank',
  'hospital': 'bi-heart-pulse',
  'cog': 'bi-gear',
  'shopping-cart': 'bi-cart',
}

// Map API icon_color hex to Bootstrap color names
const iconColorMap: Record<string, string> = {
  '#6B7280': 'secondary',
  '#10B981': 'success',
  '#3B82F6': 'info',
  '#F59E0B': 'warning',
  '#8B5CF6': 'primary',
  '#EF4444': 'danger',
  '#EC4899': 'danger',
}

// i18n-driven static fallback
const industryKeys = ['banking', 'healthcare', 'government', 'education', 'business', 'ngo'] as const
const industryIcons = ['bi-bank', 'bi-heart-pulse', 'bi-building', 'bi-mortarboard', 'bi-briefcase', 'bi-globe2'] as const
const industryColors = ['primary', 'danger', 'info', 'success', 'warning', 'secondary'] as const

// Re-fetch when locale changes — the Accept-Language header
// in useGraphql picks up the new locale automatically
watch(locale, () => {
  homepageStore.fetchIndustries(6)
})

// Prefer API data, fall back to i18n static
const displayIndustries = computed(() => {
  if (homepageStore.industries.length > 0) {
    return homepageStore.industries.slice(0, 6).map(ind => ({
      title: ind.title,
      description: ind.short_description || ind.description || '',
      icon: iconBootstrapMap[ind.icon ?? ''] || 'bi-gear',
      iconColor: iconColorMap[ind.icon_color ?? ''] || 'primary',
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
