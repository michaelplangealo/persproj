import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../ducks/productsReducer";

class Products extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return <div>Products</div>;
  }
}

function mapStateToProps(state) {
  const { productsReducer } = state;
  return {
    ...productsReducer
  };
}

export default connect(mapStateToProps, { getProducts })(Products);
