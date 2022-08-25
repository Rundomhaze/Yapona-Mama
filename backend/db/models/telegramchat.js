const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TelegramChat extends Model {
    static associate() {
    }
  }
  TelegramChat.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    chatId: {
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
    modelName: 'TelegramChat',
    tableName: 'TelegramChats',
  });
  return TelegramChat;
};
