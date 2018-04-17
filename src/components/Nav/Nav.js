import React from "react";
import Hamburger from "../Hamburger/Hamburger";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar">
      {/* <Hamburger /> */}
      <Link to="/">
        <div>M'O'W</div>
      </Link>
      <Link to="/products">
        <div>Products</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/contact">
        <div>Contact</div>
      </Link>
    </nav>
  );
}
export default Nav;
