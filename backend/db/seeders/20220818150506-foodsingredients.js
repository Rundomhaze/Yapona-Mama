module.exports = {
  async up(queryInterface) {
    const foodsingredients = [{
      food_id: 1,
      ingredient_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      food_id: 1,
      ingredient_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      food_id: 1,
      ingredient_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      food_id: 1,
      ingredient_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      food_id: 1,
      ingredient_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      food_id: 2,
      ingredient_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      food_id: 3,
      ingredient_id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      food_id: 3,
      ingredient_id: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      food_id: 3,
      ingredient_id: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      food_id: 3,
      ingredient_id: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      food_id: 4,
      ingredient_id: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      food_id: 3,
      ingredient_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }];
    await queryInterface.bulkInsert('FoodsIngredients', foodsingredients, {});
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
