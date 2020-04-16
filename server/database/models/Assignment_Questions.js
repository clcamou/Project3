//import Sequelize library 
const Sequelize = require('sequelize');
//connect to database
const db = require('../database/db.js');

//define the model with field of database
module.exports = db.sequelize.define(
  'assignment_questions',
  {
    assignment_id: {
      type: Sequelize.INTEGER
    },
    question_type: {
      type: Sequelize.STRING
    },
    question_number: {
      type: Sequelize.INTEGER
    },
    prompt: {
      type: Sequelize.STRING
    },
    answer_1: {
      type: Sequelize.STRING
    },
    answer_2: {
      type: Sequelize.STRING
    },
    answer_3: {
      type: Sequelize.STRING
    },
    answer_4: {
      type: Sequelize.STRING
    },
    correct_answer: {
      type: Sequelize.INTEGER, 
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  }, {
    classMethods: {
      // grab questions tied to assignment
      getQuestionsForAssignment: function(id){
        this.findAll({
          where: {
            assignment_id: id
          }
        }).then(function(result){
          return result
        })
      },
      // creates question for the assignment based on question type
      createQuestionForAssignment: function(id, type, number, prompt, answer_1, answer_2, answer_3, answer_4, correct_answer){
        // if type == essay, only takes in id type number and prompt
        if (type == essay){
          this.create({assignment_id: id, type: "essay", question_number: number, prompt: prompt})
          .then(console.log(`new question created tied to assignment ${id}, type essay, number ${number}, and prompt ${prompt}`))
        }
        // if type == multiple, takes in all parameters
        else{
            this.create({assignment_id: id, type: "essay", question_number: number, prompt: prompt, answer_1: answer_1, answer_2: answer_2, answer_3: answer_3, answer_4: answer_4, correct_answer: correct_answer})
            .then(console.log(`new question created tied to assignment ${id}, type mutiple choice, number ${number}, and prompt ${prompt}`))
        }
        
      },
      // edit prompt
      editQuesionPrompt: function(assignment_id, question_number, prompt){
        this.update({prompt: prompt}, {
          where: {
            assignment_id: assignment_id,
            question_number: question_number
          }
        })
      },
        // edits answers for an assignment
      editAnswersForAssignment: function(assignment_id, question_number, answer_1, answer_2, answer_3, answer_4, correct_answer){
        if (answer_1){
          this.update({answer_1: answer_1}, {
            where: {
              assignment_id: assignment_id,
              question_number: question_number
            }
          })
        }

        if (answer_2){
          this.update({answer_2: answer_2}, {
            where: {
              assignment_id: assignment_id,
              question_number: question_number
            }
          })
        }

        if (answer_3){
          this.update({answer_3: answer_3}, {
            where: {
              assignment_id: assignment_id,
              question_number: question_number
            }
          })
        }

        if (answer_4){
          this.update({answer_4: answer_4}, {
            where: {
              assignment_id: assignment_id,
              question_number: question_number
            }
          })
        }

        if (correct_answer){
          this.update({correct_answer: correct_answer}, {
            where: {
              assignment_id: assignment_id,
              question_number: question_number
            }
          })
        }
        console.log(`updated answers for question ${question_number} on assignment ${assignment_id}`)
      }, 
      //removes a question for the assignment
      removeQuestionFromAssignment: function(assignment_id, question_number){
        this.destroy({where: {assignment_id: assignment_id, question_number: question_number}})
        .then(console.log(`removed question ${question_number} from assignment ${assignment_id}`))
      }
    }
  }
);
