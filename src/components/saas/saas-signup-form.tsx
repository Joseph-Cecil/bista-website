"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const modules = [
  "Claims",
  "Employee Data Management",
  "Employee Relations",
  "Employee Self Service (ESS)",
  "Leave",
  "Payroll",
  "Performance & Appraisal",
  "Promotion",
  "Recruitment & Onboarding",
  "Staff Loans",
  "Training & Development",
  "Transfers",
];

type FormState = "idle" | "submitting" | "success" | "error";

export function SaasSignupForm() {
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [formState, setFormState] = useState<FormState>("idle");

  const toggleModule = (module: string) => {
    setSelectedModules((prev) =>
      prev.includes(module)
        ? prev.filter((m) => m !== module)
        : [...prev, module]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      businessName: data.get("businessName"),
      email: data.get("email"),
      businessPhone: data.get("businessPhone"),
      modules: selectedModules,
      totalUsers: data.get("totalUsers"),
      itInfrastructure: data.get("itInfrastructure"),
      installationType: data.get("installationType"),
      notes: data.get("notes"),
      contactName: data.get("contactName"),
      contactEmail: data.get("contactEmail"),
      contactPosition: data.get("contactPosition"),
      contactPhone: data.get("contactPhone"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(payload.contactName || payload.businessName),
          email: String(payload.contactEmail || payload.email),
          subject: "BISTA SaaS Enquiry",
          message: `Business: ${payload.businessName}\nModules: ${payload.modules.join(", ")}\nUsers: ${payload.totalUsers}\nInstallation: ${payload.installationType}\nIT Infrastructure: ${payload.itInfrastructure}\nContact Person: ${payload.contactName} (${payload.contactPosition})\nContact Phone: ${payload.contactPhone}\nNotes: ${payload.notes}`,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-10 py-24">
        <div className="text-center max-w-md">
          <div
            className="size-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{
              backgroundColor:
                "color-mix(in oklab, var(--color-primary) 10%, transparent)",
            }}
          >
            <Icon
              icon="lucide:check-circle"
              width={32}
              height={32}
              style={{ color: "var(--color-primary)" }}
            />
          </div>
          <h2
            className="font-bold text-2xl mb-4"
            style={{ color: "var(--color-blue)" }}
          >
            Enquiry Submitted
          </h2>
          <p style={{ color: "var(--color-muted-foreground)" }}>
            Thank you for your interest in BISTA SaaS. Our team will be in
            touch within 24 hours.
          </p>
          <Link
            href="/services#saas"
            className="inline-flex items-center gap-2 mt-8 font-medium text-sm"
            style={{ color: "var(--color-primary)" }}
          >
            <Icon icon="lucide:arrow-left" width={14} height={14} />
            Back to SaaS Overview
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-10" style={{ backgroundColor: "var(--color-secondary)" }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1
            className="font-bold mb-4"
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "var(--color-blue)",
            }}
          >
            Sign Up for BISTA SaaS
          </h1>
          <p style={{ color: "var(--color-muted-foreground)" }}>
            Select your required modules and tell us about your organization.
            We will configure a tailored plan for you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl border p-10 space-y-10"
          style={{
            borderColor: "var(--color-border)",
            boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
          }}
        >
          {/* Section 1 — Customer Details */}
          <fieldset>
            <legend
              className="font-bold text-lg mb-6 pb-2 w-full"
              style={{
                color: "var(--color-blue)",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              Customer Details
            </legend>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="businessName"
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--color-foreground)" }}
                >
                  Business name <span style={{ color: "var(--color-red)" }}>*</span>
                </label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  required
                  placeholder="Business name"
                  className="w-full px-4 py-3 rounded-md border text-sm outline-none transition-colors"
                  style={{
                    backgroundColor: "#f7f7f7",
                    borderColor: "var(--color-border)",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--color-foreground)" }}
                >
                  Email <span style={{ color: "var(--color-red)" }}>*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md border text-sm outline-none"
                  style={{
                    backgroundColor: "#f7f7f7",
                    borderColor: "var(--color-border)",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="businessPhone"
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--color-foreground)" }}
                >
                  Business phone number <span style={{ color: "var(--color-red)" }}>*</span>
                </label>
                <input
                  id="businessPhone"
                  name="businessPhone"
                  type="tel"
                  required
                  placeholder="Business phone number"
                  className="w-full px-4 py-3 rounded-md border text-sm outline-none"
                  style={{
                    backgroundColor: "#f7f7f7",
                    borderColor: "var(--color-border)",
                  }}
                />
              </div>
            </div>
          </fieldset>

          {/* Section 2 — Modules */}
          <fieldset>
            <legend
              className="font-bold text-lg mb-6 pb-2 w-full"
              style={{
                color: "var(--color-blue)",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              Module(s) Required
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {modules.map((module) => {
                const checked = selectedModules.includes(module);
                return (
                  <label
                    key={module}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-colors"
                    style={{
                      borderColor: checked
                        ? "var(--color-primary)"
                        : "var(--color-border)",
                      backgroundColor: checked
                        ? "color-mix(in oklab, var(--color-primary) 6%, transparent)"
                        : "#f7f7f7",
                    }}
                  >
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={checked}
                      onChange={() => toggleModule(module)}
                    />
                    <span
                      className="size-4 rounded flex items-center justify-center shrink-0 border transition-colors"
                      style={{
                        borderColor: checked
                          ? "var(--color-primary)"
                          : "var(--color-border)",
                        backgroundColor: checked
                          ? "var(--color-primary)"
                          : "white",
                      }}
                    >
                      {checked && (
                        <Icon icon="lucide:check" width={10} height={10} color="white" />
                      )}
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      {module}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          {/* Section 3 — Business Information */}
          <fieldset>
            <legend
              className="font-bold text-lg mb-6 pb-2 w-full"
              style={{
                color: "var(--color-blue)",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              Business Information
            </legend>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="totalUsers"
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--color-foreground)" }}
                >
                  Total number of users <span style={{ color: "var(--color-red)" }}>*</span>
                </label>
                <input
                  id="totalUsers"
                  name="totalUsers"
                  type="number"
                  required
                  min={1}
                  max={10000}
                  placeholder="Total number of users"
                  className="w-full px-4 py-3 rounded-md border text-sm outline-none"
                  style={{
                    backgroundColor: "#f7f7f7",
                    borderColor: "var(--color-border)",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="itInfrastructure"
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--color-foreground)" }}
                >
                  Current IT infrastructure
                </label>
                <textarea
                  id="itInfrastructure"
                  name="itInfrastructure"
                  rows={3}
                  placeholder="Please specify your current IT infrastructure"
                  className="w-full px-4 py-3 rounded-md border text-sm outline-none resize-none"
                  style={{
                    backgroundColor: "#f7f7f7",
                    borderColor: "var(--color-border)",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="installationType"
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--color-foreground)" }}
                >
                  Preferred installation type <span style={{ color: "var(--color-red)" }}>*</span>
                </label>
                <select
                  id="installationType"
                  name="installationType"
                  required
                  className="w-full px-4 py-3 rounded-md border text-sm outline-none"
                  style={{
                    backgroundColor: "#f7f7f7",
                    borderColor: "var(--color-border)",
                    color: "var(--color-foreground)",
                  }}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Please select your preferred installation type
                  </option>
                  <option value="On-site">On-site</option>
                  <option value="Cloud Setup">Cloud Setup</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="notes"
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--color-foreground)" }}
                >
                  Any notes to add?
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  placeholder="Any note to add?"
                  className="w-full px-4 py-3 rounded-md border text-sm outline-none resize-none"
                  style={{
                    backgroundColor: "#f7f7f7",
                    borderColor: "var(--color-border)",
                  }}
                />
              </div>
            </div>
          </fieldset>

          {/* Section 4 — Contact Person */}
          <fieldset>
            <legend
              className="font-bold text-lg mb-6 pb-2 w-full"
              style={{
                color: "var(--color-blue)",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              Contact Person
            </legend>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="contactName"
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--color-foreground)" }}
                >
                  Contact person&apos;s name <span style={{ color: "var(--color-red)" }}>*</span>
                </label>
                <input
                  id="contactName"
                  name="contactName"
                  type="text"
                  required
                  placeholder="Contact person's name"
                  className="w-full px-4 py-3 rounded-md border text-sm outline-none"
                  style={{
                    backgroundColor: "#f7f7f7",
                    borderColor: "var(--color-border)",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="contactEmail"
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--color-foreground)" }}
                >
                  Email <span style={{ color: "var(--color-red)" }}>*</span>
                </label>
                <input
                  id="contactEmail"
                  name="contactEmail"
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md border text-sm outline-none"
                  style={{
                    backgroundColor: "#f7f7f7",
                    borderColor: "var(--color-border)",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="contactPosition"
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--color-foreground)" }}
                >
                  Position <span style={{ color: "var(--color-red)" }}>*</span>
                </label>
                <input
                  id="contactPosition"
                  name="contactPosition"
                  type="text"
                  required
                  placeholder="Position"
                  className="w-full px-4 py-3 rounded-md border text-sm outline-none"
                  style={{
                    backgroundColor: "#f7f7f7",
                    borderColor: "var(--color-border)",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="contactPhone"
                  className="block text-sm font-medium mb-1"
                  style={{ color: "var(--color-foreground)" }}
                >
                  Contact phone number <span style={{ color: "var(--color-red)" }}>*</span>
                </label>
                <input
                  id="contactPhone"
                  name="contactPhone"
                  type="tel"
                  required
                  placeholder="Contact person's phone number"
                  className="w-full px-4 py-3 rounded-md border text-sm outline-none"
                  style={{
                    backgroundColor: "#f7f7f7",
                    borderColor: "var(--color-border)",
                  }}
                />
              </div>
            </div>
          </fieldset>

          {/* Submit */}
          {formState === "error" && (
            <p className="text-sm" style={{ color: "var(--color-red)" }}>
              Something went wrong. Please try again or call us on +233 244 586
              714.
            </p>
          )}

          <button
            type="submit"
            disabled={formState === "submitting"}
            className="btn-nav-contact w-full py-4 rounded-md font-medium text-white text-base transition-opacity"
            style={{
              opacity: formState === "submitting" ? 0.7 : 1,
              cursor: formState === "submitting" ? "not-allowed" : "pointer",
            }}
          >
            {formState === "submitting" ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}
