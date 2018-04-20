import axios from "axios";

// initial state
const initialState = {
  cart: []
};

// action types
const GET_CART = "GET_CART";
const ADD_TO_CART = "ADD_TO_CART";
const DELETE_FROM_CART = "DELETE_FROM_CART";

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
    payload: axios.post(`/api/cart/${id}`)
  };
}
export function deleteFromCart(id) {
  return {
    type: DELETE_FROM_CART,
    payload: axios.delete(`/api/cart/${id}`)
  };
}

// reducer function
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_CART}_FULFILLED`:
    case `${ADD_TO_CART}_FULFILLED`:
    case `${DELETE_FROM_CART}_FULFILLED`:
      return Object.assign({}, state, { cart: action.payload.data });
    default:
      return state;
  }
}
