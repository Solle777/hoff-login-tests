import { Page } from '@playwright/test';

export class StorePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://hoff.is/store'); // Replace with the actual URL for the store page
    }

    async selectProduct(productName: string) {
        await this.page.locator('select[name="message"]').selectOption(productName); // Select product from dropdown
    }

    async setAmount(amount: string) {
        await this.page.locator('input[name="amount"]').fill(amount); // Enter the product amount
    }

    async addToCart() {
        await this.page.locator('button:has-text("Add to Cart")').click(); // Click "Add to Cart" button
    }
}
