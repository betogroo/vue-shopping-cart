<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCartStore } from '../store/useCartStore'
const store = useCartStore()

const { itemsCount } = storeToRefs(store)

const handleClick = () => {
  store.toggleVisible()
}
</script>

<template>
  <v-badge
    bordered
    class="ma-2"
    color="transparent"
    location="right top"
  >
    <template #badge
      ><small>{{ itemsCount }}</small></template
    >
    <v-btn
      density="compact"
      icon="mdi-cart-variant"
      variant="text"
      @click="handleClick"
    />
  </v-badge>
</template>
