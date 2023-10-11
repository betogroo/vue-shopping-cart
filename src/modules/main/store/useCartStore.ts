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

  const deleteItem = (index: number) => {
    cartItems.value.splice(index, 1)
  }

  //getters
  const itemsCount = computed(() => cartItems.value.length)

  const cartAmount = computed(() => {
    const amount = cartItems.value.reduce((acc, item) => {
      return (acc += item.price)
    }, 0)
    return amount
  })

  return {
    visible,
    cartItems,
    toggleVisible,
    deleteItem,
    itemsCount,
    cartAmount,
  }
})
