'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Customers', [{
      identityNumber: '1234567890',  
      fullName: 'John Doe',
      address: 'Medan',
      birthDate: '01-01-1980',
      gender: 'Male',
      createdAt: new Date(),
      updatedAt: new Date()    
    },{
      identityNumber: '2345678901',  
      fullName: 'Sule Gondrong',
      address: 'Bandung',
      birthDate: '02-02-1970',
      gender: 'Male',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:*/
    await queryInterface.bulkDelete('Customers', null, {}); 
  }
};
