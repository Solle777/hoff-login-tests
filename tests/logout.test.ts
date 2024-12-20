import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('User can log out', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Log in with valid credentials
    await loginPage.goto();
    await loginPage.login('validUsername', 'sup3rs3cr3t', 'consumer'); // Replace with valid credentials
    await expect(page).toHaveURL(/dashboard/); // Update with actual dashboard URL

    // Click the logout button
    await page.locator('button:has-text("Log Out")').click(); // Verify selector
    await expect(page).toHaveURL(/login/); // Ensure redirection to login page
});
