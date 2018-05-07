import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts, filterByProducts } from "../../ducks/productsReducer";
import { getCart } from "../../ducks/cartReducer.js";
import "./Products.css";
import { Link } from "react-router-dom";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
// import topwiggles from "./topwiggles.jpg";
// import bottomwiggles from "./bottomwiggles.jpg";

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
  // handleFilter(selected) {
  //   console.log(selected);
  //   this.setState({ value: selected });
  // }

  handleChange = (event, index, value) => this.setState({ value });

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
            <div className="product-page-name">{e.name}</div>
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
            {/* <span className="filter-bar">
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
            </span> */}
            <DropDownMenu
              value={this.state.value}
              // onChange={e => this.handleFilter(e.target.value)}
              onChange={this.handleChange}
            >
              <MenuItem value={""} primaryText="all products." />
              <MenuItem value={"shirts"} primaryText="shirts." />
              <MenuItem value={"shoes"} primaryText="shoes." />
              <MenuItem value={"sweaters"} primaryText="sweaters." />
              <MenuItem value={"pants"} primaryText="pants." />
            </DropDownMenu>
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
