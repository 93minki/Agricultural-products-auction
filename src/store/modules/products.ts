import { SettlementReceiveDatas } from "../../Types/SettlementPriceType";
import { RealTimeReceiveDatas } from "../../Types/RealTimePriceType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductsType {
  settlement: SettlementReceiveDatas[];
  realtime: RealTimeReceiveDatas[];
}

const initialState: ProductsType = {
  settlement: [],
  realtime: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSettlement: (
      state: ProductsType,
      action: PayloadAction<SettlementReceiveDatas[]>
    ) => {
      state.settlement = action.payload;
    },
    setRealtime: (
      state: ProductsType,
      action: PayloadAction<RealTimeReceiveDatas[]>
    ) => {
      state.realtime = action.payload;
    },
  },
});

export const { setSettlement, setRealtime } = productsSlice.actions;
export default productsSlice;
