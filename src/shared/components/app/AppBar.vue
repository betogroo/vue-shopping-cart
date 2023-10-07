<script setup lang="ts">
import { SearchTextField } from '@/modules/main/components'
import { useDisplay } from 'vuetify/lib/framework.mjs'
const { xs, md } = useDisplay()
</script>
<template>
  <v-app-bar
    color="teal-darken-4"
    density="compact"
  >
    <template #prepend
      ><v-img
        cover
        src="@/assets/logo_100.png"
        width="60"
    /></template>
    <template
      v-if="!xs"
      #title
    >
      <RouterLink
        class="text-white text-decoration-none ml-0"
        :to="{ name: 'HomeView' }"
        >Vue Shopping Cart</RouterLink
      >
    </template>

    <template #default>
      <v-sheet
        color="transparent"
        :width="md ? 350 : 650"
      >
        <SearchTextField />
      </v-sheet>
    </template>
    <template #append>
      <v-badge
        class="ma-2"
        color="red"
        :content="4"
        location="right top"
      >
        <v-btn
          density="compact"
          icon="mdi-cart-variant"
          variant="text"
        />
      </v-badge>
    </template>
  </v-app-bar>
</template>
