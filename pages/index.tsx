import type { NextPage } from "next";
import { useState } from "react";
import Header from "../src/components/Header/Header";
import SettlementProductList from "../src/components/SettlementProductList/SettlementProductList";
import Selection from "../src/components/Selection/Selection";
import type {
  SettlementSearchProps,
  SettlementReceiveAllData,
} from "../src/Types/SettlementPriceType";
import type {
  RealTimeReceiveData,
  RealTimeReceiveAllData,
} from "../src/Types/RealTimePriceType";
import { getSettlementPrice } from "./api/settlementPrice";
import { getRealTimePirce } from "./api/realTimePrice";
import RealTimeProductList from "../src/components/RealTimeProductList/RealTimeProductList";

const Home: NextPage = () => {
  const [settlementProductList, setSettlementProductList] = useState<
    SettlementReceiveAllData[]
  >([]);
  const [realtimeProductList, setRealTimeProductList] = useState<
    RealTimeReceiveData[]
  >([]);
  const [currentTab, setCurrentTab] = useState("정산 가격 정보");

  const [searchDataObject, setSearchDataObject] = useState({
    date: "",
    market: "",
    product: "",
  });

  const getSettlementDatas = (listItem: SettlementReceiveAllData[]) => {
    setSettlementProductList(listItem);
  };

  const getRealTimeDatas = (listItem: RealTimeReceiveData[]) => {
    console.log("listItem", listItem);
    setRealTimeProductList((prev) => [...prev, ...listItem]);
  };

  const getCurrentTab = (header: string) => {
    if (header === "정산 가격 정보") {
      setSettlementProductList([]);
    } else {
      setRealTimeProductList([]);
    }
    setCurrentTab(header);
  };

  const searchButtonClick = ({
    date,
    market,
    product,
  }: SettlementSearchProps) => {
    console.log("date", date, "market", market, "product", product);
    setSearchDataObject({ date: date as string, market, product });
    if (currentTab === "정산 가격 정보") {
      settlementPrice({ date, market, product });
    } else {
      realTimePrice("1");
    }
  };

  const realTimePrice = async (pageNo: string) => {
    console.log("searchObject", searchDataObject);
    try {
      const getData: RealTimeReceiveAllData = await getRealTimePirce({
        pageNo,
        whsalCd: searchDataObject.market,
      });
      console.log("origin", getData.data);

      const target = getData.data.filter((data) => {
        return data.smallName.includes(searchDataObject.product);
      });
      getRealTimeDatas(target);

      if (pageNo === "1") {
        const quotient = Math.floor(getData.totCnt / 1000);
        if (quotient > 1) {
          for (let i = 2; i <= quotient; i++) {
            await realTimePrice(`${i}`);
          }
        }
      }

      // if (getData.data) {
      //   const target = getData.filter((data) =>
      //     data.smallName.includes(product)
      //   );
      //   getRealTimeDatas(target);
      // }
    } catch (error) {
      console.log("error", error);
    }
  };

  const settlementPrice = async ({
    date,
    market,
    product,
  }: SettlementSearchProps) => {
    const pageNo = "1";
    const saleDate = date as string;
    const whsalCd = market;

    try {
      const getData: SettlementReceiveAllData[] = await getSettlementPrice({
        pageNo,
        saleDate,
        whsalCd,
      });
      if (getData) {
        const target = getData.filter((data) =>
          data.smallName.includes(product)
        );
        getSettlementDatas(target);
      }
    } catch (error) {
      console.log("selection error", error);
    }
  };

  return (
    <div>
      <Header currentPage="정산 가격 정보" getCurrentTab={getCurrentTab} />
      <Selection
        currentTab={currentTab}
        searchButtonClick={searchButtonClick}
      />
      {currentTab === "정산 가격 정보" ? (
        <SettlementProductList products={settlementProductList} />
      ) : (
        <RealTimeProductList products={realtimeProductList} />
      )}
    </div>
  );
};

export default Home;
