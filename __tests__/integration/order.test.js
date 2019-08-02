import request from 'supertest';
import app from '../../src/app';
import truncate from '../util/truncate';

describe('Order', () => {
  beforeEach(async () => {
    await truncate();
  });

  async function obterToken() {
    const user = await request(app)
      .post('/users')
      .send({
        name: 'admin',
        email: 'admin@mariastore.com',
        password: 'admin',
      });

    const authenticate = await request(app)
      .post('/sessions')
      .send({
        email: user.body.email,
        password: 'admin',
      });

    return authenticate.body.token;
  }

  it('should be able to register', async () => {
    const product = await request(app)
      .post('/products')
      .set('Authorization', `Bearer ${await obterToken()}`)
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
        cpf: '64023783056',
      });

    const response = await request(app)
      .post('/orders')
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
