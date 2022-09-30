import { RealTimeReceiveDatas } from "../../Types/RealTimePriceType";
import RealTimeProducts from "../RealTimeProducts/RealTimeProduct";
import * as S from "./style";

interface ProductListProps {
  products: RealTimeReceiveDatas[];
}

const RealTimeProductList = ({ products }: ProductListProps) => {
  return (
    <S.ListLayout>
      {products &&
        products.map((product) => (
          <RealTimeProducts key={product.rn} props={product} />
        ))}
    </S.ListLayout>
  );
};

export default RealTimeProductList;
