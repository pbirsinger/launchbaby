var webpage = require('../models/webpage.js');
var comments = require('../models/comment.js');
var users = require('../models/user.js');
var mongoose = require('mongoose');

exports.fetch = function(req, res){
  var urll = /^\/url\/(.*)/.exec(req.url)[1];
  var returnInfo = {url: urll, comments: []};
  res.send({status: 'success',
            data: returnInfo });
};
