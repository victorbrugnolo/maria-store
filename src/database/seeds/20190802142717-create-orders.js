module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'orders',
      [
        {
          status: 'CANCELED',
          total: 30.5,
          customer_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          status: 'CONCLUDED',
          total: 199.99,
          customer_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          status: 'CONCLUDED',
          total: 210.9,
          customer_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('orders', null, {});
  },
};
