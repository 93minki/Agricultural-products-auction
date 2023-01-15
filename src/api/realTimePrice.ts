/* eslint-disable consistent-return */
import axios from "axios";
import { RealTimePriceRequest } from "../Types/RealTimePriceType";

export const getRealTimePirce = async (query: RealTimePriceRequest) => {
  try {
    const res = await axios.get("/agromarket-realtime", {
      params: {
        apiType: "json",
        pageNo: query.pageNo,
        whsalCd: query.whsalCd,
        cmpCd: query.cmpCd,
        largeCd: query.largeCd,
        midCd: query.midCd,
        smallCd: query.smallCd,
      },
    });

    if (res.status === 200) return res.data;
  } catch (error) {
    console.log("Axios Error!", error);
  }
};
