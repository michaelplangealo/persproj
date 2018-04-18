import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import Landing from "./components/Landing/Landing";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ProductPage from "./components/ProductPage/ProductPage";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/products" component={Products} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/product/:id" component={ProductPage} />
  </Switch>
);
