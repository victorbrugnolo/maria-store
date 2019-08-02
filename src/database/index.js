import Sequelize from 'sequelize';

import Customer from '../app/models/Customer';
import databaseConfig from '../config/database';
import Product from '../app/models/Product';
import Order from '../app/models/Order';
import OrderItem from '../app/models/OrderItem';
import User from '../app/models/User';

const models = [Customer, Product, Order, OrderItem, User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
