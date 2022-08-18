const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Subtype extends Model {
    static associate({ Food }) {
      Subtype.hasOne(Food, { foreignKey: 'subtype_id' });
    }
  }
  Subtype.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
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
    modelName: 'Subtype',
    tableName: 'sybtypes',
  });
  return Subtype;
};
