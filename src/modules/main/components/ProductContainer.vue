<script setup lang="ts">
import { toRefs } from 'vue'
import type { Product } from '../types/Product'
interface Props {
  product: Product
}
const props = defineProps<Props>()
const { product } = toRefs(props)
</script>

<template>
  <v-card
    class="ma-1"
    height="250"
    variant="outlined"
    width="125"
  >
    <v-card-title>{{ product.title }}</v-card-title>
  </v-card>
</template>
