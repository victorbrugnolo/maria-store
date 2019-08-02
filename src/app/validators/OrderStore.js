import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      status: Yup.string()
        .oneOf(['CONCLUDED'])
        .required(),
      total: Yup.number()
        .min(1)
        .required(),
      buyer: Yup.number().required(),
      items: Yup.array()
        .of(
          Yup.object().shape({
            amount: Yup.number().required(),
            price_unit: Yup.number()
              .min(1)
              .required(),
            total: Yup.number()
              .min(1)
              .required(),
            product: Yup.number().required(),
          })
        )
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
