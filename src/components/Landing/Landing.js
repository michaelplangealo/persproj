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
          <div className="landing-home">
            <p className="hiddentext welcome">welcome </p>
            <Link className="title-link" to="/">
              .man of war.
            </Link>
            <p className="hiddentext welcome">home.</p>
          </div>
          <hr className="title-line" />
          <p className="hiddentext">
            <p className="firstpart">it's</p>
            <p className="secondpart"> a strange </p>
            <p className="thirdpart"> game . </p>
            <p className="fourthpart"> the only </p>
            <p className="fifthpart"> winning move </p>
            <p className="lastpart"> is not to play . </p>
          </p>
        </div>
        <div className="videobox">
          <video preload="auto" autoPlay loop id="squiddy">
            <source src={squiddy} type="video/mp4" />
          </video>
        </div>
        <div className="landing-footer">
          <hr className="footer-line" />
          <div className="footer-contents">
            <p>
              COUNTRY: UNITED STATES . NEWSLETTER . SIGNUP . CUSTOMER CARE .
              LOCATIONS . EDITORIAL . ARCHIVE . CAREERS © 2018 manofwar.xyz
            </p>
          </div>
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
