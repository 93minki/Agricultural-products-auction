// TODO: 규격, 가격, 거래량, 경매 시간, 산지, 등급명, 총물량, 총 금액, 최저가, 최고가, 평균가

import * as S from "./style";
import { SettlementReceiveDatas } from "../../Types/SettlementPriceType";
import SettlementProduct from "../SettlementProducts/SettlementProduct";
import Loading from "../Loading/Loading";
interface ProductListProps {
  products: SettlementReceiveDatas[];
  isLoading: boolean;
  message: string;
}

const SettlementProductList = ({
  products,
  isLoading,
  message,
}: ProductListProps) => {
  console.log("productList", products);

  return (
    <S.ListLayout>
      {isLoading ? (
        <Loading />
      ) : products.length > 0 ? (
        products.map((product) => (
          <SettlementProduct key={product.rn} props={product} />
        ))
      ) : (
        <S.NoSearchResult>{message}</S.NoSearchResult>
      )}
    </S.ListLayout>
  );
};

export default SettlementProductList;
