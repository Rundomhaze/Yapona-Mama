const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ UsersAddress, UsersFood, Order }) {
      User.hasMany(UsersAddress, { foreignKey: 'user_id' });
      User.hasMany(UsersFood, { foreignKey: 'user_id' });
      User.hasMany(Order, { foreignKey: 'user_id' });
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    phone: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    is_admin: {
      defaultValue: 'false',
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    orderPhone: {
      type: DataTypes.TEXT,
    },
    orderStreet: {
      type: DataTypes.TEXT,
    },
    orderHouse: {
      type: DataTypes.TEXT,
    },
    orderEntrance: {
      type: DataTypes.TEXT,
    },
    orderFloor: {
      type: DataTypes.TEXT,
    },
    orderFlat: {
      type: DataTypes.TEXT,
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
    modelName: 'User',
    tableName: 'Users',
  });
  return User;
};
