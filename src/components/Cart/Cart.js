import React, { Component } from "react";
import { connect } from "react-redux";
import { getCart, deleteFromCart, getCartTotal } from "../../ducks/cartReducer";
import "./Cart.css";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0
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
    console.log(this.props.total, this.state.total);
    const { cart, total } = this.props;
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
        <div className="total-box">{total}</div>
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
