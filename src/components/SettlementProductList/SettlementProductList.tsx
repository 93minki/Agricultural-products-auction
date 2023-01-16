import { useSelector } from "react-redux";
import * as S from "./style";
import SettlementProduct from "../SettlementProducts/SettlementProduct";
import { RootState } from "../../store";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const SettlementProductList = () => {
  const itemList = useSelector(
    (state: RootState) => state.rootReducer.products.settlement
  );

  return (
    <S.ListLayout>
      {itemList.length > 0 ? (
        <>
          {itemList.map((item) => (
            <SettlementProduct key={item.rn} props={item} />
          ))}
          <ScrollToTop />
        </>
      ) : (
        <div />
      )}
    </S.ListLayout>
  );
};

export default SettlementProductList;
