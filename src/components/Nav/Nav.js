import React from "react";
import Hamburger from "../Hamburger/Hamburger";
import { Link } from "react-router-dom";
import "./Nav.css";
import Login from "../Login/Login";
import { connect } from "react-redux";

const Nav = props => (
  <nav className="navbar">
    <Hamburger />
    <Login />
    <Link to="/">
      <div className="navtext">M'O'W</div>
    </Link>
    <Link to="/products">
      <div className="navtext">Products</div>
    </Link>
    <Link to="/about">
      <div className="navtext">About</div>
    </Link>
    <Link to="/contact">
      <div className="navtext">Contact</div>
    </Link>
    <Link to="/cart">
      <div className="navtext">Cart{props.cart.length || 0}</div>
    </Link>
  </nav>
);

function mapStateToProps(state) {
  const { cartReducer } = state;
  return {
    ...cartReducer
  };
}
export default connect(mapStateToProps)(Nav);
// export default Nav;
