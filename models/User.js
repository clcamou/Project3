//import Sequelize library 
const Sequelize = require('sequelize');
//connect to database
const db = require('../database/db.js');

//define the model with field of database
module.exports = db.sequelize.define(
  'user',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    },
    school_id: {
      type: Sequelize.INTEGER, 
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
);
