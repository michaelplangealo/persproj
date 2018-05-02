import React, { Component } from "react";
import { connect } from "react-redux";
import { getOneProduct } from "../../ducks/productsReducer";
import { addToCart, updateCart, getCart } from "../../ducks/cartReducer";
import "./ProductPage.css";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      loading: false
    };
    this.addToCart = this.addToCart.bind(this);
  }
  componentDidMount(id) {
    this.setState({ loading: !this.state.loading });
    this.props.getCart();
    this.props
      .getOneProduct(this.props.match.params.id)
      .then(() => this.setState({ loading: !this.state.loading }));
  }
  addToCart(id, quantity) {
    let index = this.props.cart.findIndex(e => e.product_id == id);
    if (index === -1) {
      this.props.addToCart(id, quantity).then(() => this.props.getCart());
    } else {
      this.props.updateCart(id, quantity).then(() => this.props.getCart());
    }
    // console.log("Hit");
  }
  toIncrement() {
    this.setState({ quantity: ++this.state.quantity });
    // console.log(this.state.quantity);
  }
  toDecrement() {
    this.setState({ quantity: --this.state.quantity });
    // console.log(this.state.quantity);
  }

  render() {
    const { quantity } = this.state;
    const { currentProduct } = this.props;
    const { addToCart } = this.props;
    const selectedProduct = currentProduct.map((e, i) => (
      <div key={e.id} className="product">
        <div className="products-img-container">
          {this.state.loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              <img src={e.firstimg} className="product-page-image" />
              <img src={e.secondimg} className="product-page-image" />
              <img src={e.thirdimg} className="product-page-image" />
            </div>
          )}
        </div>
        <div className="product-description">
          <h1>{e.name}</h1>
          <h2>{e.price}</h2>
          <h3>{e.description}</h3>
          <div>
            <button
              onClick={() => this.toDecrement()}
              disabled={quantity < 1 ? true : false}
            >
              -
            </button>
            <h4>{quantity}</h4>
            <button onClick={() => this.toIncrement()}>+</button>
            <button onClick={() => this.addToCart(e.id, quantity)}>
              Gimme Dat Shit
            </button>
          </div>
        </div>
      </div>
    ));
    return (
      <section>
        <div>{selectedProduct}</div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const { productsReducer, cartReducer } = state;
  return {
    ...productsReducer,
    ...cartReducer
  };
}

export default connect(mapStateToProps, {
  getOneProduct,
  addToCart,
  updateCart,
  getCart
})(ProductPage);
