import React, { Component } from "react";
import "./Hamburger.css";
import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import cart from "./cart.png";

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
      <div className="navbar">
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          {/* <Link className="menu-link" to="/">
              <div onClick={() => this.closeHamburger()} className="menu-item1">
                m'o'w.
              </div>
            </Link> */}
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
          <a href={process.env.REACT_APP_LOGIN} className="menu-link">
            <div onClick={() => this.closeHamburger()} className="menu-item1">
              login.
            </div>
          </a>
        </Menu>

        <div className="navlink-container">
          <Link className="navtext" to="/">
            <div>man/of/war</div>
          </Link>
          <Link className="navtext" to="/cart">
            <div>Cart {this.props.cart.length || 0}</div>
          </Link>
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
export default connect(mapStateToProps)(Hamburger);
