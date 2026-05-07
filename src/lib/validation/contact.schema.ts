import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name contains invalid characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(255, "Email is too long")
    .toLowerCase(),
  phone: z
    .string()
    .regex(/^[+]?[\d\s()-]{7,20}$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(200, "Subject is too long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message is too long"),
  company_url: z.string().max(0).optional(),
  recaptchaToken: z.string().min(1, "reCAPTCHA verification required"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
