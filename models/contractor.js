'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Contractor extends Model {
    static associate(models) {
      // A Contractor is associated with a User.
      Contractor.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
      
      // A Contractor can have multiple JobListings.
      Contractor.hasMany(models.JobListing, { foreignKey: 'contractor_id', as: 'jobListings' });
    }
  }

  Contractor.init({
    contractor_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true  // Assuming the address can be nullable. Adjust if needed.
    }
  }, {
    sequelize,
    modelName: 'Contractor',
  });

  return Contractor;
};
