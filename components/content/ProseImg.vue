<script setup>
const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
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
  <figure :aria-hidden="!alt && !title">
    <nuxt-picture
      :src="src"
      :alt="alt || title"
      :width="width"
      :height="height"
      :loading="loading"
    />

    <figcaption v-if="title">{{ title }}</figcaption>
  </figure>
</template>
