'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // get existing users
    return queryInterface.sequelize.query('SELECT id from Users;',)
      .then((users) => {
        const userRows = users[0];
        return queryInterface.bulkInsert('Posts',
          [{
            text: 'Lorem ipsum 1',
            userId: userRows[0].id,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            text: 'Lorem Ipsum 2',
            userId: userRows[1].id,
            createdAt: new Date(),
            updatedAt: new Date(),
          }],
        {});
      });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
