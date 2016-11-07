var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json({id:1,name : "node js"});
});

module.exports = router;
