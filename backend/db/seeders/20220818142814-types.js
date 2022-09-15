module.exports = {
  async up(queryInterface) {
    const types = [{
      title: 'Роллы',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Суши',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Сеты',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Салаты и WOK',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Закуски',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Супы',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Соусы',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Десерты',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Напитки',
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
