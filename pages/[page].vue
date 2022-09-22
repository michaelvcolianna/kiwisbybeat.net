<script setup>
const { page } = useRoute().params

// Get this page
const overview = await queryContent()
  .only(['title'])
  .where({
    _path: {
      $eq: `/${page}`
    }
  })
  .findOne()

// Get the children of this series, excluding this page
const series = await queryContent(page)
  .only(['_path', 'title'])
  .where({
    _path: {
      $ne: `/${page}`
    }
  })
  .find()

useHead({
  titleTemplate: (titleChunk) => {
    return `${titleChunk} | Kiwis by Beat!`
  }
})
</script>

<template>
  <main>
    <h1>{{ overview.title }}</h1>

    <ContentDoc />

    <nav>
      <div v-for="comic of series" :key="comic._path">
        <NuxtLink :to="comic._path">{{ comic.title }}</NuxtLink>
      </div>
    </nav>
  </main>
</template>
