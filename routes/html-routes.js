// Requiring path to so we can use relative routes to our HTML files
let path = require("path");
let db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
let isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the users page
    if (req.user) {
      res.redirect("/users");
    }
    res.render("login");
  });

  app.get("/signup", function (req, res) {
    // If the user already has an account send them to the users page
    if (req.user) {
      res.redirect("/users");
    }
    res.render("signup");
  });


  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/users", isAuthenticated, function (req, res) {
    res.render("users");
  });


  app.get("/profile", isAuthenticated, (req, res) => {
        let user = {
          firstName: req.user.firstName,
          lastName: req.user.lastName,
        }
    res.render("profile", user);
  });

  app.get("/edit-profile", isAuthenticated, (req, res) => {
      console.log(req.user);
      let user = {
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        gender: req.user.gender,
        pets: req.user.pets,
        children: req.user.children,
      }
      res.render("editProfile", user);
    })
};