webpage = require('../models/webpage.js');
mongoose = require('mongoose')

exports.fetch = function(req, res){
  url = /^\/url\/(.*)/.exec(req.url)[1];
  // look up comments for url
  var website = mongoose.model('Webpage');
  console.log(website);
  res.send({status: 'success',
            data: {web: url}})
};
