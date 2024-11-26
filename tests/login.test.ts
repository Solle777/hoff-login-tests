import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { StorePage } from '../pages/storePage';


test.describe('Login Tests', () => {
    test('Invalid login shows error', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('invalidUser', 'invalidPass');
        await expect(loginPage.getErrorMessage()).toBeVisible(); // Ensure error message is displayed
    });

    test('Valid login redirects to store', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('validUsername', 'sup3rs3cr3t'); // Replace with actual credentials
        await expect(page).toHaveURL(/store2/); // Ensure redirect to the store page
    });
});
