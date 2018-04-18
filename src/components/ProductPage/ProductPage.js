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
    return <div />;
  }
}

function mapStateToProps(state) {
  const { productsReducer } = state;
  return {
    ...productsReducer
  };
}

export default connect(mapStateToProps, { getOneProduct })(ProductPage);
