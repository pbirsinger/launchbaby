var mongoose    = require('mongoose')
    , Comment   = require('/models/comment.js')

exports.post = function(req, res){
  var comment = new Comment(req.body)
  //res.send("posting");
  res.send({status: 'success'})
};
