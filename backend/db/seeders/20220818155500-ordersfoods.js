module.exports = {
  async up(queryInterface) {
    const ordersfoods = [{
      order_id: 1,
      food_id: 1,
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      order_id: 1,
      food_id: 2,
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      order_id: 1,
      food_id: 3,
      quantity: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      order_id: 2,
      food_id: 1,
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      order_id: 2,
      food_id: 2,
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }];
    await queryInterface.bulkInsert('OrdersFoods', ordersfoods, {});
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
