<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: undefined
  },
  width: {
    type: [String, Number],
    default: undefined
  },
  height: {
    type: [String, Number],
    default: undefined
  },
  loading: {
    type: String,
    default: 'lazy'
  }
})
</script>

<template>
  <figure>
    <nuxt-picture
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="loading"
    />

    <figcaption v-if="$slots.default">
      <h2>Description</h2>

      <slot />
    </figcaption>
  </figure>
</template>
