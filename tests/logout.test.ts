import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { StorePage } from '../pages/storePage';

test('User can log out', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const storePage = new StorePage(page);

    await loginPage.goto();
    await loginPage.login('validUsername', 'sup3rs3cr3t');
    await expect(page).toHaveURL(/store2/);

    await storePage.logout();
    await expect(page).toHaveURL(/login/);
});
