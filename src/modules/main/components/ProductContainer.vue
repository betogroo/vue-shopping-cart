<script setup lang="ts">
import { toRefs } from 'vue'
import type { Product } from '../types/Product'
import { useHelpers } from '@/shared/composables'
import { useDisplay } from 'vuetify/lib/framework.mjs'
const props = defineProps<Props>()
const { localCurrency } = useHelpers()
const { mobile } = useDisplay()
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
      height="390"
      max-width="190"
      variant="elevated"
      width="100%"
      v-bind="props"
    >
      <v-img
        cover
        :src="product.thumbnail"
      />
      <v-divider class="pt-1" />
      <v-card-text class="align-center justify-space-around">
        <div class="text-h5 text-center">
          {{ localCurrency(+product.price) }}
        </div>
        <v-btn
          v-if="mobile"
          block
          color="green"
          size="small"
          @click="handleClick"
          >Colocar no Carrinho</v-btn
        >
      </v-card-text>
      <v-card-text
        class="text-caption text-justify font-weight-medium pt-0 px-3"
      >
        {{ product.title }}
      </v-card-text>
      <v-overlay
        v-if="!mobile"
        class="align-center justify-center"
        contained
        :model-value="isHovering"
        scrim="#036358"
      >
        <v-btn
          color="green"
          size="small"
          @click="handleClick"
          >Colocar no Carrinho</v-btn
        >
      </v-overlay>
    </v-card>
  </v-hover>
</template>
