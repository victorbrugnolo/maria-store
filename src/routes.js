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

routes.post('/v1/users', validateUserStore, UserController.store);
routes.get('/v1/products', ProductController.index);
routes.post('/v1/customers', validateCustomerStore, CustomerController.store);
routes.get('/v1/customers', CustomerController.index);
routes.post('/v1/sessions', SessionController.store);
routes.post('/v1/orders', validateOrderStore, OrderController.store);
routes.get('/v1/orders', OrderController.index);
routes.put('/v1/orders/:id', OrderController.cancelOrder);
routes.put('/v1/sessions', SessionController.store);

routes.use(authMiddleware);
routes.post('/v1/products', validateProductStore, ProductController.store);

export default routes;
