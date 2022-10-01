import { RealTimeReceiveDatas } from "../../Types/RealTimePriceType";
import Loading from "../Loading/Loading";
import RealTimeProducts from "../RealTimeProducts/RealTimeProduct";
import * as S from "./style";

interface ProductListProps {
  products: RealTimeReceiveDatas[];
  isLoading: boolean;
}

const RealTimeProductList = ({ products, isLoading }: ProductListProps) => {
  return (
    <S.ListLayout>
      {isLoading ? (
        <Loading />
      ) : (
        products &&
        products.map((product) => (
          <RealTimeProducts key={product.rn} props={product} />
        ))
      )}
    </S.ListLayout>
  );
};

export default RealTimeProductList;
