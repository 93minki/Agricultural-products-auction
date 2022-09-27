import type { NextPage } from "next";
import ApiTest from "../components/apiTest";
import RealTimePrice from "../components/realTimePrice";

const Home: NextPage = () => {
  return (
    <div>
      API TEST
      {/* <ApiTest /> */}
      <RealTimePrice />
    </div>
  );
};

export default Home;
