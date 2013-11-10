var mongoose = require('mongoose');
var comments = require('../models/comment.js');
var users = require('../models/user.js');
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');

exports.post = function(req, res){
  User.find({email: req.body['email']}, function(err, user){
    if (err) {
      res.send({status: 'Error looking up user: ' + err});
      return;
    } else if (user.length == 0) {
      res.send({status: 'No user found with email ' + req.body['email']});
      return;
    }
    var comment = new Comment({
      body: req.body['body'],
      user: user[0]._id,
      url: /^\/url\/(.*)/.exec(req.url)[1],
      replyTo: req.body['replyTo']
    });
    comment.save(function (err, c) {
      if (err) res.send({status: 'Failure saving comment: ' + err});
      else res.send({status: 'success: ' + c});
    });
  });
}