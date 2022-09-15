const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    static associate({
      UsersFood, FoodsIngredient, OrdersFood, Type, Subtype,
    }) {
      Food.hasMany(UsersFood, { foreignKey: 'food_id' });
      Food.hasMany(FoodsIngredient, { foreignKey: 'food_id' });
      Food.hasMany(OrdersFood, { foreignKey: 'food_id' });
      Food.belongsTo(Type, { foreignKey: 'type_id' });
      Food.belongsTo(Subtype, { foreignKey: 'subtype_id' });
    }
  }
  Food.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
    photo: {
      type: DataTypes.TEXT,
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    old_price: {
      type: DataTypes.INTEGER,
    },
    new_price: {
      type: DataTypes.INTEGER,
    },
    type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Types',
        key: 'id',
      },
    },
    subtype_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Subtypes',
        key: 'id',
      },
    },
    is_vegan: {
      type: DataTypes.BOOLEAN,
    },
    is_spicy: {
      type: DataTypes.BOOLEAN,
    },
    is_hit: {
      type: DataTypes.BOOLEAN,
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
    modelName: 'Food',
    tableName: 'Foods',
  });
  return Food;
};
