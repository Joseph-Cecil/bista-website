import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms and conditions for using our services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="py-24 px-6">
      <div className="max-w-3xl mx-auto prose prose-lg">
        <h1>Terms of Service</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          Replace this content with your actual terms of service.
          Consider consulting a legal professional.
        </p>
      </div>
    </main>
  );
}
