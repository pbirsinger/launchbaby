var mongoose = require('mongoose');
var users = require('../models/user.js');
var User = mongoose.model('User');

var u = new User({
	name: "pistola",
	email: "hi@gmail.com"
});

u.save(function (err, c) {
  if (err) res.send({status: 'Failure saving user: ' + err});
  else console.log("saved user");
});