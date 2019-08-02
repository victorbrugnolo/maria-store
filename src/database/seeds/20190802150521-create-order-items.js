module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'order_items',
      [
        {
          amount: 1,
          price_unit: 30.5,
          total: 30.5,
          product_id: 3,
          order_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          amount: 1,
          price_unit: 99.99,
          total: 30.5,
          product_id: 3,
          order_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          amount: 2,
          price_unit: 50,
          total: 30.5,
          product_id: 3,
          order_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          amount: 1,
          price_unit: 99.9,
          total: 99.9,
          product_id: 1,
          order_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          amount: 1,
          price_unit: 50,
          total: 50,
          product_id: 2,
          order_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          amount: 2,
          price_unit: 61,
          total: 30.5,
          product_id: 3,
          order_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('order_items', null, {});
  },
};
