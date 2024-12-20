import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Invalid Login Tests', () => {
    test('Invalid username and password show error message', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('wrongUsername', 'wrongPassword', 'consumer'); // Invalid credentials
        await expect(loginPage.getErrorMessage()).toBeVisible({ timeout: 10000 });
    });

    test('Empty credentials show error message', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('', '', 'consumer'); // No username or password
        await expect(loginPage.getErrorMessage()).toBeVisible({ timeout: 10000 });
    });
});
