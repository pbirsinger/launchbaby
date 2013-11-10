//Module dependencies

var mongoose    = require('mongoose')
    , Schema    = mongoose.Schema

//Getters
//Setters

//Schema
var CommentSchema = new Schema({
  userEmail:    {type : String, trim: true},
  url:          {type : String, trim : true},
  paraNum:      {type : Number, trim : true, default: -1},
  pageNum:      {type : Number, trim : true, default: 1},
  body:         {type : String, default : '', trim : true},
  netVotes:     {type: Number, default: 0},
  replyTo:      {type : Schema.ObjectId, ref: 'Comment'},
  createdAt:    {type : Date, default: Date.now}
});

//Validation
//Methods
//Statics

module.exports = mongoose.model('Comment', CommentSchema)
