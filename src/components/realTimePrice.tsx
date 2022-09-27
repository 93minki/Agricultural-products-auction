import { useEffect, useState } from "react";
import { getRealTimePirce } from "../../pages/api/realTimePrice";
import { getDataProps } from "../Types/RealTimePriceType";

export const RealTimePrice = () => {
  const serviceKey = `${process.env.NEXT_PUBLIC_API_KEY}`;
  const apiType = "json";
  const pageNo = "1";
  const whsalCd = "250003";
  const [data, setData] = useState<getDataProps[]>([]);

  useEffect(() => {
    const resData = async () => {
      const recvData: getDataProps[] = await getRealTimePirce({
        serviceKey,
        apiType,
        pageNo,
        whsalCd,
      });
      console.log("Real Time Data", recvData);
      setData(recvData);
    };
    resData();
  }, [serviceKey]);

  return (
    <div>
      RealTime Test
      <ul>
        {data.map((itme) => (
          <li key={itme.rn}> {itme.smallName}</li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimePrice;
