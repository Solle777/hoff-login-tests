import { test, expect, request } from '@playwright/test';

test('Fetch product details via API', async ({ request }) => {
    const response = await request.get('https://hoff.is/store2/api/v1/price/1');
    expect(response.status()).toBe(200);

    const data = await response.json();
    console.log(data);

    expect(data).toHaveProperty('price');
    expect(data).toHaveProperty('name');
});
