<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs'
import { storeToRefs } from 'pinia'
import { useCartStore } from '../store/useCartStore'
import { useHelpers } from '@/shared/composables'

const { mobile } = useDisplay()
const store = useCartStore()
const { visible, cartItems } = storeToRefs(store)
const { localCurrency } = useHelpers()

const handleDelete = (index: number) => {
  console.log('Vai deletar', index)
}
</script>

<template>
  <v-navigation-drawer
    v-model="visible"
    :location="mobile ? 'bottom' : 'right'"
    temporary
  >
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
        <template #title>{{ item.title }}</template>
        <template #subtitle>
          <h1 class="font-weight-bold text-right">
            {{ localCurrency(item.price) }}
          </h1></template
        >
        <template #prepend>
          <v-avatar
            :image="item.thumbnail"
            size="40"
            variant="elevated"
          ></v-avatar>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
