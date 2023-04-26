import { test } from "@playwright/test";
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from "./default.ts";

test.describe("Angular Example", () => {
  getDefaultScreenshotTest("angular-example");
});
