<script setup lang="ts">
import { watchEffect } from 'vue'
import { ProductList } from '../components'
import { useProduct } from '../composables'
import { AppOverlayLoading } from '@/shared/components'
const props = defineProps<Props>()
const { products, fetchProducts, isPending } = useProduct()
interface Props {
  search: string
}
watchEffect(async () => {
  await fetchProducts(props.search)
})
const overlay = true
</script>
<template>
  <v-container class="d-flex justify-center pa-1 pt-6">
    <v-responsive class="justify-center ma-0">
      <span class="text-h6"
        >Resultados para: <br />
        {{ search }}</span
      >
      <ProductList
        :is-pending="isPending"
        :products="products"
      />
      <AppOverlayLoading :active="isPending" />
    </v-responsive>
  </v-container>
</template>
