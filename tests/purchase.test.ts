import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { StorePage } from '../pages/storePage';

test('Purchase a product', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const storePage = new StorePage(page);

    await page.pause(); // Debug mode to inspect the page
    await loginPage.goto();
    await loginPage.login('validUsername', 'sup3rs3cr3t');
    await storePage.selectProduct('Apple');
    await storePage.completePurchase();
    await expect(storePage.getSuccessMessage()).toContain('Thank you for your purchase!');
});
