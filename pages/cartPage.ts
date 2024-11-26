import { Page } from '@playwright/test';

export class CartPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://hoff.is/cart'); // Replace with actual URL for the cart page
    }

    async checkout() {
        const checkoutButton = this.page.locator('[data-testid="checkout-button"]');
        await checkoutButton.click();
    }
}
