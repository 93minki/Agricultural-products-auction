import RealTimeProductList from "../../src/components/RealTimeProductList/RealTimeProductList";
import RecentKeyword from "../../src/components/RecentKeyword/RecentKeyword";
import SearchButton from "../../src/components/SearchButton/SearchButton";
import SearchInfo from "../../src/components/SearchInfo/SerachInfo";
import Title from "../../src/components/Title/Title";

const RealTimePricePage = () => {
  return (
    <div>
      <Title title="실시간 가격 정보" />
      <SearchInfo type="realtime" />
      <SearchButton />
      <RecentKeyword />
      <RealTimeProductList />
    </div>
  );
};

export default RealTimePricePage;
