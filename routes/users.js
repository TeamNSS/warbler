var express = require('express');
var database = require('../database');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Warble' });
});

module.exports = router;
