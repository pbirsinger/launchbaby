var MONGO_PORT = 27017;
var mongoose = require('mongoose').
   connect("mongodb://localhost:" + MONGO_PORT + "/test"),
   db = mongoose.connection;

var users = require('./models/user.js');
var User = mongoose.model('User');

var u = new User({
	name: "pistola",
	email: "hi@gmail.com"
});

//comment seed

//

u.save(function (err, c) {
  if (err) res.send({status: 'Failure saving user: ' + err});
  else console.log("saved user");
});
