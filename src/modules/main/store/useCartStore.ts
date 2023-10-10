// Utilities
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // state
  const visible = ref(false)

  //methods
  const toggleVisible = () => {
    visible.value = !visible.value
  }

  //getters
  const itemsCount = computed(() => {
    return 8
  })

  return { visible, toggleVisible, itemsCount }
})
