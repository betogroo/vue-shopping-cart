import { z } from 'zod'

const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
})

export type Product = z.infer<typeof ProductSchema>
