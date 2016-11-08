var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.post('/', function(req, res) {
//   var data = req.body.newUser;

//   userManage('new',data)
// });

var userManage = function () {
  if (arguments.length < 1) {
    return users
  }
  if (arguments[0] === 'new') {
    if (arguments[1]) {
      users.push(arguments[1]);
      return users;
    }
  }
  if (arguments[0] === 'update') {
    if (arguments[1]) {
      var userToUpdate = arguments[1]
      console.log('user to update: ', userToUpdate)
      users.forEach(function (user, index) {
        if (user.id == userToUpdate.id) {
          user.name = userToUpdate.name;
          console.log('user is now: ', user)
          users[index] = user;
          console.log(
            'Users is:', users
          )
        }
      })
      return users;
    }
  }
}


module.exports = router;
