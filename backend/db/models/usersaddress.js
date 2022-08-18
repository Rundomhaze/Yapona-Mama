const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UsersAddress extends Model {
    static associate({ User, Address }) {
      UsersAddress.belongsTo(User);
      UsersAddress.belongsTo(Address);
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
    tableName: 'usersAddresses',
  });
  return UsersAddress;
};
