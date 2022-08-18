const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UsersFood extends Model {
    static associate({ User, Food }) {
      UsersFood.belongsTo(User);
      UsersFood.belongsTo(Food);
    }
  }
  UsersFood.init({
    user_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
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
        model: 'Food',
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
    modelName: 'UsersFood',
    tableName: 'usersFoods',
  });
  return UsersFood;
};
