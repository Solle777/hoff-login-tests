import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { StorePage } from '../pages/storePage';


test.describe('Invalid Login Tests', () => {
    test('Invalid login shows error message', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('wrongUsername', 'wrongPassword');
        await expect(loginPage.getErrorMessage()).toBeVisible();
    });

    test('Empty credentials show error message', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('', '');
        await expect(loginPage.getErrorMessage()).toBeVisible();
    });
});
