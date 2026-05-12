import type { Metadata } from "next";
import { ProductsHero } from "@/components/products/products-hero";
import { ProductsFeatures } from "@/components/products/products-features";
import { ProductsCta } from "@/components/products/products-cta";

export const metadata: Metadata = {
  title: "Energizer Mobile | Official Country Representative",
  description:
    "BISTA Solutions is the official Ghanaian representative for Energizer mobile phones and accessories. Industry-leading battery life, rugged design, affordable quality.",
};

export default function ProductsPage() {
  return (
    <main>
      <ProductsHero />
      <ProductsFeatures />
      <ProductsCta />
    </main>
  );
}
