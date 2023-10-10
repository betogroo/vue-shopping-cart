// Utilities
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Product } from '../types/Product'

export const useCartStore = defineStore('cart', () => {
  // state
  const visible = ref(false)
  const cartItems = ref<Product[]>([
    {
      id: '97978979789',
      price: 560.56,
      thumbnail:
        'https://http2.mlstatic.com/D_782294-MLA47661212221_092021-I.jpg',
      title: 'Galaxy watch4',
    },
    {
      id: '213232',
      price: 780.66,
      thumbnail:
        'https://http2.mlstatic.com/D_782294-MLA47661212221_092021-I.jpg',
      title: 'Galaxy watch4 Pro',
    },
  ])
  //methods
  const toggleVisible = () => {
    visible.value = !visible.value
  }

  //getters
  const itemsCount = computed(() => cartItems.value.length)

  return { visible, cartItems, toggleVisible, itemsCount }
})
