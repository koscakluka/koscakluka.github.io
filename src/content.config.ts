import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const gists = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/data/gists" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    edited: z.date().optional(),
    description: z.string().optional(),
    unpublished: z.boolean().default(false),
  }),
});

export const collections = { gists };
