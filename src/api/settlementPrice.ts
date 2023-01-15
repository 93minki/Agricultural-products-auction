/* eslint-disable consistent-return */
import axios, { AxiosError } from "axios";
import { SettlementPirceRequest } from "../Types/SettlementPriceType";

const apiType = "json";

export const getSettlementPrice = async (query: SettlementPirceRequest) => {
  try {
    const res = await axios.get("/agromarket-settle", {
      params: {
        apiType,
        pageNo: query.pageNo,
        saleDate: query.saleDate,
        whsalCd: query.whsalCd,
        cmpCd: query.cmpCd,
        largeCd: query.largeCd,
        midCd: query.midCd,
        smallCd: query.smallCd,
      },
    });
    if (res.status === 200) return res.data;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};
