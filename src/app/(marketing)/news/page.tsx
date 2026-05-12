import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "News & Press | BISTA Solutions",
};

export default function NewsPage() {
  redirect("/blog");
}
