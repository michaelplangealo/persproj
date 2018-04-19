import axios from "axios";

// initial state
const initialState = {
  cart: []
};

// action types
const GET_CART = "GET_CART";
const ADD_TO_CART = "ADD_TO_CART";

// action creators
export function getCart() {
  return {
    type: GET_CART,
    payload: axios.get(`/api/cart`)
  };
}

export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    payload: axios.get(`/api/cart/${id}`)
  };
}

// reducer function
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_CART}_FULFILLED`:
      return Object.assign({}, state, { cart: action.payload.data });
    case `${ADD_TO_CART}_FULFILLED`:
      return Object.assign({}, state, { cart: action.payload.data });
    default:
      return state;
  }
}
