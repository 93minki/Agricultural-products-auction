import { Breadcrumbs } from "@mui/material";
import { SettlementReceiveDatas } from "../../Types/SettlementPriceType";
import * as S from "./style";

interface ProductProps {
  props: SettlementReceiveDatas;
}

const SettlementProduct = ({ props }: ProductProps) => {
  const changeDate = (date: string) => {
    return `${date.substring(0, 4)}-${date.substring(4, 6)}-${date.substring(
      6,
      8
    )}`;
  };
  return (
    <S.ProductLayout>
      <S.ProductTitle>{props.sanName}</S.ProductTitle>
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        <span>{props.largeName}</span>
        <span>{props.midName}</span>
      </Breadcrumbs>
      <S.ProductHeader>
        <span>{props.smallName}</span> 정산일자:
        <span>{changeDate(props.saleDate)}</span>
      </S.ProductHeader>
      <div>
        등급: <span>{props.lvName}</span> 크기:<span>{props.sizeName}</span>{" "}
        규격: <span>{props.std}</span>
      </div>
      <S.ProductTotal>
        총물량: <span>{props.totQty}</span> 총금액: <span>{props.totAmt}</span>
      </S.ProductTotal>
      <S.ProductPrice>
        최저가: <span id="min">{props.minAmt}</span> 최고가:{" "}
        <span id="max">{props.maxAmt}</span> 평균가:{" "}
        <span id="avg">{props.avgAmt}</span>
      </S.ProductPrice>
    </S.ProductLayout>
  );
};

export default SettlementProduct;
