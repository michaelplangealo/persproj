import React from "react";
import Hamburger from "../Hamburger/Hamburger";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    
    <nav className="navbar">
      <Hamburger />
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
    </nav>
  );
}
export default Nav;
