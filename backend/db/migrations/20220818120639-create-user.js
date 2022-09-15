module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      password: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      phone: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      is_admin: {
        defaultValue: 'false',
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      orderPhone: {
        type: Sequelize.TEXT,
      },
      orderStreet: {
        type: Sequelize.TEXT,
      },
      orderHouse: {
        type: Sequelize.TEXT,
      },
      orderEntrance: {
        type: Sequelize.TEXT,
      },
      orderFloor: {
        type: Sequelize.TEXT,
      },
      orderFlat: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('Users');
  },
};
