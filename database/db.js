//import Sequelize library 
const Sequelize = require('sequelize');

const db = {};
//connect to mySQL 
const sequelize = new Sequelize('logindb','root', 'Greenapples_45', {
    host: "localhost", 
    dialect: "mysql",
    operatorsAliases: false,
    
    //setting connectings 
    pool: {
        max: 5, 
        min: 0, 
        acquire: 30000,
        idle: 10000
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db; 