// TODO: 규격, 가격, 거래량, 경매 시간, 산지, 등급명, 총물량, 총 금액, 최저가, 최고가, 평균가

import * as S from "./style";
import { SettlementRecvData } from "../../Types/SettlementRecvDataType";
import Product from "../Products/Product";

interface ProductListProps {
  products: SettlementRecvData[];
}

const ProductList = ({ products }: ProductListProps) => {
  console.log("productList", products);

  return (
    <S.ListLayout>
      {products &&
        products.map((product) => <Product key={product.rn} props={product} />)}
    </S.ListLayout>
  );
};

export default ProductList;
