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

const hasCaption = computed(() => {
  const slots = useSlots()

  return (slots['default'])
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

    <figcaption v-if="hasCaption">
      <h2>Description</h2>

      <slot />
    </figcaption>
  </figure>
</template>
