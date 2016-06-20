var mongoose = require('mongoose');
GroceryItem = require('./models/GroceryItem');

mongoose.connect('mongodb://localhost/grocery', function(){
    console.log("connected!");

    mongoose.connection.db.dropDatabase();

    var items = [
        {
            name: "Ice Cream"
        },
        {
            name: "Waffles"
        },
        {
            name: "candy",
            purchased: true
        },
        {
            name: "Snarks"
        }
    ];

    items.forEach(function(item) {
        new GroceryItem(item).save();
    });
});
