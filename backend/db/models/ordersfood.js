const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrdersFood extends Model {
    static associate({ Order, Food }) {
      OrdersFood.belongsTo(Order, { foreignKey: 'order_id' });
      OrdersFood.belongsTo(Food, { foreignKey: 'food_id' });
    }
  }
  OrdersFood.init({
    order_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'Order',
        key: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    food_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'Foods',
        key: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
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
    modelName: 'OrdersFood',
    tableName: 'OrdersFoods',
  });
  return OrdersFood;
};
