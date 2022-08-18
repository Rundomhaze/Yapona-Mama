const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    static associate({ FoodsIngredient }) {
      Ingredient.hasMany(FoodsIngredient, { foreignKey: 'ingredient_id' });
    }
  }
  Ingredient.init({
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
    modelName: 'Ingredient',
    tableName: 'Ingredients',
  });
  return Ingredient;
};
