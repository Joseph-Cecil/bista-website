import { contactFormSchema } from "@/lib/validation/contact.schema";

describe("contactFormSchema", () => {
  const validData = {
    name: "Jane Smith",
    email: "jane@example.com",
    subject: "Test Subject",
    message: "This is a test message that is long enough.",
    recaptchaToken: "valid-token",
  };

  it("should pass with valid data", () => {
    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("should fail with invalid email", () => {
    const result = contactFormSchema.safeParse({ ...validData, email: "not-an-email" });
    expect(result.success).toBe(false);
  });

  it("should fail with short name", () => {
    const result = contactFormSchema.safeParse({ ...validData, name: "J" });
    expect(result.success).toBe(false);
  });
});
