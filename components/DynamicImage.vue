<script setup>
const props = defineProps({
  image: Object,
  decorative: {
    type: Boolean,
    default: false
  }
})

const alt = props.decorative !== true
  ? props.image.alt || 'Uh oh, someone forgot alt text!'
  : null

let url = props.image.filename

const dimensions = {
  width: url.split('/')[5].split('x')[0],
  height: url.split('/')[5].split('x')[1]
}
</script>

<template>
  <figure :id="`image-${image.id}`" :class="{ decorative: decorative }">
    <nuxt-picture
      :src="`${image.filename}/m/`"
      :alt="alt"
      :height="dimensions.height"
      :width="dimensions.width"
    />

    <figcaption v-if="image.title">{{ image.title }}</figcaption>
  </figure>
</template>
