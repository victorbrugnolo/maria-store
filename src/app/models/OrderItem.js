import Sequelize, { Model } from 'sequelize';

class OrderItem extends Model {
  static init(sequelize) {
    super.init(
      {
        order_id: Sequelize.INTEGER,
        product_id: Sequelize.INTEGER,
        amount: Sequelize.INTEGER,
        price_unit: Sequelize.DOUBLE,
        total: Sequelize.DOUBLE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Order, { foreignKey: 'order_id' });
    this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' });
  }
}

export default OrderItem;
