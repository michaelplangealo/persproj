import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../ducks/productsReducer";

class Products extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.getProducts();
    console.log(this.props)
  }
  render(){
    const {products} = this.props;
    const productsList = products.map((e,i) => ( 
      <div key={i}>
        <h1>{e.name}</h1>
        <h2>{e.price}</h2>
        <h3>{e.description}</h3>
        <img src={e.firstimg}/>
        <img src={e.secondimg}/>
        <img  src={e.thirdimg} />
      </div>
    ))
    return(
      <div>
        {productsList}
      </div>
      
    )
  }
}

function mapStateToProps(state) {
  const { productsReducer } = state;
  return {
    ...productsReducer
  };
}

export default connect(mapStateToProps, { getProducts })(Products);
