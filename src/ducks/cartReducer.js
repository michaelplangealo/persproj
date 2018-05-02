import axios from "axios";

// initial state
const initialState = {
  cart: [],
  total: 0
  // finalTotal: 0
};

// action types
const GET_CART = "GET_CART";
const ADD_TO_CART = "ADD_TO_CART";
const DELETE_FROM_CART = "DELETE_FROM_CART";
const GET_CART_TOTAL = "GET_CART_TOTAL";
const UPDATE_CART = "UPDATE_CART";
// const UPDATE_TOTAL = "UPDATE_TOTAL";

// action creators
export function getCart() {
  return {
    type: GET_CART,
    payload: axios.get(`/api/cart`)
  };
}
export function getCartTotal() {
  return {
    type: GET_CART_TOTAL,
    payload: axios.get(`/api/cart`)
  };
}

export function addToCart(id, quantity) {
  return {
    type: ADD_TO_CART,
    payload: axios.post(`/api/cart/`, { id, quantity })
  };
}
export function deleteFromCart(id) {
  return {
    type: DELETE_FROM_CART,
    payload: axios.delete(`/api/cart/${id}`)
  };
}
export function updateCart(id, quantity) {
  return {
    type: UPDATE_CART,
    payload: axios.put(`/api/cart`, { id, quantity })
  };
}

// export function updateTotal(total) {
//   return {
//     type: UPDATE_TOTAL,
//     payload: total
//   };
// }

// reducer function
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_CART}_FULFILLED`:
    case `${ADD_TO_CART}_FULFILLED`:
    case `${UPDATE_CART}_FULFILLED`:
    case `${DELETE_FROM_CART}_FULFILLED`:
      return Object.assign({}, state, { cart: action.payload.data });
    case `${GET_CART_TOTAL}_FULFILLED`:
      let total = 0;
      action.payload.data.map((e, i) => {
        total += Number(e.price.slice(1)) * e.quantity;
      });
      // console.log("TOTAL: ", total);
      return Object.assign({}, state, { total: total });
    // const total = action.payload.reduce((acc, curr) => acc + curr.price);
    default:
      // console.log("default hit");
      return state;
  }
}
