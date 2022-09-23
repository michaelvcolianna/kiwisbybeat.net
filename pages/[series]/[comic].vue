<script setup>
const { series, comic } = useRoute().params

// Commenting until a solution is determined
// const [prev, next] = await queryContent(series)
//   .only(['_path', 'title'])
//   .where({
//     _path: {
//       $ne: `/${series}`
//     }
//   })
//   .findSurround(comic)

// Temporary solution until findSurround works
// @note Then/catch prevents a 500, but ohmyfetch still outputs in the console
const comicParts = comic.split('-')
const numPrev = parseInt(comicParts[1]) - 1
const numNext = parseInt(comicParts[1]) + 1

const prev = await queryContent()
  .only(['_path', 'title'])
  .where({
    _path: {
      $eq: `/${series}/part-${numPrev}`
    }
  })
  .findOne()
  .then((response) => {
    return response
  })
  .catch((error) => {
    return null
  })

const next = await queryContent()
  .only(['_path', 'title'])
  .where({
    _path: {
      $eq: `/${series}/part-${numNext}`
    }
  })
  .findOne()
  .then((response) => {
    return response
  })
  .catch((error) => {
    return null
  })

// Get comic info
const page = await queryContent()
  .only(['title'])
  .where({
    _path: {
      $eq: `/${series}/${comic}`
    }
  })
  .findOne()

// Get series info
const parent = await queryContent()
  .only(['_path', 'title'])
  .where({
    _path: {
      $eq: `/${series}`
    }
  })
  .findOne()

useHead({
  titleTemplate: (titleChunk) => {
    return `${parent.title} – ${titleChunk} | Kiwis by Beat!`
  }
})

</script>

<template>
  <main>
    <h1>
      <small>{{ parent.title }}</small>
      {{ page.title }}
    </h1>

    <ContentDoc />

    <nav>
      <h3>Change pages</h3>

      <ul>
        <li>
          <NuxtLink v-if="prev" :to="prev._path">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em" aria-hidden="true"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>
            <span>Previous page:</span>
            {{ prev.title }}
          </NuxtLink>

          <span v-else>No previous page</span>
        </li>

        <li>
          <NuxtLink :to="parent._path">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em" aria-hidden="true"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
            <span>Back to:</span>
            {{ parent.title }}
          </NuxtLink>
        </li>

        <li>
          <NuxtLink v-if="next" :to="next._path">
            <span>Next page:</span>
            {{ next.title }}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em" aria-hidden="true"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
          </NuxtLink>

          <span v-else>No next page</span>
        </li>
      </ul>
    </nav>
  </main>
</template>
