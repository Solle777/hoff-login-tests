import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('Invalid Login Tests', () => {
    test('Invalid login shows error message', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('wrongUsername', 'wrongPassword');

        const errorMessage = loginPage.getErrorMessage();
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toContainText('Invalid username or password'); // Adjust text if needed
    });

    test('Empty credentials show error message', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('', '');

        const errorMessage = loginPage.getErrorMessage();
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toContainText('Fields cannot be empty'); // Adjust text if needed
    });
});
