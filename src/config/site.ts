export const siteConfig = {
  name: "Your Company Name",
  description: "A clear, direct description of what your company does and the value it delivers.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "info@yourcompany.com",
  phone: "+1 (555) 000-0000",
  address: "123 Business Street, City, State, ZIP",
  socialLinks: {
    linkedin: "https://linkedin.com/company/yourcompany",
    twitter: "https://twitter.com/yourcompany",
    facebook: "https://facebook.com/yourcompany",
    instagram: "https://instagram.com/yourcompany",
  },
} as const;
