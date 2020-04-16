//import Sequelize library 
const Sequelize = require('sequelize');
//connect to database
const db = require('../database/db.js');

//define the model with field of database
module.exports = db.sequelize.define(
  'schools',
  {
    school_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    school_name: {
      type: Sequelize.STRING
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
  {
    classMethods: {
      // grabs list of schools
      list: function(){
        this.findAll().then(function(result){
          return result
        })
      },
      addSchool: function(name){
        await this.create({school_name: name})
      },
      removeSchool:function(id){
        await this.destroy({
          where: {
            school_id: id
          }
        })
      },
      renameSchool:function(id, name){
        await this.update({school_name: name}, {
          where : {
            school_id: id
          }
        })
      }
    }
  }
);
