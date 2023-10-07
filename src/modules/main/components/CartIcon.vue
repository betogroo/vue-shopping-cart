<script setup lang="ts">
import { ref } from 'vue'

const showCart = ref(false)
const handleClick = () => {
  showCart.value = !showCart.value
  console.log(showCart.value)
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
