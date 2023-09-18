'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('JobListings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contractor_id: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      location: {
        type: Sequelize.STRING
      },
      skills_required: {
        type: Sequelize.TEXT
      },
      budget: {
        type: Sequelize.DECIMAL
      },
      post_date: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.DATE
      },
      deadline: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('JobListings');
  }
};