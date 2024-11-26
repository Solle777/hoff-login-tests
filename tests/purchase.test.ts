import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { ProductPage } from '../pages/productPage';
import { CartPage } from '../pages/cartPage';

test('Purchase a product', async ({ page }) => {
    // Step 1: Log in to the application
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('valid_user', 'valid_password'); // Replace with valid credentials.

    // Step 2: Navigate to the product page and add a product to the cart
    const productPage = new ProductPage(page);
    await productPage.goto();
    await productPage.addProductToCart(1); // Add product with ID 1.

    // Step 3: Go to the cart and proceed to checkout
    const cartPage = new CartPage(page);
    await cartPage.goto();
    await cartPage.checkout();

    // Step 4: Verify purchase confirmation
    const confirmationMessage = page.locator('[data-testid="purchase-confirmation"]');
    await expect(confirmationMessage).toBeVisible();
    await expect(confirmationMessage).toContainText('Thank you for your purchase!');
});
