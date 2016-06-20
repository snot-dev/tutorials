var React = require('react/addons');
var groceryItemStore = require('./stores/GroceryItemStore.jsx');
var GroceryItemList = require('./components/GroceryItemList.jsx');
// console.log("Hello from JSX!");

var initial = groceryItemStore.getItems();

function render() {
    React.render( <GroceryItemList items={initial} />, app);
}

groceryItemStore.onChange(function(items) {
    initial = items;
    render();
});

render();
