import Customer from '../models/Customer';

class CustomerController {
  async store(req, res) {
    let customerExist = await Customer.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (customerExist) {
      return res.status(400).json({ error: 'Customer e-mail already exists.' });
    }

    customerExist = await Customer.findOne({
      where: {
        cpf: req.body.cpf,
      },
    });

    if (customerExist) {
      return res.status(400).json({ error: 'Customer CPF already exists.' });
    }

    const customer = await Customer.create(req.body);
    return res.json(customer);
  }
}

export default new CustomerController();
