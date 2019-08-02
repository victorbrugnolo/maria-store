import request from 'supertest';
import app from '../../src/app';
import truncate from '../util/truncate';

describe('Product', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to register', async () => {
    const response = await request(app)
      .post('/products')
      .send({
        sku: 1234567,
        name: 'Blusa Outletdri Inverno Jacquard',
        price: 109.9,
      });

    expect(response.body).toHaveProperty('id');
  });

  it('shoul not be able to register with duplicated sku', async () => {
    await request(app)
      .post('/products')
      .send({
        sku: 1234567,
        name: 'Blusa Outletdri Inverno Jacquard',
        price: 109.9,
      });

    const response = await request(app)
      .post('/products')
      .send({
        sku: 1234567,
        name: 'Blusa Outletdri Inverno Jacquard',
        price: 109.9,
      });

    expect(response.status).toBe(400);
  });

  it('shoul not be able to register with price less than 1', async () => {
    const response = await request(app)
      .post('/products')
      .send({
        sku: 1234567,
        name: 'Blusa Outletdri Inverno Jacquard',
        price: 0,
      });

    expect(response.status).toBe(400);
  });
});
