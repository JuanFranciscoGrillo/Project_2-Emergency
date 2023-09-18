'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Subcontractors', [{
      user_id: 1, 
      skills: 'Plumbing, Electrical',
      certifications: 'Certified Plumber',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Subcontractors', null, {});
  }
};
