"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { contactFormSchema, type ContactFormData } from "@/lib/validation/contact.schema";
import { HONEYPOT_FIELD_NAME } from "@/lib/security/honeypot";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormSuccess } from "@/components/forms/form-success";
import { Icon } from "@iconify/react";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = useCallback(
    async (data: ContactFormData) => {
      setServerError(null);

      try {
        // Get real reCAPTCHA token
        let recaptchaToken = "dev-bypass-token";
        if (executeRecaptcha) {
          recaptchaToken = await executeRecaptcha("contact_form");
        }

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, recaptchaToken }),
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
          setServerError(
            result.error || "Something went wrong. Please try again."
          );
          return;
        }

        setIsSubmitted(true);
        reset();
      } catch {
        setServerError(
          "Network error. Please check your connection and try again."
        );
      }
    },
    [executeRecaptcha, reset]
  );

  if (isSubmitted) {
    return (
      <FormSuccess message="Your message has been sent. We will be in touch within 1-2 business days." />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Honeypot — hidden from real users */}
      <div
        style={{ position: "absolute", left: "-9999px", opacity: 0 }}
        aria-hidden="true"
      >
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register(HONEYPOT_FIELD_NAME as keyof ContactFormData)}
        />
      </div>

      {/* Name & Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium"
            style={{ color: "var(--color-foreground)" }}
          >
            Full Name <span style={{ color: "var(--color-red)" }}>*</span>
          </label>
          <Input
            id="name"
            placeholder="Jane Smith"
            {...register("name")}
            aria-invalid={!!errors.name}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="text-xs" style={{ color: "var(--color-red)" }}>
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium"
            style={{ color: "var(--color-foreground)" }}
          >
            Email Address <span style={{ color: "var(--color-red)" }}>*</span>
          </label>
          <Input
            id="email"
            type="email"
            placeholder="jane@company.com"
            {...register("email")}
            aria-invalid={!!errors.email}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-xs" style={{ color: "var(--color-red)" }}>
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <label
          htmlFor="phone"
          className="text-sm font-medium"
          style={{ color: "var(--color-foreground)" }}
        >
          Phone Number{" "}
          <span className="text-xs" style={{ color: "var(--color-muted-foreground)" }}>
            (optional)
          </span>
        </label>
        <Input
          id="phone"
          type="tel"
          placeholder="+233 (0) 30 200 0000"
          {...register("phone")}
          aria-invalid={!!errors.phone}
          disabled={isSubmitting}
        />
        {errors.phone && (
          <p className="text-xs" style={{ color: "var(--color-red)" }}>
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="text-sm font-medium"
          style={{ color: "var(--color-foreground)" }}
        >
          Subject <span style={{ color: "var(--color-red)" }}>*</span>
        </label>
        <Input
          id="subject"
          placeholder="How can we help you?"
          {...register("subject")}
          aria-invalid={!!errors.subject}
          disabled={isSubmitting}
        />
        {errors.subject && (
          <p className="text-xs" style={{ color: "var(--color-red)" }}>
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium"
          style={{ color: "var(--color-foreground)" }}
        >
          Message <span style={{ color: "var(--color-red)" }}>*</span>
        </label>
        <Textarea
          id="message"
          placeholder="Tell us about your project or inquiry..."
          rows={6}
          {...register("message")}
          aria-invalid={!!errors.message}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="text-xs" style={{ color: "var(--color-red)" }}>
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Server Error */}
      {serverError && (
        <div
          className="p-4 rounded-md flex items-start gap-3"
          style={{
            backgroundColor:
              "color-mix(in oklab, var(--color-red) 8%, transparent)",
            border:
              "1px solid color-mix(in oklab, var(--color-red) 20%, transparent)",
          }}
        >
          <Icon
            icon="lucide:alert-circle"
            width={16}
            height={16}
            style={{ color: "var(--color-red)", flexShrink: 0, marginTop: 2 }}
          />
          <p className="text-sm" style={{ color: "var(--color-red)" }}>
            {serverError}
          </p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-medium text-white transition-opacity"
        style={{
          backgroundColor: "var(--color-primary)",
          opacity: isSubmitting ? 0.7 : 1,
          cursor: isSubmitting ? "not-allowed" : "pointer",
          fontSize: "var(--text-base)",
        }}
      >
        {isSubmitting ? (
          <>
            <Icon
              icon="lucide:loader-2"
              width={18}
              height={18}
              style={{ animation: "spin 1s linear infinite" }}
            />
            Sending your message...
          </>
        ) : (
          <>
            Send Message
            <Icon icon="lucide:send" width={16} height={16} />
          </>
        )}
      </button>

      <p
        className="text-xs text-center"
        style={{ color: "var(--color-muted-foreground)" }}
      >
        By submitting this form, you agree to our{" "}
        <a
          href="/privacy-policy"
          className="underline"
          style={{ color: "var(--color-primary)" }}
        >
          Privacy Policy
        </a>
        . This form is protected by reCAPTCHA.
      </p>
    </form>
  );
}
