import axios from "axios";
import { RealTimePriceProps } from "../../src/Types/RealTimePriceType";

export const getRealTimePirce = async (query: RealTimePriceProps) => {
  try {
    const res = await axios.get("/agromarket-realtime", {
      params: {
        serviceKey: query.serviceKey,
        apiType: query.apiType,
        pageNo: query.pageNo,
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
  }
};
