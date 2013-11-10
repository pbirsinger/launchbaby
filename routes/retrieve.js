var mongoose = require('mongoose');
var comments = require('../models/comment.js');
var Comment = mongoose.model('Comment');

exports.fetch = function(req, res){
  var url = /^\/url\/(.*)/.exec(req.url)[1];
  Comment.find({page: url}, function (err, comments) {
	  if (err) {res.send({status: 'failure'});}
      res.send({status: 'success', data: comments});
  })
};
