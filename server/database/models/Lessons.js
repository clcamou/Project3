//import Sequelize library 
const Sequelize = require('sequelize');
//connect to database
const db = require('../database/db.js');

//define the model with field of database
module.exports = db.sequelize.define(
  'lessons',
  {
    lesson_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    class_id: {
      type: Sequelize.INTEGER, 
    },
    lesson_title: {
      type: Sequelize.STRING
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  }, {
    classMethods:{
      getLessonsForClass: function(class_id){
        
      },
      createLessonForClass: function(class_id){

      },
      deleteLesson: function(){

      },
      renameLesson: function(){
        
      }
    }
  
  }
);
