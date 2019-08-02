import request from 'supertest';
import { cpf } from 'cpf-cnpj-validator';
import app from '../../src/app';
import truncate from '../util/truncate';

describe('Customer', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to register', async () => {
    const response = await request(app)
      .post('/customers')
      .send({
        name: 'Maria',
        email: 'maria@mariastore.com',
        cpf: cpf.generate(),
      });

    expect(response.body).toHaveProperty('id');
  });

  it('shoul not be able to register with duplicated email', async () => {
    await request(app)
      .post('/customers')
      .send({
        name: 'Maria',
        email: 'maria@mariastore.com',
        cpf: cpf.generate(),
      });

    const response = await request(app)
      .post('/customers')
      .send({
        name: 'Maria',
        email: 'maria@mariastore.com',
        cpf: cpf.generate(),
      });

    expect(response.status).toBe(400);
  });

  it('shoul not be able to register with duplicated cpf', async () => {
    await request(app)
      .post('/customers')
      .send({
        name: 'Maria',
        email: 'maria@mariastore.com',
        cpf: '19129400007',
      });

    const response = await request(app)
      .post('/customers')
      .send({
        name: 'João',
        email: 'joao@mariastore.com',
        cpf: '19129400007',
      });

    expect(response.status).toBe(400);
  });

  it('shoul not be able to register with invalid cpf', async () => {
    const response = await request(app)
      .post('/customers')
      .send({
        name: 'Maria',
        email: 'maria@mariastore.com',
        cpf: '19129400008',
      });

    expect(response.status).toBe(400);
  });
});
