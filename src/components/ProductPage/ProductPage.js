import React, { Component } from "react";
import { connect } from "react-redux";
import { getOneProduct } from "../../ducks/productsReducer";
import "./ProductPage.css";

class ProductPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(id) {
    this.props.getOneProduct(this.props.match.params.id);
  }
  render() {
    const { currentProduct } = this.props;
    const selectedProduct = currentProduct.map((e, i) => (
      <div key={e.id} className="products-cards">
        <h1>{e.name}</h1>
        <h2>{e.price}</h2>
        <h3>{e.description}</h3>
        <img src={e.firstimg} className="products-image" />
        <img src={e.secondimg} className="products-image" />
        <img src={e.thirdimg} className="products-image" />
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

export default connect(mapStateToProps, { getOneProduct })(ProductPage);
