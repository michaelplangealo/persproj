import React, { Component } from "react";
import { connect } from "react-redux";
import { getCart, deleteFromCart, getCartTotal } from "../../ducks/cartReducer";
import "./Cart.css";
import Checkout from "../../Checkout";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // finalTotal: 0
    };
  }
  componentDidMount(id) {
    this.props.getCart(this.props.match.params.id);
    this.props.getCartTotal();
  }

  handleDelete(id) {
    this.props.deleteFromCart(id).then(res => {
      console.log(res);
      this.props.getCart(this.props.match.params.id);
    });
  }

  render() {
    // console.log(this.props.total, this.state.finalTotal);
    const { cart, total } = this.props;
    let tax = total * 0.08125;
    // tax = tax.toFixed(2);
    let finalTotal = total + tax;
    finalTotal = finalTotal.toFixed(2);
    const activeCart = cart.map((e, i) => (
      <div key={e.id} className="cart-items">
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
        <section className="cart-page">
          {activeCart[0] ? (
            activeCart
          ) : (
            <div>There is nothing in your cart</div>
          )}
        </section>
        <div className="total-box">Total: ${total}</div>
        <div className="tax-box">Tax:${tax.toFixed(2)}</div>
        <div className="final-total">Final total:${finalTotal}</div>
        <p>
          <Checkout
            name={"The Road to learn React"}
            description={"Only the Book"}
            amount={finalTotal}
          />
        </p>
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
