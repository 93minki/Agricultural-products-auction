import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Loading from "../Loading/Loading";
import RealTimeProducts from "../RealTimeProducts/RealTimeProduct";
import * as S from "./style";

const RealTimeProductList = () => {
  const itemList = useSelector(
    (state: RootState) => state.rootReducer.products.realtime
  );
  return (
    <S.ListLayout>
      {itemList.length > 0 ? (
        itemList.map((item) => <RealTimeProducts key={item.rn} props={item} />)
      ) : (
        <div>No Item!</div>
      )}
      {/*    {isLoading ? (
         <Loading />
       ) : products.length > 0 ? (
         products.map((product) => (
           <RealTimeProducts key={product.rn} props={product} />
         ))
      ) : (
        <S.NoSearchResult>{message}</S.NoSearchResult>
      )} */}
    </S.ListLayout>
  );
};

export default RealTimeProductList;
