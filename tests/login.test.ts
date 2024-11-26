import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('Login Tests', () => {
    test('Invalid login shows error', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('invalidUser', 'invalidPass');
        await expect(loginPage.getErrorMessage()).toBeVisible();
    });

    test('Valid login redirects to store', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('validUsername', 'sup3rs3cr3t');
        await expect(page).toHaveURL(/store2/);
    });
});
