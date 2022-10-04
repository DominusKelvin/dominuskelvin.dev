import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("has Kelvin O Omereshone in title", async ({ page }) => {
    await expect(page).toHaveTitle(/Kelvin O Omereshone/);
  });

  test("can navigate to blog", async ({ page }) => {
    const blog = page.locator('text=Blog')
    await expect(blog).toHaveAttribute('href', '/blog')
    await blog.click()
    await expect(page).toHaveURL(/.*blog/)
  });

  test("can navigate to TKYT", async ({ page }) => {
    const tkyt = page.locator('text=TKYT')
    await expect(tkyt).toHaveAttribute('href', '/tkyt')
    await tkyt.click()
    await expect(page).toHaveURL(/.*tkyt/)
  });

});
