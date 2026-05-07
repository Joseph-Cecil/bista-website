import { Skeleton } from "@/components/ui/skeleton";

export default function GlobalLoading() {
  return (
    <div className="min-h-screen flex flex-col gap-8 p-8">
      <Skeleton className="h-16 w-full" />
      <Skeleton className="h-96 w-full" />
      <div className="grid grid-cols-3 gap-4">
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-48 w-full" />
      </div>
    </div>
  );
}
