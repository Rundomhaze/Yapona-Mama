module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrdersFoods', {
      order_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Orders',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      food_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Foods',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('OrdersFoods');
  },
};
