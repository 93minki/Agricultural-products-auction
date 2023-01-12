import type { MouseEvent, Dispatch, SetStateAction } from "react";
import { Button } from "@mui/material";
import { getStorageItem, setStorageItem } from "../../utils/localStorage";
import {
  SettlementReceiveAllData,
  SettlementReceiveDatas,
  SettlementSearchProps,
} from "../../Types/SettlementPriceType";
import { SearchDataProps } from "../../Types/SearchType";
import { getSettlementPrice } from "../../api/settlementPrice";
import {
  RealTimeReceiveAllData,
  RealTimeReceiveDatas,
} from "../../Types/RealTimePriceType";
import { getRealTimePirce } from "../../api/realTimePrice";

interface SearchButtonProps {
  type: string;
  searchInfo: {
    searchDate: string;
    currentMarket: string;
    currentCompany: string;
    searchWord: string;
  };
  setRecentKeywords: Dispatch<SetStateAction<string[]>>;
}

const SearchButton = ({
  type,
  searchInfo,
  setRecentKeywords,
}: SearchButtonProps) => {
  const { searchDate, currentMarket, currentCompany, searchWord } = searchInfo;

  const getSettlementDatas = (listItem: SettlementReceiveDatas[]) => {
    // setSettlementProductList((prev) => [...prev, ...listItem]);
  };

  const getRealTimeDatas = (listItem: RealTimeReceiveDatas[]) => {
    // setRealTimeProductList((prev) => [...prev, ...listItem]);
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
    if (type === "settlement") {
      // setSettlementProductList([]);
      // setMessage("");
      // setIsLoading(true);
      settlementPrice(searchDataObject);
    } else {
      // setRealTimeProductList([]);
      // setMessage("");
      // setIsLoading(true);
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

      if (getData.hasOwnProperty("data")) {
        // setIsSearchError(false);
        if (getData.data.length === 0) {
          // setIsLoading(false);
          // setMessage("검색 결과가 없습니다!");
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
          // setIsLoading(false);
        }
      } else {
        // setIsSearchError(true);
        // setErrorStatus({
        //   errorCode: getData.errorCode,
        //   errorMessage: getData.errorText,
        // });
        // setIsLoading(false);
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
        // setIsSearchError(false);
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
          // setIsLoading(false);
          if (target.length === 0) {
            // setMessage("검색 결과가 없습니다!");
          }
        }
      } else {
        // setIsSearchError(true);
        // setErrorStatus({
        //   errorCode: getData.errorCode,
        //   errorMessage: getData.errorText,
        // });
        // setIsLoading(false);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSearchButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (type === "settlement") {
      if (searchDate && currentMarket && searchWord) {
        searchButtonClick({
          date: searchDate.replaceAll("-", ""),
          market: currentMarket,
          company: currentCompany,
          product: searchWord,
        });
      }
    } else {
      if (currentMarket && searchWord) {
        searchButtonClick({
          date: searchDate.replaceAll("-", ""),
          market: currentMarket,
          company: currentCompany,
          product: searchWord,
        });
      }
    }
    const recentKeyword = getStorageItem();
    if (!recentKeyword.includes(searchWord)) {
      setStorageItem([...recentKeyword, searchWord]);
      setRecentKeywords([...recentKeyword, searchWord]);
    }
  };

  return <Button onClick={handleSearchButtonClick}>검색</Button>;
};

export default SearchButton;
