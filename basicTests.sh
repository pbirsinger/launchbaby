echo "\nFetching comments..................................."
curl localhost:1337/url/http://www.nytimes.com/2013/11/10/world/iran-nuclear-talks.html

echo "\nCreating a comment...................................."
curl -d '{"body": ["from rob"], "selector": ["hiiiii"],"email":["pen@gmail.com"], "replyTo":["527ed7388f5e7b28d5000001"]}' -H 'content-type:application/json' http://localhost:1337/url/32

echo "\nCreating a user....................................."
curl -d '{"name": ["rob"], "email": ["balickileaky"]}' -H 'content-type:application/json' http://localhost:1337/user

echo "\nFetching webpages list......................................"
curl localhost:1337/webpage