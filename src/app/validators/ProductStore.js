import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      sku: Yup.number()
        .integer()
        .required(),
      name: Yup.string().required(),
      price: Yup.number()
        .min(1)
        .required(),
    });

    await schema.validate(req.body, { abortEarly: false });
    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Fields validation fails.', messages: err.errors });
  }
};
