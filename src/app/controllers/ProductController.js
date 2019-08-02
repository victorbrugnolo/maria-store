import Product from '../models/Product';

class ProductController {
  async store(req, res) {
    let productExist = await Product.findOne({
      where: {
        sku: req.body.sku,
      },
    });

    if (productExist) {
      return res.status(400).json({ error: 'Product sku already exists.' });
    }

    productExist = await Product.findOne({
      where: {
        name: req.body.name,
      },
    });

    if (productExist) {
      return res.status(400).json({ error: 'Product name already exists.' });
    }

    const product = await Product.create(req.body);

    return res.json(product);
  }

  async index(_, res) {
    const products = await Product.findAll();
    return res.json(products);
  }
}

export default new ProductController();
