import { main } from '../handler';

describe('getProductsById', () => {
    it('get product by ID', async () => {
        const event = {
            pathParameters: {
                id: '7567ec4b-b10c-48c5-9345-fc73c48a80aa'
            }
        };

        const response = await main(event, undefined);
        const product = response && JSON.parse(response.body);

        expect(product.id).toBe(event.pathParameters.id);
    });

    it('product not found by ID', async () => {
        const event = {
            pathParameters: {
                id: 'wrong_product_id'
            }
        };

        const response = await main(event, undefined);
        const product = response && JSON.parse(response.body);

        expect(product).toContain('Product not found');
    });
})