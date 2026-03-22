<template>
  <div class="lang-selector" ref="dropdownEl">
    <button
      class="lang-toggle"
      type="button"
      :aria-expanded="isOpen"
      @click.stop="isOpen = !isOpen"
    >
      <img :src="'/assets/img/flags/' + locale + '.png'" width="18" :alt="locale.toUpperCase()">
      <span>{{ locale.toUpperCase() }}</span>
      <i class="bi bi-chevron-down lang-chevron" :class="{ 'lang-chevron-open': isOpen }"></i>
    </button>
    <Transition name="lang-dropdown">
      <div v-if="isOpen" class="lang-menu">
        <button
          class="lang-option"
          v-for="lang in otherLocales"
          :key="lang.code"
          @click="switchLocale(lang.code)"
        >
          <img :src="'/assets/img/flags/' + lang.code + '.png'" width="18" :alt="lang.code.toUpperCase()">
          <span>{{ lang.code.toUpperCase() }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

const { locale, setLocale, availableLocales, initializeLocale } = useI18n()
const dropdownEl = ref<HTMLElement | null>(null)
const isOpen = ref(false)

// Restore persisted locale on mount
onMounted(() => {
  initializeLocale()
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

const handleClickOutside = (e: Event) => {
  if (dropdownEl.value && !dropdownEl.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

const otherLocales = computed(() =>
  availableLocales.value
    .map((code: string) => ({ code }))
    .filter((l: { code: string }) => l.code !== locale.value)
)

const switchLocale = (code: string) => {
  setLocale(code)
  isOpen.value = false
}
</script>

<style scoped>
.lang-selector {
  position: relative;
}

.lang-toggle {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.85);
  padding: 0.4rem 0.65rem;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.lang-toggle:hover {
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
}

.lang-chevron {
  font-size: 0.6rem;
  transition: transform 0.2s ease;
  opacity: 0.6;
}

.lang-chevron-open {
  transform: rotate(180deg);
}

.lang-menu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  background: #1a1a2e;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  padding: 0.35rem;
  min-width: 100%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  z-index: 1100;
}

.lang-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.75);
  padding: 0.5rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.lang-option:hover {
  background: rgba(139, 92, 246, 0.15);
  color: #ffffff;
}

/* Transition */
.lang-dropdown-enter-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.lang-dropdown-leave-active {
  transition: opacity 0.1s ease, transform 0.1s ease;
}

.lang-dropdown-enter-from,
.lang-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
