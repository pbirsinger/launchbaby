echo "\nFetching comments..................................."
curl localhost:1337/url/http://www.nytimes.com/2013/11/10/world/iran-nuclear-talks.html

echo "\nCreating a comment...................................."
curl -d '{"body": ["from rob"], "paraNum": [2],"email":["pen@gmail.com"], "replyTo":["527ed7388f5e7b28d5000001"]}' -H 'content-type:application/json' http://localhost:1337/url/32

echo "\nCreating a user....................................."
curl -d '{"name": ["rob"], "email": ["balickileaky"]}' -H 'content-type:application/json' http://localhost:1337/user

echo "\nFetching webpages list......................................"
curl localhost:1337/webpage

echo "\nVoting on a comment.........................................."
curl -d '{"direction": ["up"], "id":["52801edc7d1a590000000009"]}' -H 'content-type:application/json' http://localhost:1337/vote
