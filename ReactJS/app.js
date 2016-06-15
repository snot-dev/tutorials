var express = require('express');
var app = express();
var pahty = require('path');
var index = require('./route/index');


app.set('views', pahty.join(__dirname, 'public'));
app.set('view engine', 'hbs')
app.use(express.static(pahty.join(__dirname, 'public')));

app.use('/', index);

app.listen('3000');
