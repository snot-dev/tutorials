var FluxCartActions = require('../actios/FluxCartActions');

module.exports = {
    getProductData: function() {
        var data = JSON.parse(localStorage.getItem('product'));
        FluxCartActions.receiveProduct(data);
    }
};
