import React, { Component } from "react";
import { connect } from "react-redux";
import { getOneProduct } from "../../ducks/productsReducer";
import { addToCart, updateCart, getCart } from "../../ducks/cartReducer";
import "./ProductPage.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";

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
    let index = this.props.cart.findIndex(e => e.product_id === id);
    if (index === -1) {
      this.props
        .addToCart(id, quantity)
        .then(() => this.props.getCart())
        .then(() =>
          Swal({
            type: "success",
            title: "that's a bet.",
            text: "it's gonna look great on you."
          })
        );
    } else {
      this.props.updateCart(id, quantity).then(() => this.props.getCart());
    }
    // console.log("Hit");
  }
  toIncrement() {
    let { quantity } = this.state;
    ++quantity;
    this.setState({ quantity: quantity });
    // console.log(this.state.quantity);
  }
  toDecrement() {
    let { quantity } = this.state;
    --quantity;
    this.setState({ quantity: quantity });
    // console.log(this.state.quantity);
  }

  render() {
    // this is all legitimatelly for mapping through your products. all of the styling here could have been done in the actual return. this is all done in the return of the map statement. go over this, learn to make it a bit less messy.
    const { quantity } = this.state;
    const { currentProduct } = this.props;
    const selectedProduct = currentProduct.map((e, i) => {
      return (
        <div key={e.id} className="product">
          {this.state.loading ? (
            <p />
          ) : (
            <div className="parentcontainer">
              <div className="products-img-container">
                <img
                  src={e.firstimg}
                  className="product-page-image"
                  alt="first"
                />
                <img
                  src={e.secondimg}
                  className="product-page-image"
                  alt="second"
                />
                <img
                  src={e.thirdimg}
                  className="product-page-image"
                  alt="third"
                />
              </div>
              <div className="product-description">
                <div>{e.name}</div>
                <div>{e.price}</div>
                <div>{e.description}</div>
                <div className="quantity-controller">
                  <button
                    className="minusminus"
                    onClick={() => this.toDecrement()}
                    disabled={quantity < 1 ? true : false}
                  >
                    -
                  </button>
                  <h4>{quantity}</h4>
                  <button
                    className="plusplus"
                    onClick={() => this.toIncrement()}
                  >
                    +
                  </button>
                </div>
                <RaisedButton
                  label="i want you and i need you."
                  onClick={() => this.addToCart(e.id, quantity)}
                />
              </div>
            </div>
          )}
        </div>
      );
    });
    // this is the end of that giant map statement. once again, make it cleaner.
    return (
      <div>
        <div className="product-page-title-bar">
          <span className="back">
            <Link to="/products">
              <p>&#8592;</p>
            </Link>
          </span>
          /
          <span className="lochome-products">
            <Link to="/"> h o m e .</Link>
          </span>
        </div>
        <hr className="title-line" />
        <div>{selectedProduct}</div>
      </div>
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
