import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-6 p-8 text-center"
      style={{ minHeight: "100vh", backgroundColor: "var(--color-background)" }}
    >
      <div
        className="font-bold"
        style={{
          fontFamily: "var(--font-headings)",
          fontSize: "8rem",
          lineHeight: 1,
          color: "var(--color-primary)",
        }}
      >
        404
      </div>
      <h2
        className="font-bold text-2xl"
        style={{ color: "var(--color-blue)" }}
      >
        Page Not Found
      </h2>
      <p
        className="max-w-md"
        style={{ color: "var(--color-muted-foreground)" }}
      >
        The page you are looking for does not exist, has been moved, or is
        temporarily unavailable. Let us get you back on track.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="btn-blue text-white px-6 py-3 rounded-md font-medium"
        >
          Go Home
        </Link>
        <Link
          href="/contact"
          className="btn-services-all border px-6 py-3 rounded-md font-medium"
          style={{ borderColor: "var(--color-border)", color: "var(--color-foreground)" }}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
