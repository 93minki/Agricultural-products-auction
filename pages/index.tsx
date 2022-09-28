import type { NextPage } from "next";
import { useState } from "react";
import ApiTest from "../src/components/apiTest";
import Header from "../src/components/Header/Header";
import ProductList from "../src/components/ProductList/ProductList";
import RealTimePrice from "../src/components/realTimePrice";
import Selection from "../src/components/Selection/Selection";
import { getDataProps } from "../src/Types/SettlementPriceType";

const Home: NextPage = () => {
  const [currentList, setCurrentList] = useState<getDataProps[]>([]);
  const [currentTab, setCurrentTab] = useState("");
  const getCurrentProps = (listItem: getDataProps[]) => {
    setCurrentList(listItem);
  };

  const getCurrentTab = (header: string) => {
    setCurrentTab(header);
  };

  return (
    <div>
      {/* <ApiTest /> */}
      {/* <RealTimePrice /> */}
      <Header currentPage="정산 가격 정보" getCurrentTab={getCurrentTab} />
      <Selection getCurrentProps={getCurrentProps} currentTab={currentTab} />
      <ProductList products={currentList} />
    </div>
  );
};

export default Home;
