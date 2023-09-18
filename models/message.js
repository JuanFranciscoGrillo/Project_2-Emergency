'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      // A Message has a sender which is a User.
      Message.belongsTo(models.User, { foreignKey: 'sender_id', as: 'sender' });
      
      // A Message has a receiver which is also a User.
      Message.belongsTo(models.User, { foreignKey: 'receiver_id', as: 'receiver' });
    }
  }

  Message.init({
    message_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sender_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    receiver_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    message_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Message',
  });

  return Message;
};
