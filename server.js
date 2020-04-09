let express = require("express");
let cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./database/db");
const PORT = process.env.PORT || 3000;

// Define middleware here
let app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));

let Users = require("./routes/Users.js")

app.use('/users', Users);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
