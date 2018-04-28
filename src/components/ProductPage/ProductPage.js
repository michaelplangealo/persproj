import React, { Component } from "react";
import { connect } from "react-redux";
import { getOneProduct } from "../../ducks/productsReducer";
import { addToCart, updateCart } from "../../ducks/cartReducer";
import "./ProductPage.css";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
    this.addToCart = this.addToCart.bind(this);
  }
  componentDidMount(id) {
    this.props.getOneProduct(this.props.match.params.id);
  }
  addToCart(id, quantity) {
    this.props.addToCart(id, quantity);
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
          <img src={e.firstimg} className="product-page-image" />
          <img src={e.secondimg} className="product-page-image" />
          <img src={e.thirdimg} className="product-page-image" />
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
              Gimme Dat
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
  const { productsReducer } = state;
  return {
    ...productsReducer
  };
}

export default connect(mapStateToProps, {
  getOneProduct,
  addToCart,
  updateCart
})(ProductPage);
