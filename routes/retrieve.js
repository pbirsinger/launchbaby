var mongoose = require('mongoose');
var comments = require('../models/comment.js');
var Comment = mongoose.model('Comment');

exports.fetch = function(req, res){
  // TODO key on only base of url
  // & instead pass in as parameter in url instead of just appended
  var url = /^\/url\/(.*)/.exec(req.url)[1];
  Comment.find({page: url}, function (err, comments) {
      if (err) res.send({status: 'failure'});
      else res.send({status: 'success', data: comments});
  })
};
