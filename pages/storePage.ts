import { Page } from '@playwright/test';

export class StorePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async selectProduct(productName: string) {
        // Adjust selector to match product elements
        await this.page.click(`[data-testid="product-${productName}"]`);
    }

    async completePurchase() {
        await this.page.click('[data-testid="purchase-button"]');
    }

    async getSuccessMessage() {
        return this.page.locator('[data-testid="success-message"]');
    }

    async logout() {
        await this.page.click('[data-testid="logout-button"]');
    }
}
