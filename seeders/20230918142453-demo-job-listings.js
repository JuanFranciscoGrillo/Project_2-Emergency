'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Job_Listings', [{
      contractor_id: 1,
      title: 'Need a Plumber',
      description: 'Fixing a leaky faucet',
      location: '123 Main St',
      skills_required: 'Plumbing',
      budget: 100,
      post_date: new Date(),
      status: 'Open',
      start_date: new Date(),
      deadline: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Job_Listings', null, {});
  }
};
