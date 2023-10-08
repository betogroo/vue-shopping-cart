import { z } from 'zod'

export const ProductSchema = z.object({
  id: z.string(),
  title: z.string(),
  thumbnail: z.string(),
  price: z.number(),
})

export const ProductList = z.array(ProductSchema)

export type Product = z.infer<typeof ProductSchema>
