import axios from "axios";
import { RealTimePriceRequest } from "../../src/Types/RealTimePriceType";

const serviceKey = `${process.env.NEXT_PUBLIC_API_KEY}`;
const apiType = "json";

export const getRealTimePirce = async (query: RealTimePriceRequest) => {
  console.log(query);
  try {
    const res = await axios.get("/agromarket-realtime", {
      params: {
        serviceKey,
        apiType,
        pageNo: query.pageNo,
        whsalCd: query.whsalCd,
        cmpCd: query.cmpCd,
        largeCd: query.largeCd,
        midCd: query.midCd,
        smallCd: query.smallCd,
      },
    });
    console.log("res", res.data);

    if (res.status === 200) return res.data;
  } catch (error) {
    console.log("error", error);
  }
};
