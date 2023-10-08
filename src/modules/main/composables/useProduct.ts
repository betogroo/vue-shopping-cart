import { ref } from 'vue'
import type { Product } from '../types/Product'

const url = 'https://api.mercadolibre.com/sites/MLB/search?q=all&limit=10'
const error = ref<string | null>(null)
const isPending = ref<string | boolean>(false)

const useProduct = () => {
  const products = ref([])

  const fetchProducts = async (limit = 10) => {
    try {
      if (url === undefined)
        throw new Error('Erro ao carregar as imagens (Url indefinida)')
      error.value = null
      isPending.value = true
      const res = await fetch(url)
      if (!res.ok) throw new Error('Erro ao carregar as Produtos')
      products.value = await res.json()
      console.log(products.value)
    } catch (err) {
      const e = err as Error
      error.value = e.message
      if (e instanceof Error) console.log(e.stack)
    } finally {
      isPending.value = false
    }
  }

  return { products, fetchProducts }
}

export default useProduct
