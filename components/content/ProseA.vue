<script setup>
const props = defineProps({
  href: {
    type: String,
    required: true
  }
})
</script>

<template>
  <LinkResolver :href="href">
    <slot />
  </LinkResolver>
</template>
