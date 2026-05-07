import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join our team. Explore current job openings.",
};

export default function CareersPage() {
  return (
    <main className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Join Our Team"
          subtitle="We are always looking for talented, passionate people."
          centered
        />
      </div>
    </main>
  );
}
