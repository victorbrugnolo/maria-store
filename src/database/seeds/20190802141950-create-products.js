module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'products',
      [
        {
          sku: 1234567,
          name: 'Action Figure Spider man',
          price: 99.99,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          sku: 7569321,
          name: 'Caneca Dev',
          price: 50,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          sku: 8973211,
          name: 'Pack de stickers',
          price: 30.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('products', null, {});
  },
};
