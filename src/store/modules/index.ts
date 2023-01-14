import { combineReducers } from "@reduxjs/toolkit";

import searchInfo from "./searchInfo";
import products from "./products";

const rootReducer = combineReducers({
  searchInfo: searchInfo.reducer,
  products: products.reducer,
});

export default rootReducer;
