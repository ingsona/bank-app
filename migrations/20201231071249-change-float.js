'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.changeColumn('Accounts', 'balance', {
      type:'FLOAT USING CAST("balance" as FLOAT)'
    });
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.changeColumn('Accounts', 'balance', {
      type: 'STRING USING CAST("balance" as STRING)'
    });
  }
};
