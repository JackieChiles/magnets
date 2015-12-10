var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');
var port = 5000;
var passport = require('passport');
var dataAccess = require('./server/data-access');
var sockets = require('./server/sockets');

dataAccess.initialize();
sockets.initialize(server, dataAccess);

app.set('view engine', 'ejs');
app.set('views', 'dist');
app.use(express.static('dist'));
app.engine('html', require('ejs').renderFile);
app.get('/', function (req, res) {
    res.render('home.html');
});

server.listen(port, function () {
    console.log('Started on port %d...', port);
});
