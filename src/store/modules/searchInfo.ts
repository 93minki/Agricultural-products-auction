/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StateType {
  date: string;
  market: string;
  company: string;
  product: string;
}

const initialState: StateType = {
  date: "",
  market: "",
  company: "",
  product: "",
};

const searchInfoSlice = createSlice({
  name: "searchInfo",
  initialState,
  reducers: {
    selectDate: (state: StateType, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    selectMarket: (state: StateType, action: PayloadAction<string>) => {
      state.market = action.payload;
    },
    selectCompany: (state: StateType, action: PayloadAction<string>) => {
      state.company = action.payload;
    },
    selectProduct: (state: StateType, action: PayloadAction<string>) => {
      state.product = action.payload;
    },
  },
});

export const { selectDate, selectMarket, selectCompany, selectProduct } =
  searchInfoSlice.actions;

export default searchInfoSlice;
