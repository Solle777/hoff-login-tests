import { Page, Locator, expect } from '@playwright/test';

export class StorePage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly roleDropdown: Locator;
    readonly loginButton: Locator;
    readonly logoutButton: Locator;
    readonly selectProductDropdown: Locator;
    readonly amountField: Locator;
    readonly addToCartButton: Locator;
    readonly cartTable: Locator;
    readonly checkoutButton: Locator;
    readonly nameField: Locator;
    readonly addressField: Locator;
    readonly confirmPurchaseButton: Locator;
    readonly successMessage: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        // Login selectors
        this.usernameField = page.getByLabel('Username');
        this.passwordField = page.getByLabel('Password');
        this.roleDropdown = page.getByLabel('Select Role');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.logoutButton = page.locator('button:has-text("Log Out")');

        // Store selectors
        this.selectProductDropdown = page.getByTestId('select-product');
        this.amountField = page.getByLabel('Amount');
        this.addToCartButton = page.getByTestId('add-to-cart-button');
        this.cartTable = page.locator('table.cart');
        this.checkoutButton = page.locator('[data-testid="checkout-button"]');

        // Checkout selectors
        this.nameField = page.getByLabel('Name:');
        this.addressField = page.getByLabel('Address:');
        this.confirmPurchaseButton = page.getByRole('button', { name: 'Confirm Purchase' });
        this.successMessage = page.getByText('Thank you for your purchase!');
        this.errorMessage = page.locator('[data-testid="error-message"]'); // Replace with the actual selector
    }

    // Navigation
    async gotoLogin() {
        await this.page.goto('https://hoff.is/login');
    }

    async gotoStore() {
        await this.page.goto('https://hoff.is/store2/?username=solle&role=consumer');
    }

    // Login
    async login(username: string, password: string, role: string) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.roleDropdown.selectOption(role);
        await this.loginButton.click();
    }

    async logout() {
        await this.logoutButton.click();
    }

    // Store functionality
    async addProductToCart(amount: string, productId: string) {
        await this.selectProductDropdown.selectOption(productId);
        await this.amountField.fill(amount);
        await this.addToCartButton.click();
    }

    async verifyCartItem(productName: string, quantity: string, totalPrice: string) {
        const cartRow = this.cartTable.locator(`tr:has-text("${productName}")`);
        await expect(cartRow.locator('td:nth-child(2)')).toHaveText(quantity);
        await expect(cartRow.locator('td:nth-child(3)')).toHaveText(totalPrice);
    }

    async completePurchase(name: string, address: string) {
        await this.nameField.fill(name);
        await this.addressField.fill(address);
        await this.confirmPurchaseButton.click();
    }

    async verifyPurchaseSuccess() {
        await expect(this.successMessage).toBeVisible();
    }

    getErrorMessage() {
        return this.errorMessage;
    }
}
