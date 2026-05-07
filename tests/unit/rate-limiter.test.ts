import { rateLimit } from "@/lib/security/rate-limiter";

describe("rateLimit", () => {
  it("should allow requests within the limit", () => {
    const result = rateLimit("test-ip-1", { maxRequests: 3, windowMs: 60_000 });
    expect(result.allowed).toBe(true);
  });

  it("should block requests exceeding the limit", () => {
    const ip = "test-ip-2";
    rateLimit(ip, { maxRequests: 2, windowMs: 60_000 });
    rateLimit(ip, { maxRequests: 2, windowMs: 60_000 });
    const result = rateLimit(ip, { maxRequests: 2, windowMs: 60_000 });
    expect(result.allowed).toBe(false);
  });
});
