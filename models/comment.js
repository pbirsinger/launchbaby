//Module dependencies

var mongoose    = require('mongoose')
    , Schema    = mongoose.Schema

//Getters
//Setters

//Schema
var CommentSchema = new Schema({
  body:         {type : String, default : '', trim : true},
  user:         {type : Schema.ObjectId, ref: 'User'},
  selector:     {type : String, default : '', trim : true},
  page:         {type : String, trim : true},
  createdAt:    {type : Date, default: Date.now}
});

//Validation
//Methods
//Statics

<<<<<<< HEAD
module.exports = mongoose.model('Comment', CommentSchema)
=======
mongoose.model('Comment', CommentSchema);
>>>>>>> b32b61afbb024a7794aa13d45cd906e69cfb0415
