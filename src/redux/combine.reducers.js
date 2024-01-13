import { combineReducers } from "@reduxjs/toolkit";
import ProductReducer from "./product.slice";

const reducer = combineReducers({
  product: ProductReducer,
});


export default reducer;