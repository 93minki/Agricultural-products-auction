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
import ScrollToTop from "../src/components/ScrollToTop/ScrollToTop";

interface SearchDataProps {
  pageNo: string;
  date: string;
  market: string;
  product: string;
  company: string;
}

const Home: NextPage = () => {
  const [settlementProductList, setSettlementProductList] = useState<
    SettlementReceiveDatas[]
  >([]);
  const [realtimeProductList, setRealTimeProductList] = useState<
    RealTimeReceiveDatas[]
  >([]);
  const [currentTab, setCurrentTab] = useState("정산 가격 정보");

  const [isLoading, setIsLoading] = useState(false);

  const [message, setMessage] = useState("");

  const getSettlementDatas = (listItem: SettlementReceiveDatas[]) => {
    setSettlementProductList((prev) => [...prev, ...listItem]);
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
    setMessage("");
    setCurrentTab(header);
  };

  const searchButtonClick = ({
    date,
    market,
    company,
    product,
  }: SettlementSearchProps) => {
    const searchDataObject = {
      pageNo: "1",
      date,
      market,
      product,
      company,
    };
    if (currentTab === "정산 가격 정보") {
      setSettlementProductList([]);
      setMessage("");
      setIsLoading(true);
      settlementPrice(searchDataObject);
    } else {
      setRealTimeProductList([]);
      setMessage("");
      setIsLoading(true);
      realTimePrice(searchDataObject);
    }
  };

  const settlementPrice = async ({
    pageNo,
    date,
    market,
    product,
    company,
  }: SearchDataProps) => {
    try {
      const getData: SettlementReceiveAllData = await getSettlementPrice({
        pageNo,
        saleDate: date,
        whsalCd: market,
        cmpCd: company,
      });

      if (getData.data.length === 0) {
        setIsLoading(false);
        setMessage("검색 결과가 없습니다!");
        return;
      }
      const target = getData.data.filter((data) =>
        data.smallName.includes(product)
      );
      getSettlementDatas(target);

      const quotient = Math.ceil(getData.totCnt / 1000);
      if (pageNo === "1") {
        if (quotient > 1) {
          for (let i = 2; i <= quotient; i++) {
            await settlementPrice({
              pageNo: `${i}`,
              date,
              market,
              product,
              company,
            });
          }
        }
      }

      if (pageNo === quotient.toString()) {
        setIsLoading(false);
      }
    } catch (error) {
      console.log("selection error", error);
    }
  };

  const realTimePrice = async ({
    pageNo,
    date,
    market,
    product,
    company,
  }: SearchDataProps) => {
    try {
      const getData: RealTimeReceiveAllData = await getRealTimePirce({
        pageNo,
        whsalCd: market,
        cmpCd: company,
      });

      if (getData.hasOwnProperty("data")) {
        const target = getData.data.filter((data) =>
          data.smallName.includes(product)
        );
        getRealTimeDatas(target);

        const quotient =
          getData.data.length === 0 ? 1 : Math.ceil(getData.totCnt / 1000);
        if (pageNo === "1") {
          if (quotient > 1) {
            for (let i = 2; i <= quotient; i++) {
              await realTimePrice({
                pageNo: `${i}`,
                date,
                market,
                product,
                company,
              });
            }
          }
        }

        if (pageNo === quotient.toString()) {
          setIsLoading(false);
          if (target.length === 0) {
            setMessage("검색 결과가 없습니다!");
          }
        }
      } else {
        console.log("Fail!");
        setIsLoading(false);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleToTopButtonClick = () => {
    if (!window.scrollY) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Header currentPage="정산 가격 정보" getCurrentTab={getCurrentTab} />
      <Selection
        currentTab={currentTab}
        searchButtonClick={searchButtonClick}
        isLoading={isLoading}
      />
      {currentTab === "정산 가격 정보" ? (
        <SettlementProductList
          products={settlementProductList}
          isLoading={isLoading}
          message={message}
        />
      ) : (
        <RealTimeProductList
          products={realtimeProductList}
          isLoading={isLoading}
          message={message}
        />
      )}
      <ScrollToTop handleToTopButtonClick={handleToTopButtonClick} />
    </div>
  );
};

export default Home;
