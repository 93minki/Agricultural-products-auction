import { useState } from "react";
import { useSelector } from "react-redux";
import SearchButton from "../../src/components/SearchButton/SearchButton";
import SearchInfo from "../../src/components/SearchInfo/SerachInfo";
import SettlementProductList from "../../src/components/SettlementProductList/SettlementProductList";
import Title from "../../src/components/Title/Title";
import { RootState } from "../../src/store";
import { SettlementReceiveDatas } from "../../src/Types/SettlementPriceType";

const SettlementPricePage = () => {
  const searchInfoObject = useSelector(
    (state: RootState) => state.reducer.searchInfo
  );
  console.log("searchInfoObject", searchInfoObject);
  return (
    <div>
      <Title title="정산 가격 정보" />
      <SearchInfo type="settlement" />
      {/* <SearchButton /> */}
      {/* <SettlementProductList/> */}
    </div>
  );
};

export default SettlementPricePage;
