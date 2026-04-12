<template>
  <div
    class="shimmer-block"
    :class="[
      pill ? 'shimmer-pill' : '',
      customClass
    ]"
    :style="{
      width: width,
      height: height,
      borderRadius: radius
    }"
  ></div>
</template>

<script setup lang="ts">
interface Props {
  width?: string
  height?: string
  radius?: string
  pill?: boolean
  customClass?: string
}

withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '1rem',
  radius: '0.5rem',
  pill: false,
  customClass: ''
})
</script>
