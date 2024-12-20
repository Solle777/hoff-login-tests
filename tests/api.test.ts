import { test, expect } from '@playwright/test';

test('API test for product details', async ({ request }) => {
    const response = await request.get('https://hoff.is/store2/api/v1/price/1');
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data?.id).toBe(1); // Updated to handle undefined cases
});
