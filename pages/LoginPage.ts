import { Page } from '@playwright/test';

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://hoff.is/login'); // Correct URL for login
    }

    async login(username: string, password: string) {
        const usernameField = this.page.locator('input[name="username"]'); // Adjusted selector
        const passwordField = this.page.locator('input[name="password"]'); // Adjusted selector
        const loginButton = this.page.locator('button:has-text("Login")');

        await usernameField.fill(username);
        await passwordField.fill(password);
        await loginButton.click();
    }

    getErrorMessage() {
        return this.page.locator('.error-message'); // Adjusted selector
    }
}
