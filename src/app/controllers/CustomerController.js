import * as Yup from 'yup';
import Sequelize from 'sequelize';

import Customer from '../models/Customer';

class CustomerController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      cpf: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Field validation fails.' });
    }

    const { Op } = Sequelize;

    const customerExist = await Customer.findOne({
      where: {
        [Op.or]: [{ email: req.body.email }, { cpf: req.body.cpf }],
      },
    });

    if (customerExist) {
      return res.status(400).json({ error: 'Customer already exists.' });
    }

    const customer = await Customer.create(req.body);

    return res.json(customer);
  }
}

export default new CustomerController();
