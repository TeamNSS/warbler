var express = require('express');
var database = require('../database');
var router = express.Router();

/* GET home page. */
/*Currently, routes immediately to login screen, will change in the future to see home page if already logged in
with use of cookies*/

//login routes
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Warbler' });
});

router.post('/', function(req, res, next) {
  var userLogin = req.body;
  var name1 = userLogin.loginUserInput;
  var password1 = userLogin.loginPassInput;
  var userDatabase = database.get("users", name1);
  //if an object for this user's object is found in our database and password matches,
  //render the main page (index.js).  If this user's object is NOT found and/or enters an
  //incorrect password, then re-render the login.js page with an error that says their
  //username or password is incorrect.
  if (userDatabase !== undefined && password1 === userDatabase.password){
    res.render('index', { title: 'Warbler', username: name1});
  } else {
    res.render('login', { title: 'Warbler', errMsg: 'Incorrect username or password.' });
  }
});

module.exports = router;
