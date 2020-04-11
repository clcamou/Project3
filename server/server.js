const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./database/db') 
const Sequelize = require('sequelize')(session)
const passport = require('./passport');
const app = express()
const PORT = 3000
// Route requires
const User = require('./routes/user')

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: 'teachers roock', //pick a random string to make the hash that is generated secure
		store: new mysql({ SequelizeConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Routes
app.use('/user', User)

// Starting Server 
db.sequelize.sync({ force: false }).then(function()	{app.listen(PORT, () => {
	console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT)
	})
});