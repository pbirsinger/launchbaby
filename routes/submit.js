var webpage = require('../models/webpage.js');
var comments = require('../models/comment.js');
var users = require('../models/user.js');
var mongoose = require('mongoose');

exports.post = function(req, res){
  var urll = /^\/url\/(.*)/.exec(req.url)[1];
  var Comment = mongoose.model('Comment');
  var comment = new Comment();
  comment.body = "this is a comment";
  comment.user = "user1";
  comment.page = "www.google.com";
  comment.save(function () {
    res.send({status: 'success'});
  });
};
