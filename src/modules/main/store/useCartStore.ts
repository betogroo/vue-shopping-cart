// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const visible = ref(true)

  const toggleVisible = () => {
    visible.value = !visible.value
  }

  return { visible, toggleVisible }
})
