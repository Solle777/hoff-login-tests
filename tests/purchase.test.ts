import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { StorePage } from '../pages/storePage';

test('Purchase a product', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const storePage = new StorePage(page);

    await loginPage.goto();
    await loginPage.login('validUsername', 'sup3rs3cr3t');
    await expect(page).toHaveURL(/store2/);

    await storePage.selectProduct('Apple'); // Adjust product name if needed
    await storePage.completePurchase();

    const successMessage = storePage.getSuccessMessage();
    await expect(successMessage).toContain('Thank you for your purchase!');
});
