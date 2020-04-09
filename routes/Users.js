const express = require('express');
const Users = express.Router();
//middlewear
const cors = require('cors');
//Encodes private information 
const jwt = require('jsonwebtoken');
//Turns password into hashtags
const bcrypt = require('bcrypt');

let User = require('../models/Users');

Users.use(cors());
//keeps all private information encoded to protect User
process.env.SECRET_KEY = 'secret';

Users.post('/register', (req, res) => {
  const today = new Date();
  const UserData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today
  };

  User.findOne({
    where: {
      email: req.body.email
    }
  })

    //TODO bcrypt
    .then(User => {
      if (!User) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          UserData.password = hash
          User.create(UserData)
            .then(User => {
              res.json({ status: User.email + 'Welcome!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            });
        });
      } else {
        res.json({ error: 'Account already created' });
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    });
});

Users.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(User => {
      if (User) {
        if (bcrypt.compareSync(req.body.password, User.password)) {
          let token = jwt.sign(User.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          });
          res.send(token);
        }
      } else {
        res.status(400).json({ error: 'Account does not exist' });
      }
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
});

Users.get('/profile', (req, res) => {
  let decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);

  User.findOne({
    where: {
      id: decoded.id
    },
  })
    .then(User => {
      if (User) {
        res.json(User)
      } else {
        res.send('User does not exist');
      };
    })
    .catch(err => {
      res.send('error: ' + err);
    });
});

module.exports = Users;