//import Sequelize library 
const Sequelize = require('sequelize');
//connect to database
const db = require('../database/db.js');

//define the model with field of database
module.exports = db.sequelize.define(
  'classes',
  {
    class_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    school_id: {
      type: Sequelize.INTEGER
    },
    class_name: {
      type: Sequelize.STRING
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  }, {
    classMethods: {
      // grabs list of classes for a given school id
      getClassesInSchool: function(id){

        let res = await this.findAll({
          where: {
            school_id: id
          }
        })
        return res;
      },
      // instantiates a class instance tied to  a given school and with a given name
      addClass:function(school_id, class_name){
        this.create({school_id: school_id, class_name: class_name}).then(
          console.log(`class created tied to school ID ${school_id} with name ${class_name}`)
          )
      },
      //renames existing class
      renameClass: function(id, newName){
        this.update({school_name: newName}, {
          where: {
            class_id = id
          }
        }).then(console.log(`Updated class with id ${id} to have name ${school_name}`))
      }
    }
  }
);
