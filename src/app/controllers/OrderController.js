import Order from '../models/Order';
import OrderItem from '../models/OrderItem';
import Customer from '../models/Customer';
import Product from '../models/Product';

const modelOrderReturn = {
  include: [
    {
      model: OrderItem,
      as: 'items',
      include: {
        model: Product,
        as: 'product',
        attributes: ['id', 'sku', 'name'],
      },
      attributes: ['amount', 'price_unit', 'total'],
    },
    { model: Customer, as: 'buyer' },
  ],
  attributes: ['id', 'created_at', 'status', 'total'],
};

class OrderController {
  async store(req, res) {
    const { status, total: totalOrder, customer_id } = req.body;

    const order = await Order.create({
      status,
      total: totalOrder,
      customer_id,
    });

    const { id } = order;

    await Promise.all(
      req.body.items.map(async item => {
        const order_id = id;
        const { amount, price_unit, total: totalItem, product_id } = item;

        await OrderItem.create({
          amount,
          price_unit,
          total: totalItem,
          product_id,
          order_id,
        });
      })
    );

    const orderCreated = await Order.findByPk(id, modelOrderReturn);

    return res.json(orderCreated);
  }

  async index(_, res) {
    const orders = await Order.findAll(modelOrderReturn);
    return res.json(orders);
  }

  async cancelOrder(req, res) {
    const order = await Order.findByPk(req.params.id);

    if (order.status === 'CANCELED') {
      return res.status(400).json({ error: 'Order already canceled' });
    }

    order.status = 'CANCELED';
    order.cancel_date = new Date();
    await order.save();

    const { id, status } = order;

    return res.json({
      id,
      status,
    });
  }
}

export default new OrderController();
