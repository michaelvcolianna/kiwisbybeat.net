<script setup>
const props = defineProps({ id: String })
</script>

<template>
  <h2>
    <slot />
  </h2>
</template>
