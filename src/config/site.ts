export const siteConfig = {
  name: "BISTA Solutions",
  tagline: "IT Excellence",
  description:
    "Translating decades of expertise into cutting-edge software development and database management for government and corporate institutions.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "info@bistasolutions.com",
  phone: "+233 244 586 714",
  address: "Nii Teiko Kwame Close, Kokomlemle, Accra, Ghana",
  socialLinks: {
    twitter: "https://twitter.com/bistasolutions",
    linkedin: "https://linkedin.com/company/bistasolutions",
    facebook: "https://facebook.com/bistasolutions",
  },
} as const;
