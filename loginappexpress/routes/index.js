var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/:name', function(req, res, next) {
//   res.json({ parameter_name: req.params.name });
//   //res.render('index', { title: 'Express' });
// });

router.post('/endpoint', function(req, res){
	var obj = {};
  // if(req.body.user == 'test')
  // {
  //   res.JSON({msg:"sucess"});
  // }
  // else{
  //   res.JSON({msg:"fail"});
  // }
	console.log('body: ' + JSON.stringify(req.body));
	res.send(req.body);
});


module.exports = router;
