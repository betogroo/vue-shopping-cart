<script setup lang="ts">
import { AppBar, AppFooter } from '@/shared/components'
</script>
<template>
  <v-app>
    <AppBar />
    <v-main class="bg-blue-grey-lighten-5">
      <Suspense>
        <RouterView />
        <template #fallback>Loading</template>
      </Suspense>
      <AppFooter />
    </v-main>
  </v-app>
</template>
