import React, { Component } from "react";
import { connect } from "react-redux";
import { getCart, deleteFromCart, getCartTotal } from "../../ducks/cartReducer";
import "./Cart.css";
import { Link } from "react-router-dom";
import Checkout from "../../Checkout";
import RaisedButton from "material-ui/RaisedButton";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tax: 0,
      finalTotal: 0
    };
    this.handleTax = this.handleTax.bind(this);
  }
  componentDidMount(id) {
    this.props.getCart(this.props.match.params.id);
    this.props
      .getCartTotal()
      .then(() => this.handleTax(this.props.total))
      .then(() => this.handleFinalTotal(this.state.tax));
    // use a .then
  }

  handleDelete(id) {
    // console.log(id);
    this.props.deleteFromCart(id).then(res => {
      console.log(res);
      this.props.getCart(this.props.match.params.id);
    });
  }
  handleTax(total) {
    this.setState({ tax: this.props.total * 0.08125 });
  }
  handleFinalTotal(total) {
    this.setState({ finalTotal: this.props.total + this.state.tax });
  }

  render() {
    const { cart, total } = this.props;
    // console.log(this.props.total, this.state.finalTotal);
    // console.log(this.props.cart);
    // let tax = total * 0.08125;
    // tax = tax.toFixed(2);
    // let finalTotal = total + tax;
    // finalTotal = finalTotal.toFixed(2);
    const activeCart = cart.map((e, i) => (
      <div key={i} className="cart-items">
        <div className="cart-items-container">
          <img
            src={e.firstimg}
            className="cart-image"
            alt="whats-in-the-caaarrrtt"
          />
          <div className="deets">
            <p className="cart-item-desc">{e.name}</p>
            <p className="cart-item-desc">{e.price}</p>
            <p>{e.quantity}</p>
            <button onClick={() => this.handleDelete(e.id)}>
              Remove from cart.
            </button>
          </div>
        </div>
      </div>
    ));
    return (
      <div>
        <div className="cart-page">
          <div className="cart-page-title-bar">
            <div>
              <span className="back">
                <Link to="/products">
                  <p>b a c k t o p r o d u c t s .</p>
                </Link>
              </span>
              /
              <span className="lochome-products">
                <Link to="/"> h o m e .</Link>
              </span>
            </div>
            <hr className="title-line" />
          </div>
          {activeCart[0] ? (
            <div className="checkout-cart-contents">{activeCart}</div>
          ) : (
            <div className="no-cart-contents">
              <div>your cart is empty.</div>
              <Link className="link-to-products" to="/products">
                <div>
                  <RaisedButton label="let's fix that." />
                </div>
              </Link>
            </div>
          )}
        </div>
        <hr className="and-thats-the-bottom-line" />
        <div className="checkout-box">
          <div className="total-box">total: ${total}</div>
          <div className="tax-box">tax: ${this.state.tax.toFixed(2)}</div>
          <div className="final-total">
            final total: ${Number(this.state.finalTotal.toFixed(2))}
          </div>
          <p>
            <Checkout
              name={"nice!"}
              description={"Who needs to pay rent when you have clothes"}
              amount={Number(this.state.finalTotal.toFixed(2))}
            />
          </p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { cartReducer } = state;
  return {
    ...cartReducer
  };
}

export default connect(
  mapStateToProps,
  {
    getCart,
    deleteFromCart,
    getCartTotal
  }
)(Cart);
