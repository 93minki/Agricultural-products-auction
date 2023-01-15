import { Button } from "@mui/material";
import { SettlementReceiveAllData } from "../../Types/SettlementPriceType";
import { SearchDataProps } from "../../Types/SearchType";
import { getSettlementPrice } from "../../api/settlementPrice";
import { RealTimeReceiveAllData } from "../../Types/RealTimePriceType";
import { getRealTimePirce } from "../../api/realTimePrice";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  initializeProduct,
  setRealtime,
  setSettlement,
} from "../../store/modules/products";

// TODO Redux로 부터 검색 정보를 받아와서 검색을 실행함.

const SearchButton = () => {
  const router = useRouter();
  const pathName = router.pathname;
  const dispatch = useDispatch();

  const searchInfoData = useSelector(
    (state: RootState) => state.rootReducer.searchInfo
  );
  const { date, market, company, product } = searchInfoData;

  const searchButtonClick = () => {
    const searchDataObject = {
      pageNo: "1",
      date,
      market,
      product,
      company,
    };
    if (pathName === "/settlement") {
      // setSettlementProductList([]);
      // setMessage("");
      // setIsLoading(true);
      dispatch(initializeProduct("settlement"));
      settlementPrice(searchDataObject);
    } else {
      // setRealTimeProductList([]);
      // setMessage("");
      // setIsLoading(true);
      dispatch(initializeProduct("realtime"));
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

        dispatch(setSettlement(target));
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
        console.log("target", target);
        dispatch(setRealtime(target));

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

  return (
    <Button variant="contained" onClick={searchButtonClick}>
      검색
    </Button>
  );
};

export default SearchButton;
