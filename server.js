const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const db = require("./database/db");
const PORT = process.env.PORT || 3000;

// Define middleware here
app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// Define API routes here
let Users = require('./routes/Users');
// Send every other request to the React app
// Define any API routes before this runs
app.use('/users', Users);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
