var express = require('express');
var router = express.Router();

/* GET home page. */
var users = [];
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/:name', function(req, res, next) {
    users.push({ username: req.params.name });
    res.json(users);
});

// router.post('/:name', function(req, res, next) {
//     users.push({ username: req.body });
//     res.json(users);
// });

router.put('/:name', function(req, res, next) {
    users.push({ username: req.body });
    res.json(users);
});

router.delete('/:name', function(req, res, next) {
    users.pop({ username: req.body });
    res.json(users);
});



/* post function - requesting with userid and password*/
router.post('/endpoint', function(req, res) {
    var userlist = ["amitcprabhu", "amitcprabhu1", "amittest", "test", "test123"]

    var result = "fail";
    userlist.map(function(val, index, arr) {
        if (val === req.body.user) {
            console.log('body: user ' + req.body.user + ' is sucessfully loggedin');
            result = "sucess";
            return;
        }
    });

    console.log('body: user ' + req.body.user);
    console.log('body: password ' + req.body.pwd);
    res.send(result);
});

module.exports = router;
