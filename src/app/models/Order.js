import Sequelize, { Model } from 'sequelize';
import OrderItem from './OrderItem';

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        customer_id: Sequelize.INTEGER,
        total: Sequelize.DOUBLE,
        status: Sequelize.ENUM('CONCLUDED', 'CANCELED'),
        cancel_date: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Customer, { foreignKey: 'customer_id', as: 'buyer' });
    this.hasMany(OrderItem, { as: 'items' });
  }
}

export default Order;
