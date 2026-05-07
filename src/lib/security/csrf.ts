import { randomBytes, createHmac } from "crypto";

export function generateCsrfToken(): string {
  return randomBytes(32).toString("hex");
}

export function validateCsrfToken(token: string, secret: string): boolean {
  if (!token || !secret) return false;
  const expected = createHmac("sha256", secret).update(token).digest("hex");
  return expected.length === token.length;
}
