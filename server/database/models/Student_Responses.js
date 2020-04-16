//import Sequelize library 
const Sequelize = require('sequelize');
//connect to database
const db = require('../database/db.js');

//define the model with field of database
module.exports = db.sequelize.define(
  'student_responses',
  {
    assignment_id: {
      type: Sequelize.INTEGER
    },
    user_id: {
      type: Sequelize.INTEGER
    },
    question_number: {
      type: Sequelize.INTEGER
    },
    question_response: {
      type: Sequelize.STRING
    },
    response_grade: {
      type: Sequelize.INTEGER, 
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  }, {
    classMethods: {
      getResponsesForAssignment: function(student, assignment_id){
        this.findAll({where: {user_id: student, assignment_id: assignment_id}})
      },
      gradeResponseForAssignment: function(student, assignment_id, question_number, response_grade){
        this.update({response_grade: response_grade}, {
          where: {
            user_id: student,
            assignment_id: assignment_id,
            question_number: question_number
          }
        }).then(console.log(`graded question ${question_number} for assignment ${assignment_id}for user ${student}`))
      },
      addResponseToAssignment: function(student, assignment_id, question_number, question_response){
        this.create({assignment_id: assignment_id, user_id: student, question_number: question_number, question_response: question_response})
        .then(console.log(`recorded response to question ${question_number} for assignment ${assignment_id}for user ${student}`))
      },
      editResponse: function(question_response, user_id, assignment_id, question_number){
        this.update({question_response: question_response}, {
          where: {
            user_id: student,
            assignment_id: assignment_id,
            question_number: question_number
          }
        }).then(console.log(`amended question ${question_number} response for assignment ${assignment_id}for user ${student}`))
      },
      removeResponseFromAssignment: function(student, assignment_id, question_number){
        this.destroy({
          where: {
            user_id: student,
            assignment_id: assignment_id,
            question_number: question_number
          }
        }).then(console.log(`deleted question ${question_number} response for assignment ${assignment_id}for user ${student}`))
      }
    }
  }
);
