//Connect to Mongo database
const Sequelize = require('Sequelize')
Sequelize.Promise = global.Promise

//your local database url
//27017 is the default mongoDB port
const uri = 'mysql://localhost:27017/logindb'; 

Sequelize.connect(uri).then(
    () => { 
        /** ready to use. The `Sequelize.connect()` promise resolves to undefined. */ 
        console.log('Connected to mysql');
        
    },
    err => {
         /** handle initial connection error */ 
         console.log('error connecting to mysql: ')
         console.log(err);
         
        }
  );


module.exports = Sequelize.connection