/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var retrieve = require('./routes/retrieve');
var submit = require('./routes/submit');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var MONGO_PORT = 27017;
var mongoose = require('mongoose').
   connect("mongodb://localhost:" + MONGO_PORT + "/test"),
   db = mongoose.connection;

db
  .on('error', console.error.bind(console, 'DB connection error.'))
  .once('open', console.log.bind(console, 'DB Connection established.'));

var app = express();

// all environments
app.set('port', process.env.PORT || 1337);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/url/*', retrieve.fetch);
app.post('/url/*', submit.post);
app.post('/user', user.create);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
