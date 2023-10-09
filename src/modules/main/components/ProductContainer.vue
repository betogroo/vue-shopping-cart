<script setup lang="ts">
import { toRefs } from 'vue'
import type { Product } from '../types/Product'
import { useHelpers } from '@/shared/composables'
const props = defineProps<Props>()
const { localCurrency } = useHelpers()
interface Props {
  product: Product
}
const { product } = toRefs(props)
const handleClick = () => {
  console.log(product.value.id)
}
</script>

<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card
      class="ma-2"
      :class="{ 'on-hover': isHovering }"
      :elevation="isHovering ? 10 : 2"
      height="380"
      max-width="190"
      variant="elevated"
      width="100%"
      v-bind="props"
    >
      <v-img
        cover
        :src="product.thumbnail"
      />
      <v-sheet
        class="text-body-2 text-justify font-weight-medium pa-3"
        height="100"
      >
        {{ product.title }}
      </v-sheet>
      <v-card-actions class="justify-space-around">
        <div class="text-h5 pl-3">{{ localCurrency(+product.price) }}</div>

        <v-btn
          color="success"
          icon="mdi-cart-plus
        "
          size="x-large"
          @click="handleClick"
        />
      </v-card-actions>
    </v-card>
  </v-hover>
</template>
