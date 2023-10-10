// Utilities
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Product } from '../types/Product'

export const useCartStore = defineStore('cart', () => {
  // state
  const visible = ref(false)
  const cartItems = ref<Product[]>([])

  // actions
  const toggleVisible = () => {
    visible.value = !visible.value
  }

  //getters
  const itemsCount = computed(() => cartItems.value.length)

  return { visible, cartItems, toggleVisible, itemsCount }
})
