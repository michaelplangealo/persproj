import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts, filterByProducts } from "../../ducks/productsReducer";
import { getCart } from "../../ducks/cartReducer.js";

import "./Products.css";
import { Link } from "react-router-dom";

class Products extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getProducts();
    this.props.getCart();
    // console.log(this.props);
  }

  render() {
    const { products } = this.props;

    const productsList = products.map((e, i) => (
      <div key={e.id} className="products-cards">
        <Link to={`/product/${e.id}`}>
          <img src={e.firstimg} className="products-image" />
        </Link>
      </div>
    ));
    return (
      <section>
        <div className="products-page">
          <div className="title-bar-products">
            <span>
              <span className="lochome">
                <Link to="/"> h o m e .</Link>
              </span>
              /
              <span className="loc">p r o d u c t s .</span>
            </span>
            <hr className="title-line" />
            <span className="filter-bar">
              <select className="categories-selector">
                <option />
                <option value="shirts.">shirts.</option>
                <option value="shoes.">shoes.</option>
                <option value="hoodies.">hoodies.</option>
              </select>
            </span>
          </div>
          <div className="products-container">{productsList}</div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const { productsReducer, cartReducer } = state;
  return {
    ...productsReducer,
    ...cartReducer
  };
}

export default connect(mapStateToProps, {
  getProducts,
  filterByProducts,
  getCart
})(Products);
