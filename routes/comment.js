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
      if (err || !comment) fail();
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

exports.delete = function(req, res){
  Comment.remove({ _id: req.params.id}, function(err) {
    if (err) res.send({status: 'Failure deleting comment with id ' + req.params.id +'.'});
    else res.send({status: 'Success deleting comment with id ' + req.params.id + '.', data: comments});
  });
};

exports.create = function(req, res){
  // should also check to see if website url is supported
  var userEmail = req.body['email'];
  User.findOne({email: userEmail}, function(err, user){
    if (err || !user) {
      res.send({status: 'Failure adding comment; unable to find user with email ' + userEmail});
      return;
    }
    var siteUrl = /^\/url\/(.*)/.exec(req.url)[1]
    var sanUrl = helpers.sanitizeUrl(siteUrl);
    var pgNum = helpers.parsePageNum(siteUrl)
    var comment = new Comment({
      body: req.body['body'],
      user: user._id,
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
