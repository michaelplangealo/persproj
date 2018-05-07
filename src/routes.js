import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import Landing from "./components/Landing/Landing";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Locations from "./components/Locations/Locations";
import ProductPage from "./components/ProductPage/ProductPage";
import Cart from "./components/Cart/Cart";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/products" component={Products} />
    <Route path="/about" component={About} />
    <Route path="/locations" component={Locations} />
    <Route path="/product/:id" component={ProductPage} />
    <Route path="/cart" component={Cart} />
  </Switch>
);
