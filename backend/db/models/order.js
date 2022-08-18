const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User, OrderFood }) {
      Order.belongsTo(User);
      Order.hasMany(OrderFood, { foreignKey: 'order_id' });
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
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    total_price: {
      type: DataTypes.INTEGER,
    },
    comment: {
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
      defaultValue: 'false',
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
    tableName: 'orders',
  });
  return Order;
};
