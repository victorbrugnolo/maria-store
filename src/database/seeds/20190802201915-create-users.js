module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'admin',
          email: 'admin@mariastore.com',
          password_hash:
            '$2a$08$G4C.nXpArRCy72jQQz3Dvews1/G4b4YpyDnhFNRai60OcoTmk/Chq',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
