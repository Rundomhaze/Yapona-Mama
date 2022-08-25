const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User, OrdersFood }) {
      Order.belongsTo(User, { foreignKey: 'user_id' });
      Order.hasMany(OrdersFood, { foreignKey: 'order_id' });
    }
  }
  Order.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    total_price: {
      defaultValue: 0,
      type: DataTypes.INTEGER,
    },
    comment: {
      type: DataTypes.TEXT,
    },
    phone: {
      type: DataTypes.TEXT,
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
    is_ordered: {
      defaultValue: false,
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
    modelName: 'Order',
    tableName: 'Orders',
  });
  return Order;
};
