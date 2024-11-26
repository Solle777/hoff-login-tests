import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('User can log in successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLogin();
    await loginPage.login('testuser', 'sup3rs3cr3t');

    expect(await loginPage.isLoggedIn()).toBeTruthy();
});
