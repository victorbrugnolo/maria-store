import request from 'supertest';
import app from '../../src/app';
import truncate from '../util/truncate';

describe('Order', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to register', async () => {
    const product = await request(app)
      .post('/products')
      .send({
        sku: 1234567,
        name: 'Blusa Outletdri Inverno Jacquard',
        price: 109.9,
      });

    const buyer = await request(app)
      .post('/customers')
      .send({
        name: 'Maria',
        email: 'maria@mariastore.com',
        cpf: '12345678910',
      });

    const response = await response(app)
      .post('orders')
      .send({
        status: 'CONCLUDED',
        total: 189.8,
        buyer: buyer.body.id,
        items: [
          {
            amount: 1,
            price_unit: 109.9,
            total: 109.9,
            product: product.body.id,
          },
        ],
      });

    expect(response.body).toHaveProperty('id');
  });
});
