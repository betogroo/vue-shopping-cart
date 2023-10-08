<script setup lang="ts">
import ProductContainer from './ProductContainer.vue'
import type { Product } from '../types/Product'
interface Props {
  products: Product[]
}
const props = defineProps<Props>()
</script>

<template>
  <div class="d-flex flex-wrap justify-center">
    <ProductContainer
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
