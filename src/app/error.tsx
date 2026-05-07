"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p className="text-muted-foreground text-center max-w-md">
        We apologize for the inconvenience. Our team has been notified.
      </p>
      <Button onClick={reset}>Try Again</Button>
    </div>
  );
}
