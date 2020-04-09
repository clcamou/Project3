const express = require("express")
const cors = require('cors');
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

const app = express();

// Define middleware here
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(bodyParser.static("client/build"));
};

// Define API routes here
const Users = require("./routes/Users.js");
// Send every other request to the React app
// Define any API routes before this runs
app.use('/users', Users);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});