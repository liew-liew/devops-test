const { test, expect } = require('@playwright/test');

test("homepage loads and title is visible", async ({ page }) => {
  await page.goto("https://liew-liew.github.io/devops-test/");
  
  await expect(page.locator("h1")).toHaveText("Hello DevOps World 🌍");
});
