'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    static associate(models) {
      // An Application is linked to a specific JobListing.
      Application.belongsTo(models.JobListing, { foreignKey: 'job_id', as: 'jobListing' });

      // An Application is made by a specific Subcontractor.
      Application.belongsTo(models.Subcontractor, { foreignKey: 'subcontractor_id', as: 'subcontractor' });
    }
  }

  Application.init({
    application_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subcontractor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    application_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Application',
  });

  return Application;
};
