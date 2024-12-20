import { test, expect } from '@playwright/test';
import { StorePage } from '../pages/storePage';

test.describe('Purchase Flow', () => {
    let storePage: StorePage;

    test.beforeEach(async ({ page }) => {
        storePage = new StorePage(page);
        await storePage.gotoLogin();
        await storePage.login('solle', 'sup3rs3cr3t', 'consumer');
        await storePage.gotoStore();
    });

    test('Complete purchase flow on hoff.is', async () => {
        // Add product to cart
        await storePage.addProductToCart('2', '1'); // Amount: 2, Product ID: 1

        // Verify cart item
        await storePage.verifyCartItem('Apple', '2', '24');

        // Complete purchase
        await storePage.completePurchase('Solle', 'Hejsan1');

        // Verify purchase success
        await storePage.verifyPurchaseSuccess();
    });
});
