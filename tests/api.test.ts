import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { StorePage } from '../pages/storePage';


test('Fetch product details via API', async ({ request }) => {
    const productResponse = await request.get('https://hoff.is/store2/api/v1/price/1');
    const productDetails = await productResponse.json();
    console.log('Product details:', productDetails);

    expect(productDetails).toHaveProperty('price');
    expect(productDetails).toHaveProperty('name');
});
