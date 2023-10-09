<script setup lang="ts">
import { watchEffect } from 'vue'
import { ProductList } from '../components'
import { useProduct } from '../composables'
const props = defineProps<Props>()
const { products, fetchProducts } = useProduct()
interface Props {
  search: string
}
watchEffect(async () => {
  await fetchProducts(props.search)
})
</script>
<template>
  <v-container class="d-flex justify-center pa-1 pt-6">
    <v-responsive class="justify-center ma-0">
      <span class="text-h6"
        >Resultados para: <br />
        {{ search }}</span
      >
      <ProductList :products="products" />
    </v-responsive>
  </v-container>
</template>
