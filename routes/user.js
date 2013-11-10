var mongoose = require('mongoose');
var users = require('../models/user.js');
var User = mongoose.model('User');

exports.create = function(req, res){
    var user = new User({
      name: req.body['name'],
      email: req.body['email'],
      token: req.body['token']
    });
    user.save(function (err, c) {
      if (err) res.send({status: 'Failure saving user: ' + err});
      else res.send({status: 'success: ' + c});
    });
};
