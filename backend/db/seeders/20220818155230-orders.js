module.exports = {
  async up(queryInterface) {
    const orders = [{
      user_id: 2,
      comment: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      is_ordered: true,
      total_price: 777,
    }, {
      user_id: 2,
      comment: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      is_ordered: false,
      total_price: 0,
    }];
    await queryInterface.bulkInsert('Orders', orders, {});
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
