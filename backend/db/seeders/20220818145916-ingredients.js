module.exports = {
  async up(queryInterface) {
    const ingredients = [{
      title: 'салатная креветка',
      createdAt: new Date(),
      updatedAt: new Date(), // 1
    }, {
      title: 'окунь',
      createdAt: new Date(),
      updatedAt: new Date(), // 2
    }, {
      title: 'японский омлет',
      createdAt: new Date(),
      updatedAt: new Date(), // 3
    }, {
      title: 'сливочный сыр',
      createdAt: new Date(),
      updatedAt: new Date(), // 4
    }, {
      title: 'сырный соус',
      createdAt: new Date(),
      updatedAt: new Date(), // 5
    }, {
      title: 'огурец',
      createdAt: new Date(),
      updatedAt: new Date(), // 6
    }, {
      title: 'острые мидии',
      createdAt: new Date(),
      updatedAt: new Date(), // 7
    }, {
      title: 'салат Айсберг',
      createdAt: new Date(),
      updatedAt: new Date(), // 8
    }, {
      title: 'майонез',
      createdAt: new Date(),
      updatedAt: new Date(), // 9
    }, {
      title: 'укроп',
      createdAt: new Date(),
      updatedAt: new Date(), // 10
    }, {
      title: 'лосось',
      createdAt: new Date(),
      updatedAt: new Date(), // 11
    }];
    await queryInterface.bulkInsert('Ingredients', ingredients, {});
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
