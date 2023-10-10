<script setup lang="ts">
import { useCartStore } from '../store/useCartStore'
const store = useCartStore()
const { itemsCount } = store

const handleClick = () => {
  store.toggleVisible()
}
</script>

<template>
  <v-badge
    class="ma-2"
    color="red"
    :content="itemsCount"
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
