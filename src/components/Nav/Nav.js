import React, { Component } from "react";
import "./Nav.css";
import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    };
  }

  handleCheck() {
    this.setState({ toggle: !this.state.toggle });
  }
  render() {
    return (
      <nav className="navigation">
        <div id="menuToggle">
          <input
            checked={this.state.toggle}
            onClick={() => this.handleCheck()}
            type="checkbox"
          />
          <span />
          <span />
          <span />
          <div id="menu">
            <Link
              className="menu-link"
              to="/products"
              onClick={() => this.handleCheck()}
            >
              <div className="menu-item">products.</div>
            </Link>
            <Link
              className="menu-link"
              to="/about"
              onClick={() => this.handleCheck()}
            >
              <div className="menu-item">about.</div>
            </Link>
            <Link
              className="menu-link"
              to="/locations"
              onClick={() => this.handleCheck()}
            >
              <div className="menu-item">locations.</div>
            </Link>
            <a href={process.env.REACT_APP_LOGIN} className="menu-link">
              <div onClick={() => this.closeHamburger()} className="menu-item1">
                login.
              </div>
            </a>
          </div>
        </div>
        <div className="navlink-container">
          <Link className="navtext" to="/">
            man . of . war
          </Link>
          ||
          <Link className="navtext" to="/cart">
            <i className="fas fa-shopping-cart" /> {this.props.cart.length || 0}
          </Link>
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
export default connect(mapStateToProps)(Nav);
