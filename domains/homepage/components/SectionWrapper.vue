<template>
  <!-- Professional Section Wrapper - Based on Around Template Patterns -->
  <section
    :class="[
      'position-relative',
      paddingClass,
      backgroundClass,
      { 'overflow-hidden': hasOverflow }
    ]"
    :style="customStyles"
  >
    <!-- Background Elements -->
    <div v-if="hasBackground" class="position-absolute top-0 start-0 w-100 h-100">
      <slot name="background"></slot>
    </div>

    <!-- Content Container -->
    <div :class="containerClass">
      <div v-if="hasHeader" class="row justify-content-center mb-5">
        <div :class="headerColumnClass">
          <slot name="header"></slot>
        </div>
      </div>

      <!-- Main Content -->
      <slot></slot>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

// Define props using defineProps
const props = defineProps({
  // Spacing control
  spacing: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl', 'custom'].includes(value)
  },
  paddingTop: String,
  paddingBottom: String,

  // Background control
  backgroundColor: {
    type: String,
    default: 'transparent',
    validator: (value) => ['primary', 'secondary', 'light', 'dark', 'transparent'].includes(value)
  },
  customBackground: String,
  hasOverflow: {
    type: Boolean,
    default: false
  },

  // Container control
  containerSize: {
    type: String,
    default: 'container',
    validator: (value) => ['container', 'container-fluid', 'custom'].includes(value)
  },
  maxWidth: String,

  // Header section control
  hasHeader: {
    type: Boolean,
    default: false
  },
  headerWidth: {
    type: String,
    default: 'lg',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },

  // Debugging
  debugMode: {
    type: Boolean,
    default: false
  },

  // Background slot
  hasBackground: {
    type: Boolean,
    default: false
  }
})

// Computed classes and styles
const paddingClass = computed(() => {
  if (props.spacing === 'custom') return ''

  const spacingMap = {
    sm: 'py-4 py-lg-5',
    md: 'py-5 py-lg-6',
    lg: 'py-5 py-lg-6',
    xl: 'py-6 py-lg-7'
  }

  return spacingMap[props.spacing]
})

const backgroundClass = computed(() => {
  if (props.customBackground) return ''

  const bgMap = {
    primary: 'bg-dark text-white',
    secondary: 'bg-light',
    light: 'bg-light',
    dark: 'bg-dark text-white',
    transparent: ''
  }

  return bgMap[props.backgroundColor]
})

const containerClass = computed(() => {
  if (props.containerSize === 'custom') return ''
  return props.containerSize
})

const headerColumnClass = computed(() => {
  const widthMap = {
    sm: 'col-lg-6 col-xl-5',
    md: 'col-lg-8 col-xl-7',
    lg: 'col-lg-8 col-xl-7',
    xl: 'col-lg-10 col-xl-9'
  }

  return `${widthMap[props.headerWidth]} text-center`
})

const customStyles = computed(() => {
  const styles = {}

  if (props.spacing === 'custom') {
    if (props.paddingTop) styles.paddingTop = props.paddingTop
    if (props.paddingBottom) styles.paddingBottom = props.paddingBottom
  }

  if (props.customBackground) {
    styles.background = props.customBackground
  }

  if (props.maxWidth) {
    styles.maxWidth = props.maxWidth
  }

  if (props.debugMode) {
    styles.border = '2px dashed #ff6b6b'
    styles.minHeight = '100px'
  }

  return styles
})
</script>

<style scoped>
/* Professional spacing based on Around template */
.py-6 {
  padding-top: 4rem !important;
  padding-bottom: 4rem !important;
}

.py-lg-7 {
  @media (min-width: 992px) {
    padding-top: 5rem !important;
    padding-bottom: 5rem !important;
  }
}

/* Ensure consistent spacing between sections */
section + section {
  margin-top: 0;
}

/* Debug mode styling */
[style*="border: 2px dashed"] {
  position: relative;
}

[style*="border: 2px dashed"]::before {
  content: 'DEBUG: ' attr(class);
  position: absolute;
  top: -30px;
  left: 0;
  background: #ff6b6b;
  color: white;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
  z-index: 1000;
}
</style>