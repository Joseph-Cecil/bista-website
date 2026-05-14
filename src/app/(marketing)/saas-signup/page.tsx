import type { Metadata } from "next";
import { SaasSignupForm } from "@/components/saas/saas-signup-form";

export const metadata: Metadata = {
  title: "Sign Up for BISTA SaaS | Select Your Modules",
  description:
    "Enrol in BISTA Software as a Service. Choose the HR and payroll modules your organization needs and submit your details to get started.",
};

export default function SaasSignupPage() {
  return (
    <main>
      <SaasSignupForm />
    </main>
  );
}
