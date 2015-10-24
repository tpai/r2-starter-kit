var express = require('express');
var app = express();
var http = require('http').createServer(app);
var port = process.env.PORT || 8080;

app.use(express.static(__dirname));

http.listen(port);