'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Applications', [{
      job_id: 1,
      subcontractor_id: 1,
      application_date: new Date(),
      status: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Applications', null, {});
  }
};
