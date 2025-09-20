<template>
  <div v-if="showMonitor" class="performance-monitor position-fixed bottom-0 end-0 m-3">
    <div class="card bg-dark text-white" style="min-width: 300px; z-index: 9999;">
      <div class="card-header d-flex justify-content-between align-items-center py-2">
        <small class="fw-bold">Performance Monitor</small>
        <button @click="showMonitor = false" class="btn-close btn-close-white btn-sm"></button>
      </div>
      <div class="card-body py-2">
        <div class="row g-2 text-center">
          <div class="col-4">
            <div class="small">FCP</div>
            <div class="fw-bold" :class="fcpColor">{{ fcp }}ms</div>
          </div>
          <div class="col-4">
            <div class="small">LCP</div>
            <div class="fw-bold" :class="lcpColor">{{ lcp }}ms</div>
          </div>
          <div class="col-4">
            <div class="small">CLS</div>
            <div class="fw-bold" :class="clsColor">{{ cls }}</div>
          </div>
        </div>
        <div class="mt-2">
          <div class="small">Sections: {{ sectionCount }} | Empty: {{ emptySections }}</div>
          <div class="small">Viewport: {{ viewport.width }}×{{ viewport.height }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const showMonitor = ref(process.env.NODE_ENV === 'development')
const fcp = ref(0)
const lcp = ref(0)
const cls = ref(0)
const sectionCount = ref(0)
const emptySections = ref(0)
const viewport = ref({ width: 0, height: 0 })

// Performance thresholds based on Google's Core Web Vitals
const fcpColor = computed(() => {
  if (fcp.value <= 1800) return 'text-success'
  if (fcp.value <= 3000) return 'text-warning'
  return 'text-danger'
})

const lcpColor = computed(() => {
  if (lcp.value <= 2500) return 'text-success'
  if (lcp.value <= 4000) return 'text-warning'
  return 'text-danger'
})

const clsColor = computed(() => {
  if (cls.value <= 0.1) return 'text-success'
  if (cls.value <= 0.25) return 'text-warning'
  return 'text-danger'
})

onMounted(() => {
  if (process.env.NODE_ENV !== 'development') return

  // Monitor Core Web Vitals
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      if (entry.name === 'first-contentful-paint') {
        fcp.value = Math.round(entry.startTime)
      }
    }
  }).observe({ entryTypes: ['paint'] })

  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      lcp.value = Math.round(entry.startTime)
    }
  }).observe({ entryTypes: ['largest-contentful-paint'] })

  new PerformanceObserver((entryList) => {
    let clsValue = 0
    for (const entry of entryList.getEntries()) {
      if (!entry.hadRecentInput) {
        clsValue += entry.value
      }
    }
    cls.value = Math.round(clsValue * 1000) / 1000
  }).observe({ entryTypes: ['layout-shift'] })

  // Monitor sections
  const checkSections = () => {
    const sections = document.querySelectorAll('section, [class*="SectionWrapper"]')
    sectionCount.value = sections.length

    let empty = 0
    sections.forEach(section => {
      if (section.offsetHeight < 50 || !section.textContent.trim()) {
        empty++
      }
    })
    emptySections.value = empty
  }

  // Monitor viewport
  const updateViewport = () => {
    viewport.value = {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  checkSections()
  updateViewport()

  window.addEventListener('resize', updateViewport)

  // Recheck sections periodically
  setInterval(checkSections, 5000)

  // Keyboard shortcut to toggle monitor
  const handleKeydown = (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'P') {
      showMonitor.value = !showMonitor.value
    }
  }
  document.addEventListener('keydown', handleKeydown)

  onUnmounted(() => {
    window.removeEventListener('resize', updateViewport)
    document.removeEventListener('keydown', handleKeydown)
  })
})
</script>

<style scoped>
.performance-monitor {
  font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
  font-size: 12px;
}

.card {
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>