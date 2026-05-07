import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function generatePageMetadata(
  title: string,
  description?: string
): Metadata {
  return {
    title,
    description: description || siteConfig.description,
    openGraph: {
      title: \ | \,
      description: description || siteConfig.description,
      url: siteConfig.url,
    },
  };
}
