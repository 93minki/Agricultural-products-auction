import { RealTimeReceiveDatas } from "../../Types/RealTimePriceType";
import Loading from "../Loading/Loading";
import RealTimeProducts from "../RealTimeProducts/RealTimeProduct";
import * as S from "./style";

interface ProductListProps {
  products: RealTimeReceiveDatas[];
  isLoading: boolean;
  message: string;
}

const RealTimeProductList = ({
  products,
  isLoading,
  message,
}: ProductListProps) => {
  return (
    <S.ListLayout>
      {isLoading ? (
        <Loading />
      ) : products.length > 0 ? (
        products.map((product) => (
          <RealTimeProducts key={product.rn} props={product} />
        ))
      ) : (
        <S.NoSearchResult>{message}</S.NoSearchResult>
      )}
    </S.ListLayout>
  );
};

export default RealTimeProductList;
