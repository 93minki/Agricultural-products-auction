import type { NextPage } from "next";
import { useState } from "react";
import Header from "../src/components/Header/Header";
import ProductList from "../src/components/ProductList/ProductList";
import Selection from "../src/components/Selection/Selection";
import { SettlementDataProps } from "../src/Types/SettlementPriceType";
import { RealTimeDataProps } from "../src/Types/RealTimePriceType";

interface SearchProps {
  date?: string;
  market: string;
  product: string;
}

const Home: NextPage = () => {
  const [currentList, setCurrentList] = useState<SettlementDataProps[]>([]);
  const [realTimeData, setRealTimeData] = useState<RealTimeDataProps[]>([]);
  const [currentTab, setCurrentTab] = useState("정산 가격 정보");
  const getSettlementDatas = (listItem: SettlementDataProps[]) => {
    setCurrentList(listItem);
  };

  const getRealTimeDatas = (listItem: RealTimeDataProps[]) => {
    setRealTimeData(listItem);
  };

  const getCurrentTab = (header: string) => {
    setCurrentTab(header);
  };

  const searchButtonClick = ({ date, market, product }: SearchProps) => {
    console.log("date", date, "market", market, "product", product);
  };

  // const realTimePrice = async () => {
  //   const serviceKey = `${process.env.NEXT_PUBLIC_API_KEY}`;
  //   const apiType = "json";
  //   const pageNo = "1";
  //   const whsalCd = currentMarket;

  //   try {
  //     const getData: RealTimeDataProps[] = await getRealTimePirce({
  //       serviceKey,
  //       apiType,
  //       pageNo,
  //       whsalCd,
  //     });

  //     if (getData) {
  //       const target = getData.filter((data) =>
  //         data.smallName.includes(searchWord)
  //       );
  //       getRealTimeDatas(target);
  //     }
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  // const settlementPrice = async () => {
  //   const serviceKey = `${process.env.NEXT_PUBLIC_API_KEY}`;
  //   const apiType = "json";
  //   const pageNo = "1";
  //   const saleDate = searchDate;
  //   const whsalCd = currentMarket;

  //   try {
  //     const getData: SettlementDataProps[] = await getSettlementPrice({
  //       serviceKey,
  //       apiType,
  //       pageNo,
  //       saleDate,
  //       whsalCd,
  //     });
  //     console.log("getData!!", getData, typeof getData);
  //     if (getData) {
  //       const target = getData.filter((data) =>
  //         data.smallName.includes(searchWord)
  //       );
  //       console.log("filtered target", target);
  //       getSettlementDatas(target);
  //     }
  //   } catch (error) {
  //     console.log("selection error", error);
  //   }
  // };

  return (
    <div>
      <Header currentPage="정산 가격 정보" getCurrentTab={getCurrentTab} />
      <Selection
        currentTab={currentTab}
        searchButtonClick={searchButtonClick}
      />
      <ProductList products={currentList} />
    </div>
  );
};

export default Home;
