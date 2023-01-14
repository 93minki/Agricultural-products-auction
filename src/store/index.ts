import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./modules";
import searchInfo from "./modules/searchInfo";
import products from "./modules/products";

const makeStore = () => {
  const store = configureStore({
    reducer: {
      rootReducer,
    },
  });
  return store;
};

const store = makeStore();

export default store;
export interface RootState {
  rootReducer: {
    searchInfo: typeof searchInfo;
    products: typeof products;
  };
}
