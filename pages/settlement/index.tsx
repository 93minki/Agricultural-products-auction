import RecentKeyword from "../../src/components/RecentKeyword/RecentKeyword";
import SearchButton from "../../src/components/SearchButton/SearchButton";
import SearchInfo from "../../src/components/SearchInfo/SerachInfo";
import SettlementProductList from "../../src/components/SettlementProductList/SettlementProductList";
import Title from "../../src/components/Title/Title";
import * as S from "./style";

const SettlementPricePage = () => {
  return (
    <S.PageLayout>
      <Title title="정산 가격 정보" />
      <SearchInfo type="settlement" />
      <SearchButton />
      <RecentKeyword />
      <SettlementProductList />
    </S.PageLayout>
  );
};

export default SettlementPricePage;
