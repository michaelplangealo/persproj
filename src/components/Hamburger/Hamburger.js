import React, { Component } from "react";
import "./Hamburger.css";
import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }
  showSetting(event) {
    event.preventDefault();
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }
  closeHamburger() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <Menu
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
      >
        <Link className="menu-link" to="/">
          <div onClick={() => this.closeHamburger()} className="menu-item1">
            m'o'w.
          </div>
        </Link>
        <Link className="menu-link" to="/products">
          <div onClick={() => this.closeHamburger()} className="menu-item2">
            products.
          </div>
        </Link>
        <Link className="menu-link" to="/about">
          <div onClick={() => this.closeHamburger()} className="menu-item1">
            about.
          </div>
        </Link>
        <Link className="menu-link" to="/contact">
          <div onClick={() => this.closeHamburger()} className="menu-item2">
            contact.
          </div>
        </Link>
        {/* <Link to="/cart">
          <div className="navtext">Cart{props.cart.length || 0}</div>
        </Link> */}
      </Menu>
    );
  }
}
export default Hamburger;
