var mongoose = require('mongoose');
var comments = require('../models/comment.js');
var Comment = mongoose.model('Comment');
var users = require('../models/user.js');
var User = mongoose.model('User');
var helpers = require('utils');

// XXX ideally only allow users to vote once on comment
// will require keeping track of who makes what votes ..
exports.vote = function(req, res){
    var id = req.body['id'];
    var fail = function(){
        res.send({status: 'Failure to vote on comment with ID ' + id});
    }
    Comment.findOne({_id: id}, function(err, comment){
      if (err || comments.length == 0) fail();
      else {
        var direction = req.body['direction'];
        if (direction == "up") comment.netVotes += 1
        else if (direction == "down") comment.netVotes -= 1
        comment.save(function (err, c) {
          if (err || direction == undefined) fail();
          else res.send({status: 'Successfully ' + direction +'-voted on comment with ID ' + id});
        });
      };
    });
};

exports.fetch = function(req, res){
  // pass in as parameter in url instead of just appending?
  var pageUrl = /^\/url\/(.*)/.exec(req.url)[1];
  var sanUrl = helpers.sanitizeUrl(pageUrl);
  Comment.find({url: sanUrl}, function (err, comments) {
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
    var sanUrl = helpers.sanitizeUrl(siteUrl);
    var pgNum = helpers.parsePageNum(siteUrl)
    var comment = new Comment({
      body: req.body['body'],
      user: user[0]._id,
      url: sanUrl,
      replyTo: req.body['replyTo'],
      paraNumber: req.body['paraNum'],
      pageNum: pgNum
    });
    comment.save(function (err, c) {
      if (err) res.send({status: 'Failure saving comment: ' + err});
      else res.send({status: 'success: ' + c});
    });
  });
}
