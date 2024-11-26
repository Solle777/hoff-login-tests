import { test, expect } from '@playwright/test';

test('Accessibility check for login page', async ({ page }) => {
    await page.goto('https://hoff.is/login');

    const violations = await page.accessibility.snapshot();
    console.log('Accessibility Violations:', violations);

    expect(violations).toBeTruthy();
});
