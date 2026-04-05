import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()),
    coverImage: z.string().optional(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().optional().default(false)
  })
});

export const collections = {
  posts
};
