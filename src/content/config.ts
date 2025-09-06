import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160).optional(),
    navLabel: z.string().optional(),
    heroImage: z.string().optional(),
    updated: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const posts = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  })
});

export const collections = { pages, posts };