import { defineCollection, z } from 'astro:content';

const writeups = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    machine: z.string(),
    os: z.enum(['linux', 'windows', 'other']),
    difficulty: z.enum(['easy', 'medium', 'hard', 'insane']),
    points: z.number().optional(),
    ip: z.string().optional(),
    releaseDate: z.coerce.date(),
    retired: z.boolean().default(true),
    tags: z.array(z.string()).default([]),
    description: z.string(),
    // Optional cover/hero image shown on the card and writeup header
    image: z.string().optional(),
  }),
});

export const collections = {
  writeups,
};
