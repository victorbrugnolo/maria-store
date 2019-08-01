import * as Yup from 'yup';
import Sequelize from 'sequelize';

import Product from '../models/Product';

class ProductController {
  async store(req, res) {
    const schema = Yup.object().shape({
      sku: Yup.number()
        .integer()
        .required(),
      name: Yup.string().required(),
      price: Yup.number()
        .min(1)
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Field validation fails.' });
    }

    const { Op } = Sequelize;

    const productExist = await Product.findOne({
      where: {
        [Op.or]: [{ sku: req.body.sku }, { name: req.body.name }],
      },
    });

    if (productExist) {
      return res.status(400).json({ error: 'Product already exists.' });
    }

    const product = await Product.create(req.body);

    return res.json(product);
  }

  async index(req, res) {
    const products = await Product.findAll();
    return res.json(products);
  }
}

export default new ProductController();
