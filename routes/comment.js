var mongoose = require('mongoose');
var comments = require('../models/comment.js');
var Comment = mongoose.model('Comment');
var users = require('../models/user.js');
var User = mongoose.model('User');

exports.fetch = function(req, res){
  // TODO key on only base of url
  // & instead pass in as parameter in url instead of just appended
  var pageUrl = /^\/url\/(.*)/.exec(req.url)[1];
  Comment.find({url: pageUrl}, function (err, comments) {
      if (err) res.send({status: 'failure'});
      else res.send({status: 'success', data: comments});
  })
};

exports.create = function(req, res){
  // should also check to see if website url is supported
  User.find({email: req.body['email']}, function(err, user){
    if (err) {
      res.send({status: 'Error looking up user: ' + err});
      return;
    } else if (user.length == 0) {
      res.send({status: 'No user found with email ' + req.body['email']});
      return;
    }
    var siteUrl = /^\/url\/(.*)/.exec(req.url)[1]
    var comment = new Comment({
      body: req.body['body'],
      user: user[0]._id,
      url: siteUrl,
      replyTo: req.body['replyTo'],
      paraNumber: req.body['paraNum'],
      // find out page number from looking in webpages tables
      pageNum: 1
    });
    comment.save(function (err, c) {
      if (err) res.send({status: 'Failure saving comment: ' + err});
      else res.send({status: 'success: ' + c});
    });
  });
}
