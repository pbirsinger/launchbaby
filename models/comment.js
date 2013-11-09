//Module dependencies

var mongoose = require('mongoose')
    , Schema = mongoose.Schema

//Getters
//Setters

//Schema
var CommentSchema = new Schema({
  body:         {type : String, default : '', trim : true},
  user:         {type : Schema.ObjectId, ref: 'User'},
  createdAt:    {type : Date, default: Date.now}

//Validation
//Methods
//Statics

mongoose.model('Comment', CommentSchema)
