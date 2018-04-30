import React, { Component } from "react";
import axios from "axios";
import Nav from "./components/Nav/Nav";
import routes from "./routes";
import Checkout from "./Checkout.js";
import "./App.css";
import Hamburger from "./components/Hamburger/Hamburger";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Nav /> */}
        <Hamburger />
        {routes}
      </div>
    );
  }
}

export default App;
