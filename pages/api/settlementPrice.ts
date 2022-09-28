import axios, { AxiosError } from "axios";
import { SettlementPirceProps } from "../../src/Types/SettlementPriceType";

export const getSettlementPrice = async (query: SettlementPirceProps) => {
  try {
    const res = await axios.get("/agromarket-settle", {
      params: {
        serviceKey: query.serviceKey,
        apiType: query.apiType,
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
