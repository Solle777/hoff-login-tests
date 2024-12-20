import { test, expect } from '@playwright/test';
import { StorePage } from '../pages/storePage';

const credentials = {
    consumer: { username: 'Soheil1', password: 'sup3rs3cr3t', role: 'consumer' },
    business: { username: 'businessUsername', password: 'businessPassword', role: 'business' },
};

function getExpectedURL(username: string, role: string): string {
    return `https://hoff.is/store2/?username=${username}&role=${role}`;
}

test.describe('Login Tests', () => {
    let storePage: StorePage;

    test.beforeEach(async ({ page }) => {
        storePage = new StorePage(page);
        await storePage.gotoLogin(); // Ensure every test starts on the login page
    });

    test('Login as consumer', async () => {
        const { username, password, role } = credentials.consumer;
        await storePage.login(username, password, role);
        const expectedURL = getExpectedURL(username, role);
        await expect(storePage.page).toHaveURL(expectedURL); // Use storePage.page instead of page
    });

    test('Login as business', async () => {
        const { username, password, role } = credentials.business;
        await storePage.login(username, password, role);
        const expectedURL = getExpectedURL(username, role);
        await expect(storePage.page).toHaveURL(expectedURL); // Use storePage.page instead of page
    });

    test('Invalid login shows error message', async () => {
        await storePage.login('wrongUsername', 'wrongPassword', 'consumer');
        await expect(storePage.getErrorMessage()).toBeVisible();
    });
});
