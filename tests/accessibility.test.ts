import { test, expect } from '@playwright/test';

test('Accessibility check for login page', async ({ page }) => {
    await page.goto('https://hoff.is/login');
    const accessibilitySnapshot = await page.accessibility.snapshot();

    console.log('Accessibility Snapshot:', accessibilitySnapshot);

    // Validate the main role and page name
    expect(accessibilitySnapshot).toMatchObject({
        role: 'WebArea',
        name: 'The Hoff Store',
    });
});
