<template>
  <v-app-bar
    color="teal-darken-4"
    density="compact"
  >
    <v-app-bar-title>
      <RouterLink
        class="text-white text-decoration-none"
        :to="{ name: 'HomeView' }"
        >Vue Shopping Cart</RouterLink
      >
    </v-app-bar-title>
  </v-app-bar>
</template>
