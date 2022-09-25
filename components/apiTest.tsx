import { getSettlementPrice } from "../pages/api/settlementPrice";

const ApiTest = () => {
  const serviceKey = `${process.env.NEXT_PUBLIC_API_KEY}`;
  const apiType = "json";
  const pageNo = "1";
  const saleDate = "20220924";
  const whsalCd = "250003";
  const res = getSettlementPrice({
    serviceKey,
    apiType,
    pageNo,
    saleDate,
    whsalCd,
  });
  console.log(res);
  return <div>API Test Result</div>;
};

export default ApiTest;
