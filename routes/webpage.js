var mongoose = require('mongoose');
var webpage = require('../models/webpage.js');
var Webpage = mongoose.model('Webpage');

exports.index = function(req, res){
  Webpage.find({}, function (err, pages) {
      if (err) res.send({status: 'failure'});
      else res.send({status: 'success', data: pages});
  });
};