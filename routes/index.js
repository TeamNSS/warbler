var express = require('express');
var router = express.Router();

/* GET home page. */
/*Currently, routes immediately to login screen, will change in the future to see home page if already logged in
with use of cookies*/
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Warble' });
});

module.exports = router;
