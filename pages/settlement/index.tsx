import { useState } from "react";
import SearchButton from "../../src/components/SearchButton/SearchButton";
import SearchInfo from "../../src/components/SearchInfo/SerachInfo";
import SettlementProductList from "../../src/components/SettlementProductList/SettlementProductList";
import Title from "../../src/components/Title/Title";
import { SettlementReceiveDatas } from "../../src/Types/SettlementPriceType";

const SettlementPricePage = () => {
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
