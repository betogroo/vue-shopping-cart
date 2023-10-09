<script setup lang="ts">
import { watchEffect } from 'vue'
import { ProductList } from '../components'
import { useProduct } from '../composables'
const { products, fetchProducts } = useProduct()
watchEffect(async () => {
  await fetchProducts()
})
</script>
<template>
  <v-container class="d-flex justify-center bg-blue-grey-lighten-5 pa-1 pt-6">
    <v-responsive class="justify-center ma-0">
      <ProductList :products="products" />
    </v-responsive>
  </v-container>
</template>
