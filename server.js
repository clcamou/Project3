let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
const app = express();
let db = require("./database/db");
let PORT = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

let Users = require('./routes/Users')

app.use('/users', Users)

db.sequelize.sync({ force: false} ).then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});