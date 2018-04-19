import React, { Component } from "react";
import { connect } from "react-redux";
import { getOneProduct } from "../../ducks/productsReducer";
import { addToCart } from "../../ducks/cartReducer";
import "./ProductPage.css";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }
  componentDidMount(id) {
    this.props.getOneProduct(this.props.match.params.id);
  }
  addToCart(id) {
    this.props.addToCart(id);
    // console.log("Hit");
  }

  render() {
    const { currentProduct } = this.props;
    const { addToCart } = this.props;
    const selectedProduct = currentProduct.map((e, i) => (
      <div key={e.id} className="product">
        <div className="products-img-container">
          <img src={e.firstimg} className="product-page-image" />
          <img src={e.secondimg} className="product-page-image" />
          <img src={e.thirdimg} className="product-page-image" />
        </div>
        <div className="product-description">
          <h1>{e.name}</h1>
          <h2>{e.price}</h2>
          <h3>{e.description}</h3>
          <button onClick={() => this.addToCart(e.id)}>Gimme Dat Shit</button>
        </div>
      </div>
    ));
    return (
      <section>
        <div>{selectedProduct}</div>
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

export default connect(mapStateToProps, { getOneProduct, addToCart })(
  ProductPage
);
