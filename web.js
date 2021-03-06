var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

var index = fs.readFileSync('index.html');
var string = index.toString();

app.get('/', function(request, response) {
  response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
