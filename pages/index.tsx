import type { NextPage } from "next";
import { useState } from "react";
import Header from "../src/components/Header/Header";
import SettlementProductList from "../src/components/SettlementProductList/SettlementProductList";
import Selection from "../src/components/Selection/Selection";
import {
  SettlementSearchProps,
  SettlementReceiveAllData,
} from "../src/Types/SettlementPriceType";
import {
  RealTimeReceiveAllData,
  RealTimeSearchProps,
} from "../src/Types/RealTimePriceType";
import { getSettlementPrice } from "./api/settlementPrice";
import { getRealTimePirce } from "./api/realTimePrice";
import RealTimeProductList from "../src/components/RealTimeProductList/RealTimeProductList";

const Home: NextPage = () => {
  const [settlementProductList, setSettlementProductList] = useState<
    SettlementReceiveAllData[]
  >([]);
  const [realtimeProductList, setRealTimeProductList] = useState<
    RealTimeReceiveAllData[]
  >([]);
  const [currentTab, setCurrentTab] = useState("정산 가격 정보");
  const getSettlementDatas = (listItem: SettlementReceiveAllData[]) => {
    setSettlementProductList(listItem);
  };

  const getRealTimeDatas = (listItem: RealTimeReceiveAllData[]) => {
    setRealTimeProductList(listItem);
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
    if (currentTab === "정산 가격 정보") {
      settlementPrice({ date, market, product });
    } else {
      realTimePrice({ market, product });
    }
  };

  const realTimePrice = async ({ market, product }: RealTimeSearchProps) => {
    const pageNo = "1";
    const whsalCd = market;

    try {
      const getData: RealTimeReceiveAllData[] = await getRealTimePirce({
        pageNo,
        whsalCd,
      });

      if (getData) {
        const target = getData.filter((data) =>
          data.smallName.includes(product)
        );
        getRealTimeDatas(target);
      }
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
    const saleDate = date;
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
