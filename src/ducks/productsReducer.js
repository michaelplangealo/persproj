import axios from "axios";

// initial state
const initialState = {
  products: []
};

// action types
const GET_PRODUCTS = "GET_PRODUCTS";

// action creators

export function getProducts() {
  return {
    type: GET_PRODUCTS,
    payload: axios.get("/api/products")
  };
}

// reducer function
export default function productsReducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case `${GET_PRODUCTS}_FULFILLED`:
      return Object.assign({}, state, { products: action.payload.data });
    default:
      return state;
  }
}
