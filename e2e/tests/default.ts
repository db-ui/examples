import { expect, test } from "@playwright/test";

export const getDefaultScreenshotTest = (example: string) => {
  test(`should match screenshot`, async ({ page }) => {
    await page.goto(`./${example}`, { waitUntil: "networkidle" });
    await expect(page).toHaveScreenshot({
      fullPage: true,
    });
  });
};
