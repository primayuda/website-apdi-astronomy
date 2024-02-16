import { defineCollection, z } from "astro:content";
import { format } from "@formkit/tempo"


const blog = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string(),
    category: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => format(new Date(val), 'long', 'id')),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? format(new Date(str), 'long', 'id') : undefined)),
  }),
});

const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const guides = defineCollection({
  type: 'content',
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
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    founder: z.boolean().default(false),
    apdi: z.string().optional(),
    photo: z.object({
      url: z.string(),
      thumbnail: z.string().optional(),
      alt: z.string().default('photo of APDI member')
    }),
    email: z.string().email(),
    linkedin: z.string().url(),
    twitter: z.string().url().optional(),
    instagram: z.string().url().optional(),
    facebook: z.string().url().optional(),
    dla: z.enum(["2021", "2022", "2023"]),
    stream: z.string(),
    skills: z.array(z.string()),
  })
})


export const collections = { blog , docs, guides, members };
