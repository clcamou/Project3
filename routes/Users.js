//Declear dependencies 
const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//Use the database model 
const User = require('../models/User');
//use jwt to get token to help secure information
users.use(cors());

process.env.SECRET_KEY = 'secret';

//post requests 
users.post('/register', (req, res) => {
  const today = new Date();
  //assign inform to object called userData
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    username: req.body.username,
    school_id: req.body.school_id,
    created: today
  };
  //check if the user already has an account 
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    //TODO bcrypt if there is not an account already made 
    .then(user => {
      if (!user) {
        const hash = bcrypt.hashSync(userData.password, 10);
        userData.password = hash
        User.create(userData)
          .then(user => {
            //creates token to encript data with dataValues that hold the object key
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
              expiresIn: 1440
            }); //token is created and passed to the frontend
            res.json({ token: token });
          })
          .catch(err => {
            res.send('error: ' + err);
          });
      } else {
        //if the email is already been used; throw err
        res.json({ error: 'Account already exists. Please sign in' });
      };
    })
    .catch(err => {
      res.send('error: ' + err)
    });
});

//Login Path 
users.post('/login', (req, res) => {
  //find the email 
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    //keep if the email matches an account 
    .then(user => {
      //a match will trigger a comparison of passwords req.body.password is clientside; user.password is database
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          }); //if there is a match a token is generated and passed to the frontend 
          res.send({ token: token });
        };
      } else {
        //if it fails the comparison, send error
        res.status(400).json({ error: 'email or password is incorrect' });
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})

//Profile; fetch profile 
users.get('/profile', (req, res) => {
  //converts the token back into the object so the data can be see by the user. 
  let decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);

  User.findOne({
    //using the id from the database to find the user's information 
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        //pass to the clientside 
        res.json(user)
      } else {
        res.send('Sorry, account not found');
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    });
});

module.exports = users;