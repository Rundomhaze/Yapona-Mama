const bcrypt = require('bcrypt');

const saltRounds = 10;

module.exports = {
  async up(queryInterface) {
    const users = [{
      email: 'admin@mail.ru',
      password: await bcrypt.hash('admin', saltRounds),
      name: 'admin',
      phone: 9998887766,
      is_admin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      email: 'ok@ok.ru',
      password: await bcrypt.hash('123', saltRounds),
      name: 'kto-to',
      phone: 8887776655,
      is_admin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }];
    await queryInterface.bulkInsert('Users', users, {});
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
