var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var file_buf = fs.readFileSync('index.html');
var file_text = file_buf.toString();

app.get('/', function(request, response) {
  response.send(file_text);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
