import React, { Component } from "react";
import "./BetterBtn.css";
import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class BetterBtn extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span />
          <span />
          <span />
          <ul id="menu">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Info</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
            <a href="https://erikterwan.com/" target="_blank">
              <li>Show me more</li>
            </a>
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps(state) {
  const { cartReducer } = state;
  return {
    ...cartReducer
  };
}
export default connect(mapStateToProps)(BetterBtn);
