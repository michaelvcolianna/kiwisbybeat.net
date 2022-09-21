<script setup>
const props = defineProps({
  href: {
    type: String,
    default: ''
  },
  blank: {
    type: Boolean,
    default: false
  }
})

const externalLink = computed(() => {
  return (
    (/^(http)/).test(props.href))
    ||
    process.browser && (props.href.indexOf(location.hostname) < 0
  )
})
</script>

<template>
  <NuxtLink v-if="externalLink" :href="href" aria-describedby="label-external">
    <slot />
  </NuxtLink>

  <NuxtLink v-else :href="href">
    <slot />
  </NuxtLink>
</template>
