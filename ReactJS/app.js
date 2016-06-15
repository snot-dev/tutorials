var express = require('express');
var app = express();
var pahty = require('path');
var index = require('./route/index');

app.use(express.static(pahty.join(__dirname, 'public')));
app.set('views', pahty.join(__dirname, 'public/views'));
app.set('view engine', 'hbs')

app.use('/', index);

app.listen('3000', function() {
    console.log("Listening ...");
});
