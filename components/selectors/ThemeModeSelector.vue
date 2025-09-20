<template>
  <div class="form-check form-switch mode-switch order-lg-2 me-3 me-lg-4 ms-auto" data-bs-toggle="mode">
    <input class="form-check-input" type="checkbox" id="theme-mode">
    <label class="form-check-label" for="theme-mode">
      <i class="ai-sun fs-lg"></i>
    </label>
    <label class="form-check-label" for="theme-mode">
      <i class="ai-moon fs-lg"></i>
    </label>
  </div>
</template>

<script>
import {useThemeStore} from '~/stores/theme';

export default {
  name: "ThemeModeSelector",
  setup() {
    const store = useThemeStore();

    return {
      mode: store.mode,
      toggleMode: store.toggleMode
    }
  }
}
</script>
