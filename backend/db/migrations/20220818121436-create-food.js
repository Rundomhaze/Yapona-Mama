module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Foods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.TEXT,
      },
      description: {
        type: Sequelize.TEXT,
      },
      photo: {
        type: Sequelize.TEXT,
      },
      weight: {
        type: Sequelize.INTEGER,
      },
      old_price: {
        type: Sequelize.INTEGER,
      },
      new_price: {
        type: Sequelize.INTEGER,
      },
      type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Types',
          key: 'id',
        },
      },
      subtype_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Subtypes',
          key: 'id',
        },
      },
      is_vegan: {
        type: Sequelize.BOOLEAN,
      },
      is_spicy: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Foods');
  },
};
