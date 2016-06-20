var mongoose = require('mongoose');

var GroceryItemSchema = new mongoose.Schema({
    name: String,
    purchased: Boolean,
    id: String
});

var GroceryItem = mongoose.model('GroceryItem', GroceryItemSchema, "groceryItems");

module.exports = GroceryItem;
