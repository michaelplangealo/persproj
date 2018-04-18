import axios from "axios";

// initial state
const initialState = {
  cart: []
};

// action types
const GET_CART = "GET_CART";

// action creators

export function getCart() {
  return {
    type: GET_CART,
    payload: axios.get("/api/cart")
  };
}
