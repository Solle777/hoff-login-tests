import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { StorePage } from '../pages/storePage';


test('User can log out', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('validUsername', 'sup3rs3cr3t'); // Replace with actual credentials
    await loginPage.logout();
    await expect(page).toHaveURL(/login/); // Ensure redirected to login
});
