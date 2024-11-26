import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { StorePage } from '../pages/storePage';

test('Accessibility check for login page', async ({ page }) => {
    await page.goto('https://hoff.is/login');
    const accessibilitySnapshot = await page.accessibility.snapshot();

    console.log('Accessibility Snapshot:', accessibilitySnapshot);

    // Validate the main role and page name
    expect(accessibilitySnapshot).toMatchObject({
        role: 'WebArea',
        name: 'Login Page', // Adjusted to match the actual page
    });
});
