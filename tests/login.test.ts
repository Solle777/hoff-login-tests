import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('Invalid login shows error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    // Step 1: Attempt login with invalid credentials
    await loginPage.login('invalid_user', 'wrong_password'); // Replace with invalid test credentials.

    // Step 2: Verify error message
    const errorMessage = page.locator('[data-testid="login-error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Invalid username or password');
});
