import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly roleDropdown: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('[name="username"]'); // Confirm selector
        this.passwordInput = page.locator('[name="password"]'); // Confirm selector
        this.roleDropdown = page.locator('[name="role"]'); // Confirm selector
        this.loginButton = page.locator('button:has-text("Login")'); // Confirm selector
        this.errorMessage = page.locator('.error-message'); // Confirm selector
    }

    async goto() {
        await this.page.goto('https://hoff.is/login'); // Ensure URL is correct
    }

    async login(username: string, password: string, role: string) {
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.usernameInput).toBeVisible({ timeout: 15000 });
        await this.usernameInput.fill(username);

        await expect(this.passwordInput).toBeVisible({ timeout: 15000 });
        await this.passwordInput.fill(password);

        await expect(this.roleDropdown).toBeVisible({ timeout: 15000 });
        await this.roleDropdown.selectOption(role);

        await expect(this.loginButton).toBeVisible({ timeout: 15000 });
        await this.loginButton.click();

        await this.page.waitForLoadState('networkidle');
    }

    getErrorMessage() {
        return this.errorMessage;
    }
}
