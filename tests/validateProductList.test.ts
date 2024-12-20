import { test, expect } from '@playwright/test';

test('Validate product list API', async ({ request }) => {
    const response = await request.get('https://hoff.is/store2/api/v1/product/list');
    expect(response.ok()).toBeTruthy();

    const data = await response.json();
    expect(data.products).toBeTruthy(); // Ensure 'products' key exists
    expect(Array.isArray(data.products)).toBeTruthy(); // Ensure 'products' is an array
    expect(data.products.length).toBeGreaterThan(0); // Ensure the array has products
});
