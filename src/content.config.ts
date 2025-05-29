import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const gists = defineCollection({
    loader: glob({ pattern: '**/[^_]*.mdx', base: "./src/data/gists" }),
    schema: z.object({
        title: z.string(),
        date: z.date(),
    }),
});

export const collections = { gists };
