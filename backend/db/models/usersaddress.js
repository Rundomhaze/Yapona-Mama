const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UsersAddress extends Model {
    static associate({ User, Address }) {
      UsersAddress.belongsTo(User, { foreignKey: 'user_id' });
      UsersAddress.belongsTo(Address, { foreignKey: 'address_id' });
    }
  }
  UsersAddress.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    address_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Addresses',
        key: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'UsersAddress',
    tableName: 'UsersAddresses',
  });
  return UsersAddress;
};
