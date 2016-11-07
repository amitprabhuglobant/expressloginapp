var express = require('express');
var users = require('../data/users.json');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json(users);
});

module.exports = router;
