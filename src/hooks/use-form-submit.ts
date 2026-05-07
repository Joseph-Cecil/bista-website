import { useState } from "react";
import type { ApiResponse } from "@/types/api";

interface UseFormSubmitOptions {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export function useFormSubmit(endpoint: string, options?: UseFormSubmitOptions) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (data: Record<string, unknown>) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result: ApiResponse = await response.json();

      if (!response.ok || !result.success) {
        const errorMsg = result.error || "An error occurred. Please try again.";
        setError(errorMsg);
        options?.onError?.(errorMsg);
        return;
      }

      setIsSuccess(true);
      options?.onSuccess?.();
    } catch {
      const errorMsg = "Network error. Please check your connection.";
      setError(errorMsg);
      options?.onError?.(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submit, isSubmitting, isSuccess, error };
}
