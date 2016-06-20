var express = require('express');
var app = express();
var parser = require('body-parser');
var React = require('react/addons');
var GroceryItem = require('./models/GroceryItem.js');

require('babel-register');
require('./database.js');


app.get('/', function(req, res) {
    //res.render('./../app/index.ejs', {});
    var application = React.createFactory(require('./../app/components/GroceryItemList.jsx'));

    GroceryItem.find(function(err, doc) {
        var generated = React.renderToString(application({
            items: doc
        }));

        res.render('./../app/index.ejs', {reactOutput: generated});
    });
});

app.use(express.static(__dirname + "/../.tmp"));

app.listen(7777);

app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

require('./routes/items.js')(app);
