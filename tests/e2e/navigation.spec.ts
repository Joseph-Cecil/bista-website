import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("should load the homepage", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/your company/i);
  });

  test("should show 404 for unknown routes", async ({ page }) => {
    await page.goto("/this-page-does-not-exist-at-all");
    await expect(page.getByRole("heading", { name: "404" })).toBeVisible();
  });

  test("should navigate to about page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL("/about");
  });
});
