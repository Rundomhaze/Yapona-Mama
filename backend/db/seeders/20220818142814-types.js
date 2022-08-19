module.exports = {
  async up(queryInterface) {
    const types = [{
      title: 'Роллы',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Наборы',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Суши',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Супы',
      createdAt: new Date(),
      updatedAt: new Date(),
    }];
    await queryInterface.bulkInsert('Types', types, {});
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
