import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';

test('Checkout from cart', async ({ page }) => {
    const cartPage = new CartPage(page);

    // Navigate to the cart page
    await cartPage.goto();

    // Debug: Verify checkout button exists
    const checkoutButton = page.locator('[data-testid="checkout-button"]');
    await checkoutButton.waitFor({ timeout: 10000 });
    await expect(checkoutButton).toBeVisible();

    // Perform checkout
    await cartPage.checkout();

    // Verify navigation to checkout page
    await expect(page).toHaveURL(/checkout/); // Adjust with actual URL
});
