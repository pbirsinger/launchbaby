var mongoose    = require('mongoose'),
    Comment     = mongoose.model('Comment')

exports.post = function(req, res){
  var comment = new Comment(req.body)
  //res.send("posting");
  res.send({status: 'success'})
};
