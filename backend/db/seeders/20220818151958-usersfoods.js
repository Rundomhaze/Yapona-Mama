module.exports = {
  async up(queryInterface) {
    const usersfoods = [{
      user_id: 2,
      food_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 2,
      food_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }];
    await queryInterface.bulkInsert('UsersFoods', usersfoods, {});
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
