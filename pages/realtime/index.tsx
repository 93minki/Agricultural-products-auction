import RealTimeProductList from "../../src/components/RealTimeProductList/RealTimeProductList";
import RecentKeyword from "../../src/components/RecentKeyword/RecentKeyword";
import SearchButton from "../../src/components/SearchButton/SearchButton";
import SearchInfo from "../../src/components/SearchInfo/SerachInfo";
import Title from "../../src/components/Title/Title";
import { PageLayout } from "../settlement/style";

const RealTimePricePage = () => {
  return (
    <PageLayout>
      <Title title="실시간 가격 정보" />
      <SearchInfo type="realtime" />
      <SearchButton />
      <RecentKeyword />
      <RealTimeProductList />
    </PageLayout>
  );
};

export default RealTimePricePage;