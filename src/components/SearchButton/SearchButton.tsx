/* eslint-disable curly */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-shadow */
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, SetStateAction } from "react";
import { SettlementReceiveAllData } from "../../Types/SettlementPriceType";
import { SearchDataProps } from "../../Types/SearchType";
import { getSettlementPrice } from "../../api/settlementPrice";
import { RealTimeReceiveAllData } from "../../Types/RealTimePriceType";
import { getRealTimePirce } from "../../api/realTimePrice";
import { RootState } from "../../store";
import {
  initializeProduct,
  setRealtime,
  setSettlement,
} from "../../store/modules/products";
import * as S from "./style";
import { addStorageItem } from "../../utils/localStorage";

interface SearchButtonProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const SearchButton = ({ setIsLoading }: SearchButtonProps) => {
  const router = useRouter();
  const pathName = router.pathname;
  const dispatch = useDispatch();

  const searchInfoData = useSelector(
    (state: RootState) => state.rootReducer.searchInfo
  );
  const { date, market, company, product } = searchInfoData;

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
          setIsLoading(false);
          // setMessage("검색 결과가 없습니다!");
          return;
        }

        const target = getData.data.filter((data) =>
          data.smallName.includes(product)
        );

        dispatch(setSettlement(target));
        const quotient = Math.ceil(getData.totCnt / 1000);
        if (pageNo === "1")
          if (quotient > 1)
            for (let i = 2; i <= quotient; i += 1)
              await settlementPrice({
                pageNo: `${i}`,
                date,
                market,
                product,
                company,
              });

        if (pageNo === quotient.toString()) setIsLoading(false);
      } else {
        // setIsSearchError(true);
        // setErrorStatus({
        //   errorCode: getData.errorCode,
        //   errorMessage: getData.errorText,
        // });
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
        // setIsSearchError(false);
        const target = getData.data.filter((data) =>
          data.smallName.includes(product)
        );
        dispatch(setRealtime(target));

        const quotient =
          getData.data.length === 0 ? 1 : Math.ceil(getData.totCnt / 1000);
        if (pageNo === "1")
          if (quotient > 1)
            for (let i = 2; i <= quotient; i += 1)
              await realTimePrice({
                pageNo: `${i}`,
                date,
                market,
                product,
                company,
              });

        if (pageNo === quotient.toString())
          if (target.length === 0) {
            setIsLoading(false);
            // setMessage("검색 결과가 없습니다!");
          }
      } else {
        // setIsSearchError(true);
        // setErrorStatus({
        //   errorCode: getData.errorCode,
        //   errorMessage: getData.errorText,
        // });
        setIsLoading(false);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const searchButtonClick = () => {
    const searchDataObject = {
      pageNo: "1",
      date,
      market,
      product,
      company,
    };

    addStorageItem(product);

    if (pathName === "/settlement") {
      // setMessage("");
      setIsLoading(true);
      dispatch(initializeProduct("settlement"));
      settlementPrice(searchDataObject);
    } else {
      // setMessage("");
      setIsLoading(true);
      dispatch(initializeProduct("realtime"));
      realTimePrice(searchDataObject);
    }
  };

  return (
    <S.SearchButton variant="contained" onClick={searchButtonClick}>
      검색
    </S.SearchButton>
  );
};

export default SearchButton;
