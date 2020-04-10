let express = require('express');
//used in develop to handle doman request 
let cors = require('cors');
//allows parsing with data in json form
let bodyParser = require('body-parser');
const app = express();
//pull the data from the database
let db = require("./database/db");

//set port 
let PORT = process.env.PORT || 5000;
//mounts the middlewear bodyParser
app.use(bodyParser.json())
//mounts cors 
app.use(cors());
//parse data with JSON like structure
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
//set routes 
let Users = require('./routes/Users')
//moute to the users path
app.use('/users', Users)

db.sequelize.sync({ force: false} ).then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});