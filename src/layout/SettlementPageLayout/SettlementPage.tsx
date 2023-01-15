import { useState } from "react";
import Loading from "../../components/Loading/Loading";
import RecentKeyword from "../../components/RecentKeyword/RecentKeyword";
import SearchButton from "../../components/SearchButton/SearchButton";
import SearchInfo from "../../components/SearchInfo/SerachInfo";
import SettlementProductList from "../../components/SettlementProductList/SettlementProductList";
import Title from "../../components/Title/Title";
import * as S from "./style";

const SettlementPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <S.PageLayout>
      <Title title="정산 가격 정보" />
      <SearchInfo type="settlement" />
      <SearchButton setIsLoading={setIsLoading} />
      <RecentKeyword />
      {isLoading ? <Loading /> : <SettlementProductList />}
    </S.PageLayout>
  );
};

export default SettlementPage;
