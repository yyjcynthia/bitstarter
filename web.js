
var express = require('express');
var fs = require ('fs');
var buf = require('buffer');
var buffer = new Buffer(30);
var outfile = "./index.html";
var outpu = fs.readFileSync(outfile, "utf-8");

 buffer.write(outpu,"utf-8");

var outstring = buffer.toString('utf-8');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('outpu');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

