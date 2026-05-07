import { test, expect } from "@playwright/test";

test.describe("Contact Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("should display the contact form", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /get in touch/i })).toBeVisible();
    await expect(page.getByLabelText(/full name/i)).toBeVisible();
    await expect(page.getByLabelText(/email address/i)).toBeVisible();
    await expect(page.getByLabelText(/message/i)).toBeVisible();
  });

  test("should show validation errors on empty submit", async ({ page }) => {
    await page.getByRole("button", { name: /send message/i }).click();
    await expect(page.getByText(/at least 2 characters/i)).toBeVisible();
  });

  test("should navigate to contact page from navbar", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /get in touch/i }).first().click();
    await expect(page).toHaveURL("/contact");
  });
});
