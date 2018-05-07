import React, { Component } from "react";
import routes from "./routes";
import "./App.css";
import Nav from "./components/Nav/Nav";
// import Checkout from "./Checkout.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="App-body">{routes}</div>
      </div>
    );
  }
}

export default App;
