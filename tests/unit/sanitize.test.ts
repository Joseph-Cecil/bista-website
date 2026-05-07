import { sanitizeInput } from "@/lib/security/sanitize";

describe("sanitizeInput", () => {
  it("should remove HTML tags", () => {
    expect(sanitizeInput("<script>alert('xss')</script>")).not.toContain("<script>");
  });

  it("should remove javascript: protocol", () => {
    expect(sanitizeInput("javascript:alert(1)")).not.toContain("javascript:");
  });

  it("should trim whitespace", () => {
    expect(sanitizeInput("  hello world  ")).toBe("hello world");
  });

  it("should preserve normal text", () => {
    const text = "Hello, my name is Jane.";
    expect(sanitizeInput(text)).toBe(text);
  });
});
