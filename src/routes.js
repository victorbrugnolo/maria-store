import { Router } from 'express';

import CustomerController from './app/controllers/CustomerController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';
import OrderController from './app/controllers/OrderController';

// import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/customers', CustomerController.store);
routes.post('/sessions', SessionController.store);

// routes.use(authMiddleware);

routes.post('/products', ProductController.store);
routes.get('/products', ProductController.index);
routes.post('/orders', OrderController.store);
routes.get('/orders', OrderController.index);

export default routes;
