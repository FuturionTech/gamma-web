<template>
  <div class="dropdown" ref="dropdownEl">
    <button
      class="btn btn-outline-secondary dropdown-toggle px-3"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <img :src="'/assets/img/flags/' + locale + '.png'" width="18" :alt="locale.toUpperCase()">
      {{ locale.toUpperCase() }}
    </button>
    <div class="dropdown-menu dropdown-menu-end my-1">
      <a
        class="dropdown-item pb-1"
        v-for="lang in otherLocales"
        :key="lang.code"
        @click.prevent="switchLocale(lang.code)"
        style="cursor: pointer;"
      >
        <img :src="'/assets/img/flags/' + lang.code + '.png'" width="18" :alt="lang.code.toUpperCase()">
        {{ lang.code.toUpperCase() }}
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue'

const { locale, setLocale, availableLocales, initializeLocale } = useI18n()
const dropdownEl = ref<HTMLElement | null>(null)

// Restore persisted locale on mount
onMounted(() => {
  initializeLocale()
})

const otherLocales = computed(() =>
  availableLocales.value
    .map((code: string) => ({ code }))
    .filter((l: { code: string }) => l.code !== locale.value)
)

/** Switch locale, close Bootstrap dropdown, persist choice */
const switchLocale = (code: string) => {
  setLocale(code)

  // Programmatically close the Bootstrap dropdown
  if (dropdownEl.value) {
    const bsDropdown = (window as any).bootstrap?.Dropdown?.getInstance(
      dropdownEl.value.querySelector('[data-bs-toggle="dropdown"]')
    )
    bsDropdown?.hide()
  }
}
</script>

<style scoped>
.dropdown-item {
  cursor: pointer;
}
</style>
