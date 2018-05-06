import React, { Component } from "react";
import { connect } from "react-redux";
import { getCart } from "../../ducks/cartReducer.js";
import squid from "./squiddy.jpg";
import squiddy from "./squiddyviddy.mp4";
import "./Landing.css";

class Landing extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getCart();
  }
  render() {
    return (
      <div className="videobox">
        <video preload="auto" autoPlay loop id="squiddy">
          <source src={squiddy} type="video/mp4" />
        </video>
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
  getCart
})(Landing);
