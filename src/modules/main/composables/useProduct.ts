import { ref } from 'vue'
import type { Product } from '../types/Product'

const useProduct = () => {
  const products = ref<Product[]>([
    { id: 1, name: 'Celular' },
    { id: 2, name: 'Notebook' },
    { id: 3, name: 'Smartwatch' },
    { id: 4, name: 'Geladeira' },
    { id: 5, name: 'Fogão' },
  ])
  return { products }
}

export default useProduct
