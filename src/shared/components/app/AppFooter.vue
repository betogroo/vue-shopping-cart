<template>
  <v-footer app>
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        :ripple="false"
        :to="{ name: 'HomeView' }"
        variant="plain"
        >Home</v-btn
      >
      <v-btn
        :to="{ name: 'AboutView' }"
        variant="text"
        >About Us</v-btn
      >
      <v-col
        class="text-center mt-3"
        cols="12"
        >2023 - Vue Shopping Cart</v-col
      >
    </v-row>
  </v-footer>
</template>
