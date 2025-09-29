import { z, defineCollection } from 'astro:content'

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    cover: z.string().optional(),
    series: z.number().optional(),
    set: z.number().optional(),
    group: z.boolean().optional(),
    commentary: z.string().optional()
  })
})

export const collections = {
  posts: postsCollection,
};
