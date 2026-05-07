import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="py-24 px-6">
      <div className="max-w-3xl mx-auto prose prose-lg">
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          Replace this content with your actual privacy policy. Consider
          consulting a legal professional to ensure full compliance with
          GDPR, CCPA, and applicable local laws.
        </p>
      </div>
    </main>
  );
}
