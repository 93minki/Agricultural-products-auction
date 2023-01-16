import { useSelector } from "react-redux";
import { RootState } from "../../store";
import RealTimeProducts from "../RealTimeProducts/RealTimeProduct";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import * as S from "./style";

const RealTimeProductList = () => {
  const itemList = useSelector(
    (state: RootState) => state.rootReducer.products.realtime
  );
  return (
    <S.ListLayout>
      {itemList.length > 0 ? (
        <>
          {itemList.map((item) => (
            <RealTimeProducts key={item.rn} props={item} />
          ))}
          <ScrollToTop />
        </>
      ) : (
        <div> </div>
      )}
    </S.ListLayout>
  );
};

export default RealTimeProductList;
