import { Page } from '@playwright/test';

export class StorePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async selectProduct(productName: string) {
        await this.page.locator(`[data-testid="product-${productName}"]`).click();
    }

    async completePurchase() {
        await this.page.locator('[data-testid="purchase-button"]').click();
    }

    async getSuccessMessage() {
        return this.page.locator('[data-testid="success-message"]');
    }
}
