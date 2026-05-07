import { CheckCircle } from "lucide-react";

interface FormSuccessProps {
  message: string;
}

export function FormSuccess({ message }: FormSuccessProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      <CheckCircle className="h-16 w-16 text-green-500" />
      <h3 className="text-2xl font-semibold">Message Sent!</h3>
      <p className="text-muted-foreground max-w-sm">{message}</p>
    </div>
  );
}
