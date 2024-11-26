import { Page } from '@playwright/test';

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://hoff.is/login'); // Replace with actual login URL
    }

    async login(username: string, password: string) {
        const usernameField = this.page.locator('[data-testid="username"]');
        const passwordField = this.page.locator('[data-testid="password"]');
        const loginButton = this.page.locator('[data-testid="login-button"]');

        await usernameField.fill(username);
        await passwordField.fill(password);
        await loginButton.click();
    }
}
