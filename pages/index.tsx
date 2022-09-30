import type { NextPage } from "next";
import { useState } from "react";
import Header from "../src/components/Header/Header";
import SettlementProductList from "../src/components/SettlementProductList/SettlementProductList";
import Selection from "../src/components/Selection/Selection";
import type {
  SettlementSearchProps,
  SettlementReceiveDatas,
  SettlementReceiveAllData,
} from "../src/Types/SettlementPriceType";
import type {
  RealTimeReceiveDatas,
  RealTimeReceiveAllData,
} from "../src/Types/RealTimePriceType";
import { getSettlementPrice } from "./api/settlementPrice";
import { getRealTimePirce } from "./api/realTimePrice";
import RealTimeProductList from "../src/components/RealTimeProductList/RealTimeProductList";

const Home: NextPage = () => {
  const [settlementProductList, setSettlementProductList] = useState<
    SettlementReceiveDatas[]
  >([]);
  const [realtimeProductList, setRealTimeProductList] = useState<
    RealTimeReceiveDatas[]
  >([]);
  const [currentTab, setCurrentTab] = useState("정산 가격 정보");

  const [searchDataObject, setSearchDataObject] = useState({
    date: "",
    market: "",
    product: "",
  });

  const getSettlementDatas = (listItem: SettlementReceiveDatas[]) => {
    setSettlementProductList(listItem);
  };

  const getRealTimeDatas = (listItem: RealTimeReceiveDatas[]) => {
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
      settlementPrice("1");
    } else {
      realTimePrice("1");
    }
  };

  const realTimePrice = async (pageNo: string) => {
    try {
      const getData: RealTimeReceiveAllData = await getRealTimePirce({
        pageNo,
        whsalCd: searchDataObject.market,
      });

      const target = getData.data.filter((data) =>
        data.smallName.includes(searchDataObject.product)
      );
      getRealTimeDatas(target);

      if (pageNo === "1") {
        const quotient = Math.ceil(getData.totCnt / 1000);
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

  const settlementPrice = async (pageNo: string) => {
    try {
      const getData: SettlementReceiveAllData = await getSettlementPrice({
        pageNo,
        saleDate: searchDataObject.date,
        whsalCd: searchDataObject.market,
      });
      console.log("getData", getData, pageNo);
      const target = getData.data.filter((data) =>
        data.smallName.includes(searchDataObject.product)
      );
      getSettlementDatas(target);

      if (pageNo === "1") {
        console.log("PageNo 1 !!!");
        const quotient = Math.ceil(getData.totCnt / 1000);
        console.log("quotient", quotient);
        if (quotient > 1) {
          for (let i = 2; i <= quotient; i++) {
            console.log("second page start");
            await settlementPrice(`${i}`);
          }
        }
      }

      // if (getData) {
      //   const target = getData.filter((data) =>
      //     data.smallName.includes(searchDataObject.product)
      //   );
      //   getSettlementDatas(target);
      // }
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
