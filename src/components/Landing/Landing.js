import React, { Component } from "react";
import { connect } from "react-redux";
import { getCart } from "../../ducks/cartReducer.js";
import squiddy from "./squiddyviddy.mp4";
import "./Landing.css";
import { Link } from "react-router-dom";

class Landing extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getCart();
  }
  render() {
    return (
      <div className="landing">
        <div className="landing-title-bar">
          <span className="landing-home">
            <Link to="/">.welcome home.</Link>
          </span>
          <hr className="title-line" />
        </div>
        <div className="videobox">
          <video preload="auto" autoPlay loop id="squiddy">
            <source src={squiddy} type="video/mp4" />
          </video>
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
  getCart
})(Landing);
