<script setup>
const props = defineProps({
  href: {
    type: String,
    required: true
  }
})

// To bind any extra attributes on the component
const attrs = useAttrs()

// Simple test for this site's purposes (not a good overall solution)
const isExternal = computed(() => {
  return (
    (/^(http)/).test(props.href))
    ||
    process.browser && (props.href.indexOf(location.hostname) < 0
  )
})
</script>

<template>
  <span>
    <ExternalLink
      v-if="isExternal"
      v-bind="attrs"
      :href="href"
    >
      <slot />
    </ExternalLink>

    <NuxtLink
      v-else
      v-bind="attrs"
      :to="href"
    >
      <slot />
    </NuxtLink>
  </span>
</template>
