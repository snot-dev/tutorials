var React = require('react');
var FluxCartActions = require('../actions/FluxCartActions');

var FluxProduct = React.creacteClass( {
  addToCart: function(event) {
    var sku = this.props.selected.sku;
    var update = {
      name: this.props.product.name,
      type: this.props.product.type,
      price: this.props.product.price
    };

    FluxCartAction.addToCart(sku, update);
    FluxCartActions.updateCartVisible(true);
  },
  selectVariant: function(event) {
    FluxCartActions.selectProduct(event.targe.value);
  },
  render: function() {
    var ats = (this.props.selected.sku in this.props.cartItems) ?
      this.props.selected.inventory - this.props.cartItems[this.props.selected.sku].quantity:
      this.props.selected.iventory;

      return (
        <div className="flux-product">
          <img src={'img/' + this.props.product.image}/>
          <div className="flux-product-detail">
            <h1 className="name">{this.props.product.name} </h1>
            <div className="description">{this.props.product.description}</div>
            <div className="price">Price: ${this.props.product.price}</div>
            <select onChange={this.selectVariant}>
              {this.props.product.variants.map(function(variant, index) {
                return (
                    <option key={index} value={index}>{variant.type}</option>
                )
              })}
            </select>
            <button type="button" onClick={this.addToCart} disabled={ats > 0 ? '' : 'disabled'}>
              {ats > 0 ? 'Add to cart' : 'Sold Out'}
            </button>
          </div>
        </div>
      );
  }
});

module.exports = FluxProduct;
