import { test, expect } from '@playwright/test';

test('Complete purchase flow on hoff.is', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://hoff.is/login');

    // Login Process
    await page.getByLabel('Username').fill('solle'); // Fill in the username
    await page.getByLabel('Password').fill('sup3rs3cr3t'); // Fill in the password
    await page.getByLabel('Select Role').selectOption('consumer'); // Select the role "consumer"
    await page.getByRole('button', { name: 'Login' }).click(); // Click the Login button

    // Verify login success (optional)
    await expect(page).toHaveURL(/dashboard/); // Replace with the actual post-login URL

    // Product Selection and Add to Cart
    await page.getByTestId('select-product').selectOption('1'); // Select the product with ID 1
    await page.getByLabel('Amount').fill('2'); // Set the amount to 2
    await page.getByTestId('add-to-cart-button').click(); // Click "Add to Cart" button

    // Verify product added to cart (optional)
    const cartRow = page.locator('table.cart tr:has-text("Apple")');
    await expect(cartRow.locator('td:nth-child(2)')).toHaveText('2'); // Quantity
    await expect(cartRow.locator('td:nth-child(3)')).toHaveText('24'); // Total price

    // Proceed to Checkout
    await page.getByRole('button', { name: 'Buy' }).click(); // Click the "Buy" button

    // Fill in Checkout Details
    await page.getByLabel('Name:').fill('Solle'); // Fill in the name
    await page.getByLabel('Address:').fill('Hejsan1'); // Fill in the address
    await page.getByRole('button', { name: 'Confirm Purchase' }).click(); // Confirm the purchase

    // Close the Confirmation Message
    await page.getByText('Close').click(); // Click the "Close" button

    // Verify purchase success (optional)
    const successMessage = page.getByText('Thank you for your purchase!');
    await expect(successMessage).toBeVisible();
});
