module.exports = {
  async up(queryInterface) {
    const foods = [{
      title: 'Эби идзуми тай маки',
      description: 'салатная креветка, окунь, японский омлет, сливочный сыр, сырный соус',
      photo: 'https://evrasia-ex.ru/media/images/node_5339.jpg',
      weight: '240',
      old_price: '550',
      new_price: '488',
      type_id: 1, // роллы
      subtype_id: 2, // запеченые
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Каппа маки',
      description: 'огурец',
      photo: 'https://evrasia-ex.ru/media/images/node_301.jpg',
      weight: '240',
      old_price: '550',
      new_price: '488',
      type_id: 1, // роллы
      subtype_id: 1, // классические
      is_vegan: true,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Кайеси ясай маки',
      description: 'острые мидии, салат Айсберг, майонез, укроп',
      photo: 'https://evrasia-ex.ru/media/images/node_2902.jpg',
      weight: '200',
      old_price: '370',
      new_price: '315',
      type_id: 1, // роллы
      subtype_id: 1, // классические
      is_vegan: false,
      is_spicy: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Филадельфия классик',
      description: 'лосось, сливочный сыр',
      photo: 'https://evrasia-ex.ru/media/images/node_2107.jpg',
      weight: '200',
      old_price: '650',
      new_price: '602',
      type_id: 1, // роллы
      subtype_id: 3, // со сливочным сыром
      is_vegan: false,
      is_spicy: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }];
    await queryInterface.bulkInsert('Food', foods, {});
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
