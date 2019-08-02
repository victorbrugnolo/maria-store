module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'customers',
      [
        {
          name: 'Tony Stark',
          cpf: '64557192041',
          email: 'tony@marvel.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Peter Parker',
          cpf: '56241126024',
          email: 'peter@marvel.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Natasha Romanoff',
          cpf: '33708325001',
          email: 'natasha@marvel.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('customers', null, {});
  },
};
