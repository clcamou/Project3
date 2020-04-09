const Sequelize = require('sequelize');

const db = {};

const sequelize = new Sequelize({
    username: "root",
    password: "Greenapples_45",
    database: "logindb", 
    host: "localhost", 
    dialect: "mysql",
    
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