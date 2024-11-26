import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) { }

    async navigateToLogin() {
        await this.page.goto('https://hoff.is/login');
    }

    async login(username: string, password: string) {
        await this.page.fill('#username', username);
        await this.page.fill('#password', password);
        await this.page.click('button[type="submit"]');
    }

    async isLoggedIn() {
        return this.page.isVisible('text=Welcome');
    }
}