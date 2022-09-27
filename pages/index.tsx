import type { NextPage } from "next";
import ApiTest from "../src/components/apiTest";
import Header from "../src/components/Header/Header";
import RealTimePrice from "../src/components/realTimePrice";
import Selection from "../src/components/Selection/Selection";

const Home: NextPage = () => {
  return (
    <div>
      {/* <ApiTest /> */}
      {/* <RealTimePrice /> */}
      <Header currentPage="정산 가격 정보" />
      <Selection />
    </div>
  );
};

export default Home;
