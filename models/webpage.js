//Module dependencies

var mongoose = require('mongoose')
    , Schema = mongoose.Schema

//Getters
//Setters

//Schema
var WebpageSchema = new Schema({
  url:          {type : String, trim : true},
  createdAt:    {type : Date, default: Date.now}
});

//Validation
//Methods
//Statics

mongoose.model('Webpage', WebpageSchema);
