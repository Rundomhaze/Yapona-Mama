const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrdersFood extends Model {
    static associate({ Order, Food }) {
      OrdersFood.belongsTo(Order);
      OrdersFood.belongsTo(Food);
    }
  }
  OrdersFood.init({
    order_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Orders',
        key: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    food_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Food',
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
    tableName: 'ordersFoods',
  });
  return OrdersFood;
};
