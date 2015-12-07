var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');
var port = 5000;
var passport = require('passport');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public', 'views'));
app.engine('html', require('ejs').renderFile);
app.get('/', function (req, res) {
    res.render('home.html');
});

server.listen(port, function () {
    console.log('Started on port %d...', port);
});