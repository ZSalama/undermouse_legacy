import { z } from 'zod'

export const formSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(1, 'Message is required'),
    favoriteColor: z.string().optional(),
})

export type ContactForm = z.infer<typeof formSchema>
