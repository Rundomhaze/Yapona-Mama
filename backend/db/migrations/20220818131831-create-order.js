module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      total_price: {
        type: Sequelize.INTEGER,
      },
      comment: {
        type: Sequelize.TEXT,
      },
      phone: {
        type: Sequelize.INTEGER,
      },
      street: {
        type: Sequelize.TEXT,
      },
      house: {
        type: Sequelize.TEXT,
      },
      entrance: {
        type: Sequelize.TEXT,
      },
      floor: {
        type: Sequelize.TEXT,
      },
      flat: {
        type: Sequelize.TEXT,
      },
      is_ordered: {
        defaultValue: 'false',
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
    await queryInterface.dropTable('Orders');
  },
};
