var express = require('express');
var database = require('../database');
var router = express.Router();

/* GET home page. */
/*Currently, routes immediately to login screen, will change in the future to see home page if already logged in
with use of cookies*/
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Warble' });
});

router.post('/', function(req, res, next) {
  var userLogin = req.body;
  var name = userLogin.loginUserInput;
  var userDatabase = database.get("users", name);
  console.log(userLogin);
  console.log(name);
  console.log(userDatabase);
  res.render('index', { title: 'Warble' });
});

module.exports = router;
