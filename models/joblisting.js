'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class JobListing extends Model {
    static associate(models) {
      // A JobListing is associated with a Contractor.
      JobListing.belongsTo(models.Contractor, { foreignKey: 'contractor_id', as: 'contractor' });
      
      // Multiple Subcontractors can apply for a JobListing.
      JobListing.hasMany(models.Application, { foreignKey: 'job_id', as: 'applications' });
    }
  }

  JobListing.init({
    job_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    contractor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    skills_required: DataTypes.TEXT,
    budget: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    post_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    start_date: DataTypes.DATE,
    deadline: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'JobListing',
  });

  return JobListing;
};
