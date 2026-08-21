import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writeups = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/writeups',
  }),

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
    image: z.string().optional(),
  }),
});

export const collections = {
  writeups,
};