import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import productsReducer from "./ducks/productsReducer";

const store = createStore(
  combineReducers({ productsReducer }),
  applyMiddleware(promiseMiddleware())
);

export default store;
