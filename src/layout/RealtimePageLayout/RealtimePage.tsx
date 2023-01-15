import RealTimeProductList from "../../components/RealTimeProductList/RealTimeProductList";
import RecentKeyword from "../../components/RecentKeyword/RecentKeyword";
import SearchButton from "../../components/SearchButton/SearchButton";
import SearchInfo from "../../components/SearchInfo/SerachInfo";
import Title from "../../components/Title/Title";
import * as S from "./style";

const RealtimePage = () => {
  return (
    <S.PageLayout>
      <Title title="실시간 가격 정보" />
      <SearchInfo type="realtime" />
      <SearchButton />
      <RecentKeyword />
      <RealTimeProductList />
    </S.PageLayout>
  );
};

export default RealtimePage;
