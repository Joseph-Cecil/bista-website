import { z } from "zod";

export const careerApplicationSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(255).toLowerCase(),
  phone: z.string().regex(/^[+]?[\d\s()-]{7,20}$/).optional(),
  position: z.string().min(2).max(200),
  coverLetter: z.string().min(50).max(5000),
  linkedIn: z.string().url().optional().or(z.literal("")),
  company_url: z.string().max(0).optional(),
  recaptchaToken: z.string().min(1),
});

export type CareerApplicationData = z.infer<typeof careerApplicationSchema>;
