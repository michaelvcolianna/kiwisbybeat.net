<script setup>
const { series, comic } = useRoute().params

const [prev, next] = await queryContent(series)
  .only(['_path', 'title'])
  .where({
    _path: {
      $ne: `/${series}`
    }
  })
  .findSurround(comic)
</script>

<template>
  <main>
    <ContentDoc />

    <pre>missing prev/next navs: {{ [prev, next] }}</pre>
  </main>
</template>
