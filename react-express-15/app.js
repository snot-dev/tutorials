var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public/views'));

app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(3000, function() {
    console.log("listening...");
});
