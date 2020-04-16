//import Sequelize library 
const Sequelize = require('sequelize');
//connect to database
const db = require('../database/db.js');

//define the model with field of database
module.exports = db.sequelize.define(
  'student_assignments',
  {
    assignment_id: {
      type: Sequelize.INTEGER
    },
    user_id: {
      type: Sequelize.INTEGER
    },
    is_complete: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    grade: {
      type: Sequelize.INTEGER
    },
    feedback: {
      type: Sequelize.STRING
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  }, {
    classMethods: {
      // grabs list of assignments for a given user id
      getAssignmentsForUser: function(id){
        this.findAll({
          where: {
            user_id: id
          }
        }).then(function(res){
          return res
        })
      }, 
      //associates an assignment with a user
      addAssignmentToStudent: function(assignment_id, user_id){
        this.create({assignment_id: assignment_id, user_id: user_id}).then(console.log(`associated assignment ${assignment_id} with user ${user_id}`))
      }
    }
  }
);
