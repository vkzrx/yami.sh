import { z, defineCollection } from "astro:content";

const writings = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.literal("Yami"),
    date: z.date(),
    draft: z.boolean(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  writings,
};
