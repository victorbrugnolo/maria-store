// import * as Yup from 'yup';
// import Sequelize from 'sequelize';

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
    // const schema = Yup.object().shape({
    //   sku: Yup.number()
    //     .integer()
    //     .required(),
    //   name: Yup.string().required(),
    //   price: Yup.number()
    //     .min(1)
    //     .required(),
    // });

    // if (!(await schema.isValid(req.body))) {
    //   return res.status(400).json({ error: 'Field validation fails.' });
    // }

    // const { Op } = Sequelize;

    // const OrderExist = await Product.findOne({
    //   where: {
    //     [Op.or]: [{ sku: req.body.sku }, { name: req.body.name }],
    //   },
    // });

    // if (productExist) {
    //   return res.status(400).json({ error: 'Product already exists.' });
    // }

    const order = await Order.create(req.body);

    const { id } = order;

    for (const item of req.body.items) {
      item.order_id = id;
      await OrderItem.create(item);
    }

    const ret = await Order.findByPk(id, modelOrderReturn);

    return res.json(ret);
  }

  async index(_, res) {
    const products = await Order.findAll(modelOrderReturn);
    return res.json(products);
  }
}

export default new OrderController();
