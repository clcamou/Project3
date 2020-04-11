const Sequelize = require('sequelize');
const db = require('../db');
const bcrypt = require('bcryptjs');
Sequelize.promise = Promise

//define the model with field of database
db.sequelize.define(
	'User',
	{
	  id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	  },
	  first_name: {
		type: Sequelize.STRING
	  },
	  last_name: {
		type: Sequelize.STRING
	  },
	  email: {
		type: Sequelize.STRING
	  },
	  password: {
		type: Sequelize.STRING
	  },
	  username: {
		type: Sequelize.STRING
	  },
	  school_id: {
		type: Sequelize.INTEGER, 
	  },
	  created: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW
	  }
	},
  );

// Define methods
user.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
user.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js Please enter in password')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password)
		next()
	}
})

const User = Sequelize.model('User', user)
module.exports = User