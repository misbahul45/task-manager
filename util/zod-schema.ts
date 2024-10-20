import { z } from "zod";

export const CreatePostSchema = z.object({
    title: z.string().trim().min(5, 'Title must be at least 5 characters'),
    desc: z.string().trim().optional(),
    completed: z.boolean(),
    important: z.boolean(),
    date: z.string().refine(val => !isNaN(Date.parse(val)), {
      message: "Invalid date format"
    })
  })
  