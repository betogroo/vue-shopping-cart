<script setup lang="ts">
import ProductContainer from './ProductContainer.vue'
import { useProduct } from '../composables'
const { products } = useProduct()
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
