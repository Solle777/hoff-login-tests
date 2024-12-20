import { test, expect } from '@playwright/test';

test('Accessibility test', async ({ page }) => {
    await page.goto('https://hoff.is/login');
    const accessibilitySnapshot = await page.accessibility.snapshot();
    expect(accessibilitySnapshot).toBeDefined();
});
