//var connect = require('connect');
//var serveStatic = require('serve-static');
//connect().use(serveStatic('www')).listen(8080, "0.0.0.0");

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('www')).listen(8080, "0.0.0.0");