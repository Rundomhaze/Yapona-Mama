module.exports = {
  async up(queryInterface) {
    const usersaddresses = [{
      user_id: 2,
      address_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      address_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }];
    await queryInterface.bulkInsert('UsersAddresses', usersaddresses, {});
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
