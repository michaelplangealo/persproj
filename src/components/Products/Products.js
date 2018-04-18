import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../ducks/productsReducer";
import "./Products.css";
import { Link } from "react-router-dom";

class Products extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getProducts();
    // console.log(this.props);
  }
  render() {
    const { products } = this.props;
    const productsList = products.map((e, i) => (
      <div key={e.id} className="products-cards">
        <Link to={`/product/${e.id}`}>
          {/* <h1>{e.name}</h1>
        <h2>{e.price}</h2>
        <h3>{e.description}</h3> */}
          <img src={e.firstimg} className="products-image" />
          {/* <img src={e.secondimg} className="products-image" />
        <img src={e.thirdimg} className="products-image" /> */}
        </Link>
      </div>
    ));
    return (
      <section>
        <div className="products-container">{productsList}</div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const { productsReducer } = state;
  return {
    ...productsReducer
  };
}

export default connect(mapStateToProps, { getProducts })(Products);
