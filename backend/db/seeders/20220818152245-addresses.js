module.exports = {
  async up(queryInterface) {
    const addresses = [{
      street: 'ул. Ленина',
      house: 'д. 1',
      entrance: '3',
      floor: '4',
      flat: '6',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      street: 'пр. Мира',
      house: '97',
      entrance: '7',
      floor: '2',
      flat: '99',
      createdAt: new Date(),
      updatedAt: new Date(),
    }];
    await queryInterface.bulkInsert('Addresses', addresses, {});
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
