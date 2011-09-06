var express = require('express');
var fileify = require('fileify');
var browserify = require('browserify');
var bundle = browserify().use(fileify('files', __dirname + '/files'));

var app = express.createServer();
app.use(express.static(__dirname));
app.use(bundle);

app.listen(8080);
console.log('Listening on 8080');
