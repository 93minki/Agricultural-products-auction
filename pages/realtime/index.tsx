import SearchInfo from "../../src/components/SearchInfo/SerachInfo";
import Title from "../../src/components/Title/Title";

const RealTimePricePage = () => {
  return (
    <div>
      <Title title="실시간 가격 정보" />
      <SearchInfo type="realtime" />
    </div>
  );
};

export default RealTimePricePage;
