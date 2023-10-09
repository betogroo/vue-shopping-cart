<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs'
import { storeToRefs } from 'pinia'
import { useCartStore } from '../store/useCartStore'

const { mobile } = useDisplay()
const store = useCartStore()
const { visible } = storeToRefs(store)
</script>

<template>
  <v-navigation-drawer
    v-model="visible"
    :location="mobile ? 'bottom' : 'right'"
    temporary
  >
  </v-navigation-drawer>
</template>
