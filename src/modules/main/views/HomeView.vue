<script setup lang="ts">
import { ProductList } from '../components'
import { useProduct } from '../composables'
const { products, fetchProducts } = useProduct()
await fetchProducts()
</script>
<template>
  <v-container class="d-flex justify-center">
    <v-responsive class="justify-center">
      <ProductList :products="products" />
    </v-responsive>
  </v-container>
</template>
