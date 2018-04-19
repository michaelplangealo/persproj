import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import productsReducer from "./ducks/productsReducer";
import cartReducer from "./ducks/cartReducer";

const store = createStore(
  combineReducers({ productsReducer, cartReducer }),
  applyMiddleware(promiseMiddleware())
);

export default store;
