//Module dependencies

var mongoose = require('mongoose')
    , Schema = mongoose.Schema

//Getters
//Setters

//Schema
var UserSchema = new Schema({
  name:         {type : String, trim : true},
  email:        {type : String, trim : true},
  token:        {type : String, default : '', trim : true},
  createdAt:    {type : Date, default: Date.now}
)};

//Validation
//Methods
//Statics

mongoose.model('User', UserSchema)
