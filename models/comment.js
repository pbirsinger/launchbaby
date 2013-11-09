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

module.exports = mongoose.model('Comment', CommentSchema)
