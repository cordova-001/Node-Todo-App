var express = require('express');
var todoController = require('./controllers/todoController');

// var connect = require('connect');
// var serveStatic = require('serve-static');
// var app = connect();

var app = express();

//setting up the template engine
app.set('view engine', 'ejs');

//configuring the static files to be used
app.use(express.static('./public'));

//listen to a port
app.listen(3000);
console.log('You are listenning to port 3000');