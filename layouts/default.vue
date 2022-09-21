<template>
  <div>
    <header>
      <NuxtLink to="/">kiwis by beat!</NuxtLink>

      <nav>
        <ContentNavigation v-slot="{ navigation }">
          <div v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          </div>
        </ContentNavigation>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <em>copyright info</em>
    </footer>

    <div hidden>
      <span id="label-external">Opens an external site in a new window/tab</span>
    </div>
  </div>
</template>
