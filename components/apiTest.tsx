import { useEffect, useState } from "react";
import { getSettlementPrice } from "../pages/api/settlementPrice";
import { getDataProps } from "../Types/SettlementPriceType";

const ApiTest = () => {
  const serviceKey = `${process.env.NEXT_PUBLIC_API_KEY}`;
  const apiType = "json";
  const pageNo = "1";
  const saleDate = "20220926";
  const whsalCd = "250003";
  const [data, setData] = useState<getDataProps[]>([]);
  useEffect(() => {
    const resData = async () => {
      const recvData: getDataProps[] = await getSettlementPrice({
        serviceKey,
        apiType,
        pageNo,
        saleDate,
        whsalCd,
      });
      console.log("origin data", recvData);
      setData(recvData);
    };
    resData();
  }, [serviceKey]);

  console.log("data", data);
  return (
    <div>
      API Test Result
      <ul>
        {data.map((item) => (
          <li key={item.rn}>{item.smallName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiTest;
