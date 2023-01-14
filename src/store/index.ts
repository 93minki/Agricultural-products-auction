import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules";

const makeStore = () => {
  const store = configureStore({
    reducer: {
      reducer,
    },
  });
  return store;
};

const store = makeStore();

export default store;

export type RootState = ReturnType<typeof store.getState>;