const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate({ UsersAddress }) {
      Address.hasMany(UsersAddress, { foreignKey: 'address_id' });
    }
  }
  Address.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    street: {
      type: DataTypes.TEXT,
    },
    house: {
      type: DataTypes.TEXT,
    },
    entrance: {
      type: DataTypes.TEXT,
    },
    floor: {
      type: DataTypes.TEXT,
    },
    flat: {
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
    modelName: 'Address',
    tableName: 'addresses',
  });
  return Address;
};
