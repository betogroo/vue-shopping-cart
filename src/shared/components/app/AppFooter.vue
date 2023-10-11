<template>
  <v-bottom-navigation
    density="compact"
    :elevation="0"
    grow
    mode="shift"
    :order="-1"
  >
    <v-btn :to="{ name: 'HomeView' }">
      <v-icon>mdi-home</v-icon>

      <span>Home</span>
    </v-btn>

    <v-btn :to="{ name: 'AboutView' }">
      <v-icon>mdi-information</v-icon>

      <span>About Us</span>
    </v-btn>
  </v-bottom-navigation>
</template>
