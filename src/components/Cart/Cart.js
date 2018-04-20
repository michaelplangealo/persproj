import React, { Component } from "react";
import { connect } from "react-redux";
import { getCart, deleteFromCart } from "../../ducks/cartReducer";
import "./Cart.css";

class Cart extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(id) {
    this.props.getCart(this.props.match.params.id);
  }
  handleDelete(id) {
    this.props
      .deleteFromCart(id)
      .then(() => this.props.getCart(this.props.match.params.id));
  }

  render() {
    const { cart } = this.props;
    const activeCart = cart.map((e, i) => (
      <div key={e.id} className="cart-items">
        <img src={e.firstimg} className="cart-image" />
        <div className="deets">
          <p className="cart-item-desc">{e.name}</p>
          <p className="cart-item-desc">{e.price}</p>
          <button onClick={() => this.handleDelete(e.id)}>
            Remove from cart.
          </button>
        </div>
      </div>
    ));
    return (
      <section className="cart-page">
        {activeCart[0] ? activeCart : <div>There is nothing in your cart</div>}
      </section>
    );
  }
}

function mapStateToProps(state) {
  const { cartReducer } = state;
  return {
    ...cartReducer
  };
}

export default connect(mapStateToProps, { getCart, deleteFromCart })(Cart);
