import axios, { AxiosError } from "axios";
import { SettlementPirceRequest } from "../../src/Types/SettlementPriceType";

const serviceKey = `${process.env.NEXT_PUBLIC_API_KEY}`;
const apiType = 'json';

export const getSettlementPrice = async (query: SettlementPirceRequest) => {
  try {
    const res = await axios.get("/agromarket-settle", {
      params: {
        serviceKey,
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
    if (res.status === 200) return res.data.data;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};
