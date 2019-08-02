import { Router } from 'express';

import CustomerController from './app/controllers/CustomerController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';
import OrderController from './app/controllers/OrderController';
import UserController from './app/controllers/UserController';

import validateProductStore from './app/validators/ProductStore';
import validateCustomerStore from './app/validators/CustomerStore';
import validateOrderStore from './app/validators/OrderStore';
import validateUserStore from './app/validators/UserStore';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', validateUserStore, UserController.store);
routes.get('/products', ProductController.index);
routes.post('/customers', validateCustomerStore, CustomerController.store);
routes.post('/sessions', SessionController.store);
routes.post('/orders', validateOrderStore, OrderController.store);
routes.get('/orders', OrderController.index);
routes.put('/orders/:id', OrderController.cancelOrder);
routes.put('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.post('/products', validateProductStore, ProductController.store);

export default routes;
