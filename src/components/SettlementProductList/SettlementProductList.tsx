import * as S from "./style";
import SettlementProduct from "../SettlementProducts/SettlementProduct";
import Loading from "../Loading/Loading";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const SettlementProductList = () => {
  // const itemList = useSelector((state: RootState) => {
  //   state.products.settlement;
  // });
  // console.log("itemList", itemList);
  const itemList = useSelector(
    (state: RootState) => state.rootReducer.products.settlement
  );
  console.log("itemList", itemList);

  return (
    <S.ListLayout>
      {itemList.length > 0 ? (
        itemList.map((item) => <SettlementProduct key={item.rn} props={item} />)
      ) : (
        <div>No Item!</div>
      )}
      {/* {isLoading ? (
        <Loading />
      ) : products.length > 0 ? (
        products.map((product) => (
          <SettlementProduct key={product.rn} props={product} />
        ))
      ) : (
        <S.NoSearchResult>{message}</S.NoSearchResult>
      )} */}
    </S.ListLayout>
  );
};

export default SettlementProductList;
