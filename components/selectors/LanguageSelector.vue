<template>
  <div class="dropdown">
    <button class="btn btn-outline-secondary dropdown-toggle px-3" type="button" data-bs-toggle="dropdown"
            data-bs-auto-close="outside" aria-expanded="false">
      <img :src="'/assets/img/flags/' + locale + '.png'" width="18" :alt="locale.toUpperCase()">
      {{ locale.toUpperCase() }}
    </button>
    <div class="dropdown-menu dropdown-menu-end my-1">
      <a class="dropdown-item pb-1"
         v-for="lang in otherLocales" :key="lang.code"
         @click.prevent="setLocale(lang.code)"
         style="cursor: pointer;">
        <img :src="'/assets/img/flags/' + lang.code + '.png'" width="18" :alt="lang.code.toUpperCase()">
        {{ lang.code.toUpperCase() }}
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed} from "vue";

const {locale, setLocale, availableLocales} = useI18n();

const otherLocales = computed(() => {
  return availableLocales.value
    .map(code => ({ code }))
    .filter(l => l.code !== locale.value);
});
</script>

<style scoped>
.dropdown-item {
  cursor: pointer;
}
</style>
