import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts, filterByProducts } from "../../ducks/productsReducer";
import { getCart } from "../../ducks/cartReducer.js";
import "./Products.css";
import { Link } from "react-router-dom";
import topwiggles from "./topwiggles.jpg";
import bottomwiggles from "./bottomwiggles.jpg";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  componentDidMount() {
    this.props.getProducts();
    this.props.getCart();
    // console.log(this.props);
  }
  handleFilter(selected) {
    this.setState({ value: selected });
  }

  render() {
    const { products, category } = this.props;
    const { value } = this.state;
    // console.log(products);
    console.log(value);

    // mapping through categories
    const categoryList = products
      .filter(e => {
        console.log(e.category, value);
        return e.category === value;
      })
      .map((e, i) => {
        console.log(e);
        return (
          <div key={e.id} className="products-cards">
            <Link to={`/product/${e.id}`}>
              <img src={e.firstimg} className="products-image" />
            </Link>
          </div>
        );
      });

    // mapping through products
    const productsList = products.map((e, i) => {
      return (
        <div key={e.id} className="products-cards">
          <Link to={`/product/${e.id}`}>
            <img src={e.firstimg} className="products-image" />
          </Link>
        </div>
      );
    });

    // rendering products onto screen
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
              <select
                onChange={e => this.handleFilter(e.target.value)}
                className="categories-selector"
              >
                <option value="">all products.</option>
                <option value="shirts">shirts.</option>
                <option value="shoes">shoes.</option>
                <option value="sweaters">sweaters.</option>
                <option value="pants">pants.</option>
              </select>
            </span>
          </div>
          {value ? (
            <div className="products-container">{categoryList}</div>
          ) : (
            <div className="products-container">{productsList}</div>
          )}
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
