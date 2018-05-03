import React, { Component } from "react";
import axios from "axios";
import routes from "./routes";
import Hamburger from "./components/Hamburger/Hamburger";
import BetterBtn from "./components/BetterBtn/BetterBtn";
import "./App.css";
// import Nav from "./components/Nav/Nav";
// import Checkout from "./Checkout.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hamburger />
        {/* <BetterBtn /> */}
        <div className="App-body">{routes}</div>
      </div>
    );
  }
}

export default App;
