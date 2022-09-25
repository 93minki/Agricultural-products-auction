import axios from "axios";

interface SettlementPirceProps {
  serviceKey: string;
  apiType: string;
  pageNo: string;
  saleDate: string;
  whsalCd: string;
  cmpCd?: string;
  largeCd?: string;
  midCd?: string;
  smallCd?: string;
}

export const getSettlementPrice = async (query: SettlementPirceProps) => {
  try {
    const res = await axios.get("/agromarket", {
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
    if (res.status === 200) return res.data;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};
