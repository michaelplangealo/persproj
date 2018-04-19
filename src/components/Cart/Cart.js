import React, { Component } from "react";
import { connect } from "react-redux";
import { getCart } from "../../ducks/cartReducer";
import "./Cart.css";

class Cart extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(id) {
    this.props.getCart(this.props.match.params.id);
  }

  render() {
    const { cart } = this.props;
    const activeCart = cart.map((e, i) => (
      <div key={e.id}>
        <img src={e.firstimg} />
        <p>{e.name}</p>
        <p>{e.price}</p>
      </div>
    ));
    return <section>{activeCart}</section>;
  }
}

function mapStateToProps(state) {
  const { cartReducer } = state;
  return {
    ...cartReducer
  };
}

export default connect(mapStateToProps, { getCart })(Cart);
