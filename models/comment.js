//Module dependencies

var mongoose = require('mongoose')
    , Schema = mongoose.Schema

//Getters
//Setters

//Schema
var CommentSchema = new Schema({
  user:         {type : Schema.ObjectId, ref: 'User'},
  url:          {type : String, trim : true},
  selector:     {type : String, default : '', trim : true},
  body:         {type : String, default : '', trim : true},
  netVotes:     {type: Number, default: 0},
  replyTo:      {type : Schema.ObjectId, ref: 'Comment'},
  createdAt:    {type : Date, default: Date.now}
});

//Validation
//Methods
//Statics

mongoose.model('Comment', CommentSchema);
