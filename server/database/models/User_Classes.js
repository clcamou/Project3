//import Sequelize library 
const Sequelize = require('sequelize');
//connect to database
const db = require('../database/db.js');

//define the model with field of database
module.exports = db.sequelize.define(
  'user',
    {
      class_id: {
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      created: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    },{
    classMethods: {
      getClassRoster: function(id){
        this.findAll({where: {class_id: id}})
      }
    }
  }
);
