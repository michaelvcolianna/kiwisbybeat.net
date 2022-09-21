<script setup>
const { page } = useRoute().params

// Get the children of this series, excluding this page
const series = await queryContent(page)
  .only(['_path', 'title'])
  .where({
    _path: {
      $ne: `/${page}`
    }
  })
  .find()
</script>

<template>
  <main>
    <ContentDoc />

    <nav>
      <div v-for="comic of series" :key="comic._path">
        <NuxtLink :to="comic._path">{{ comic.title }}</NuxtLink>
      </div>
    </nav>
  </main>
</template>
