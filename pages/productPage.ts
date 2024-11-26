import { Page } from '@playwright/test';

export class ProductPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://hoff.is/products'); // Replace with actual URL for products page
    }

    async addProductToCart(productId: number) {
        const addToCartButton = this.page.locator(`[data-testid="add-to-cart-button-${productId}"]`);
        await addToCartButton.click();
    }
}
