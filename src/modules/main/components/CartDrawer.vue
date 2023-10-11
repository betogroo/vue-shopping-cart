<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs'
import { storeToRefs } from 'pinia'
import { useCartStore } from '../store/useCartStore'
import { useHelpers } from '@/shared/composables'

const { mobile } = useDisplay()
const store = useCartStore()
const { visible, cartItems, cartAmount } = storeToRefs(store)
const { deleteItem } = store
const { localCurrency } = useHelpers()

const handleDelete = (index: number) => {
  deleteItem(index)
}
</script>

<template>
  <v-navigation-drawer
    v-model="visible"
    class="pt-4 px-1 pb-10"
    :location="mobile ? 'bottom' : 'right'"
    temporary
  >
    <template #prepend>
      <h1 class="text-h6">Carrinho de Compras</h1>
    </template>

    <v-list lines="two">
      <v-list-item
        v-for="(item, i) in cartItems"
        :key="i"
      >
        <template #append>
          <v-icon @click="handleDelete(i)">
            mdi-trash-can-outline</v-icon
          ></template
        >
        <template #title
          ><small>{{ item.title }}</small></template
        >
        <template #subtitle>
          <div class="font-weight-bold text-right text-subtitle-2">
            {{ localCurrency(item.price) }}
          </div></template
        >
        <template #prepend>
          <v-avatar
            :image="item.thumbnail"
            size="32"
            variant="elevated"
          ></v-avatar>
        </template>
      </v-list-item>
    </v-list>
    <div class="text-body-1 ml-3">
      Total no carrinho: {{ localCurrency(cartAmount) }}
    </div>
    <v-btn
      block
      color="success"
      prepend-icon="mdi-check"
      >Fechar pedido</v-btn
    >
  </v-navigation-drawer>
</template>
