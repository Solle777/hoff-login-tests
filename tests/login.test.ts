import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Tests', () => {
    test('Invalid login shows error message', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('wrongUsername', 'sup3rs3cr3t', 'consumer'); // Invalid username and valid password
        await expect(loginPage.getErrorMessage()).toBeVisible({ timeout: 10000 });
    });

    test('Empty credentials show error message', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('', '', 'consumer'); // Empty username and password
        await expect(loginPage.getErrorMessage()).toBeVisible({ timeout: 10000 });
    });
});
