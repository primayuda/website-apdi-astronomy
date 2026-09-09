import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { format } from "date-fns";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string(),
    category: z.string(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => format(new Date(val), "dd MMM yyyy")),
    updatedDate: z
      .string()
      .optional()
      .transform((str) =>
        str ? format(new Date(str), "dd MMM yyyy") : undefined
      ),
  }),
});

const docs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/docs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
  }),
});

const members = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/members" }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    founder: z.boolean().default(false),
    apdi: z.string().optional(),
    photo: z.object({
      url: z.string(),
      thumbnail: z.string().optional(),
      alt: z.string().default("photo of APDI member"),
    }),
    email: z.string().email(),
    linkedin: z.string().url(),
    twitter: z.string().url().optional(),
    instagram: z.string().url().optional(),
    facebook: z.string().url().optional(),
    dla: z.enum(["2021", "2022", "2023"]),
    stream: z.string(),
    skills: z.array(z.string()),
  }),
});

export const collections = { blog, docs, guides, members };
