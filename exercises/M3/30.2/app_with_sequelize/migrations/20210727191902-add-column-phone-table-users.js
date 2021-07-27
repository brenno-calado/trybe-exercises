'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.addColumn('Users', 'phone_num', { type: Sequelize.INTEGER });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.removeColumn('Users', 'phone_num');
  }
};
