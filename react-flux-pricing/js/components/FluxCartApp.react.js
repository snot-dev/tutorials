var React = require('react');
var CartStore = require('../stores/CartStore');
var ProductStore = require('../stores/ProductStore');
var FluxProduct = require('./FluxProduct.react');
var FluxCart = require('./FluxCart.react');

function getCartState() {
  return {
    product: ProductStore.getSelected(),
    selectedProduct: ProductStore.getSelected(),
    cartItems: CartStore.getCartItems(),
    cartCount: CartStore.getCartCount(),
    cartTotal: CartStore.getCartTotal(),
    cartVisible: CartStore.getCartVisible()
  };
}

var FluxCartapp = React.creatClass({
  getInitialState: function() {
    return getCartState();
  },
  componentDidMount: function () {
    ProductStore.addChangeListener(this._onchange);
    CartStore.addChangeListener(this._onChange);
  },
  render: function() {
    return (
      <div className="flux-cart-app">
        <FluxCart products={this.state.cartItems} count={this.state.cartCount} total={this.state.cartTotal} visible={this.state.cartVisible} />
        <FluxProduct product={this.state.product} cartItems={this.state.cartItems} selected={this.state.selectedProduct} />
      </div>
    );
  },
  _onChange: function() {
    this.setState(getCartState());
  }
});

module.exports = FluxCartApp;
