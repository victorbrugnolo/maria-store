import * as Yup from 'yup';
import { cpf } from 'cpf-cnpj-validator';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      cpf: Yup.string()
        .required()
        .test('validateCpf', 'CPF invalid', value => {
          const { path, createError } = this;
          if (!cpf.isValid(value)) {
            return createError({ path, message: 'CPF invalid' });
          }
          return true;
        }),
    });

    await schema.validate(req.body, { abortEarly: false });
    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Fields validation fails.', messages: err.errors });
  }
};
