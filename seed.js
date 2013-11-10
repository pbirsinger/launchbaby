var MONGO_PORT = 27017;
var mongoose = require('mongoose').
   connect("mongodb://localhost:" + MONGO_PORT + "/test"),
   db = mongoose.connection;
db
  .on('error', console.error.bind(console, 'DB connection error.'))
  .once('open', console.log.bind(console, 'DB Connection established.'));


var saveItems = function(items, group){
  for (var i = 0; i < items.length; i++) {
    items[i].save(function (err, item){
      if (err) console.log({status: 'Failure saving group ' + group + ' with error: ' + err});
      else console.log("saved item");
    });
  };
};

// seed users
require('./models/user');
var User = mongoose.model('User');
var users = [
  new User({
    name: "Pig",
    email: "pen@gmail.com"
  }),
  new User({
    name: "Hu-man",
    email: "doublemushroom@gmail.com"
  }),
];
saveItems(users, "Users");

// seed webpages
require('./models/webpage');
var Webpage = mongoose.model('Webpage');

var webpages = [
  new Webpage({
    url: "nytimes.com",
    selector: "p[itemprop='articleBody']",
    pgQueryParam: "pagewanted"
  }),
    new Webpage({
    url: "dailycal.org",
    selector: "div.entry-content p"
  }),
    new Webpage({
    url: "sfgate.com",
    selector: "div.page p"
  })
];
saveItems(webpages, "Webpages");

// seed comments
require('./models/comment');
var Comment = mongoose.model('Comment')
var comments = [
  new Comment({
    body: "suck a fat one rob",
    userEmail: users[0].email,
    url:  "http://www.nytimes.com/2013/11/10/world/iran-nuclear-talks.html",
    paraNum: 2,
    pageNum: 1,
    netVotes: 8
  }),
  new Comment({
    body: "no don't do that",
    userEmail: users[0].email,
    url:  "http://www.nytimes.com/2013/11/10/world/iran-nuclear-talks.html",
    paraNum: 2,
    pageNum: 1,
    netVotes: 10
  }),
  new Comment({
    body: "I'm awesome",
    userEmail: users[0].email,
    url:  "http://www.nytimes.com/2013/11/10/world/iran-nuclear-talks.html",
    paraNum: 2,
    pageNum: 1,
    netVotes: 2
  }),
  new Comment({
    body: "*sharp insight*",
    userEmail: users[1].email,
    url:  "http://www.nytimes.com/2013/11/10/world/iran-nuclear-talks.html",
    paraNum: 3,
    pageNum: 2,
    netVotes: 6
  }),

  new Comment({
    body: "suck a fat one rob",
    userEmail: users[0].email,
    url:  "http://www.sfgate.com/news/article/Navy-christens-next-generation-of-aircraft-carrier-4970718.php",
    paraNum: 2,
    pageNum: 1,
    netVotes: 8
  }),
  new Comment({
    body: "no don't do that",
    userEmail: users[0].email,
    url:  "http://www.sfgate.com/news/article/Navy-christens-next-generation-of-aircraft-carrier-4970718.php",
    paraNum: 2,
    pageNum: 1,
    netVotes: 10
  }),
  new Comment({
    body: "I'm awesome",
    userEmail: users[0].email,
    url:  "http://www.sfgate.com/news/article/Navy-christens-next-generation-of-aircraft-carrier-4970718.php",
    paraNum: 2,
    pageNum: 1,
    netVotes: 2
  }),
  new Comment({
    body: "*sharp insight*",
    userEmail: users[1].email,
    url:  "http://www.sfgate.com/news/article/Navy-christens-next-generation-of-aircraft-carrier-4970718.php",
    paraNum: 3,
    pageNum: 2,
    netVotes: 6
  }),
]
saveItems(comments, "Comments");


console.log("done")
mongoose.connection.close();

