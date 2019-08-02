import request from 'supertest';
import app from '../../src/app';

describe('Customer', () => {
  it('should be able to register', async () => {
    const response = await request(app)
      .post('/customers')
      .send({
        name: 'Victor',
        email: 'brugnolo@hotmail.com',
        cpf: '12345678910',
      });

    expect(response.body).toHaveProperty('id');
  });
});
