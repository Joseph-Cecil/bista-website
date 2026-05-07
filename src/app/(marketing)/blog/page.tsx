import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, news, and updates from our team.",
};

export default function BlogPage() {
  return (
    <main className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Our Blog"
          subtitle="Insights and stories from our team."
        />
      </div>
    </main>
  );
}
