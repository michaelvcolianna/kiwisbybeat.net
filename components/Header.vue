<template>
  <header>
    <NuxtLink to="/">Kiwis by Beat!</NuxtLink>

    <nav>
      <h3>Comics</h3>

      <ul>
        <ContentNavigation v-slot="{ navigation }">
          <li v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          </li>
        </ContentNavigation>
      </ul>
    </nav>
  </header>
</template>
