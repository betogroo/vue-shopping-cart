<script setup lang="ts">
import { useCartStore } from '../store/useCartStore'
const store = useCartStore()

const handleClick = () => {
  store.toggleVisible()
}
</script>

<template>
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
      @click="handleClick"
    />
  </v-badge>
</template>
