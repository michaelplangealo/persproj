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
  }
  componentDidMount(id) {
    this.props.getCart(this.props.match.params.id);
    this.props.getCartTotal();
    // use a .then
  }

  handleDelete(id) {
    console.log(id);
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
    // console.log(this.props.total, this.state.finalTotal);
    console.log(this.props.cart);
    const { cart, total } = this.props;
    let tax = total * 0.08125;
    // tax = tax.toFixed(2);
    let finalTotal = total + tax;
    finalTotal = finalTotal.toFixed(2);
    const activeCart = cart.map((e, i) => (
      <div key={i} className="cart-items">
        <img src={e.firstimg} className="cart-image" />
        <div className="deets">
          <p className="cart-item-desc">{e.name}</p>
          <p className="cart-item-desc">{e.price}</p>
          <p>{e.quantity}</p>
          <button onClick={() => this.handleDelete(e.id)}>
            Remove from cart.
          </button>
        </div>
      </div>
    ));
    return (
      <div>
        <section className="no-cart">
          {activeCart[0] ? (
            activeCart
          ) : (
            <div>
              <div>your cart is empty.</div>
              <Link to="/products">
                <div>
                  <RaisedButton label="let's fix that." />
                </div>
              </Link>
            </div>
          )}
        </section>
        <div className="checkout-box">
          <div className="total-box">total: ${total}</div>
          <div className="tax-box">tax: ${tax.toFixed(2)}</div>
          <div className="final-total">final total: ${finalTotal}</div>
          <p>
            <Checkout
              name={"SWAAAAAGGGEEERRRRRR"}
              description={"Who needs to pay rent when you have clothes"}
              amount={finalTotal}
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

export default connect(mapStateToProps, {
  getCart,
  deleteFromCart,
  getCartTotal
})(Cart);
