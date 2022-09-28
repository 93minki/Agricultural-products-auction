import type { NextPage } from "next";
import { useState } from "react";
import ApiTest from "../src/components/apiTest";
import Header from "../src/components/Header/Header";
import ProductList from "../src/components/ProductList/ProductList";
import RealTimePrice from "../src/components/realTimePrice";
import Selection from "../src/components/Selection/Selection";
import { SettlementDataProps } from "../src/Types/SettlementPriceType";
import { RealTimeDataProps } from "../src/Types/RealTimePriceType";

const Home: NextPage = () => {
  const [currentList, setCurrentList] = useState<SettlementDataProps[]>([]);
  const [realTimeData, setRealTimeData] = useState<RealTimeDataProps[]>([]);
  const [currentTab, setCurrentTab] = useState("");
  const getSettlementDatas = (listItem: SettlementDataProps[]) => {
    setCurrentList(listItem);
  };

  const getRealTimeDatas = (listItem: RealTimeDataProps[]) => {
    setRealTimeData(listItem);
  };

  const getCurrentTab = (header: string) => {
    setCurrentTab(header);
  };

  return (
    <div>
      {/* <ApiTest /> */}
      {/* <RealTimePrice /> */}
      <Header currentPage="정산 가격 정보" getCurrentTab={getCurrentTab} />
      <Selection
        getSettlementDatas={getSettlementDatas}
        getRealTimeDatas={getRealTimeDatas}
        currentTab={currentTab}
      />
      <ProductList products={currentList} />
    </div>
  );
};

export default Home;
