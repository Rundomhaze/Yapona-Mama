module.exports = {
  async up(queryInterface) {
    const subtypes = [{
      title: 'Классические роллы',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Жареные роллы',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Роллы-перевертыши',
      createdAt: new Date(),
      updatedAt: new Date(),
    }];
    await queryInterface.bulkInsert('Subtypes', subtypes, {});
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
