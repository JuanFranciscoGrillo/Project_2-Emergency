'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Subcontractor extends Model {
    static associate(models) {
      // A Subcontractor is associated with a User.
      Subcontractor.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
      
      // A Subcontractor can apply for multiple Job Listings.
      Subcontractor.hasMany(models.Application, { foreignKey: 'subcontractor_id', as: 'applications' });
    }
  }

  Subcontractor.init({
    subcontractor_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: DataTypes.INTEGER,
    skills: DataTypes.TEXT,
    certifications: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Subcontractor',
  });

  return Subcontractor;
};
