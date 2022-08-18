const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FoodsIngredient extends Model {
    static associate({ Food, Ingredient }) {
      FoodsIngredient.belongsTo(Food);
      FoodsIngredient.belongsTo(Ingredient);
    }
  }
  FoodsIngredient.init({
    food_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'Food',
        key: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    ingredient_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'Ingredients',
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
    modelName: 'FoodsIngredient',
    tableName: 'foodsIngredients',
  });
  return FoodsIngredient;
};
