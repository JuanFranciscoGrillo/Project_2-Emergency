'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // A User can be a Contractor.
      User.hasOne(models.Contractor, {
        foreignKey: 'user_id',
        as: 'contractorProfile',
      });

      // A User can be a Subcontractor.
      User.hasOne(models.Subcontractor, {
        foreignKey: 'user_id',
        as: 'subcontractorProfile',
      });

      // A User can send many messages.
      User.hasMany(models.Message, {
        foreignKey: 'sender_id',
        as: 'sentMessages',
      });

      // A User can receive many messages.
      User.hasMany(models.Message, {
        foreignKey: 'receiver_id',
        as: 'receivedMessages',
      });
    }
  }

  User.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
   
