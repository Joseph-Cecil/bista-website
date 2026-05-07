"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema } from "@/lib/validation/newsletter.schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { z } from "zod";

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export function NewsletterForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <p className="text-sm text-green-600 font-medium">Thank you for subscribing!</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
      <Input type="email" placeholder="your@email.com" {...register("email")} />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "..." : "Subscribe"}
      </Button>
      {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
    </form>
  );
}
