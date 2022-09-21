<script setup>
const props = defineProps({ content: Object })

const resolvedRichText = computed(() => renderRichText(props.content))
</script>

<template>
  <div v-html="resolvedRichText"></div>
</template>
