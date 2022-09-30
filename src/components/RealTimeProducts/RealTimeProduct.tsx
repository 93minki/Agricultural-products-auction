import { RealTimeReceiveDatas } from "../../Types/RealTimePriceType";
import * as S from "./style";

interface ProductProps {
  props: RealTimeReceiveDatas;
}

const RealTimeProducts = ({ props }: ProductProps) => {
  return (
    <S.ProductLayout>
      <S.ProductTitle>
        {props.sanName ? props.sanName : "산지명이 없습니다."}
      </S.ProductTitle>
      <S.ProductContent>
        <div>
          <span>{props.smallName}</span>
        </div>
        <div>
          경매시간:<span>{props.sbidtime}</span>
        </div>
        규격: <span>{props.std}</span> 물량: <span>{props.qty}</span> 경락가:
        <span>{props.cost}</span>
      </S.ProductContent>
      <S.ProductTotal>
        총 금액: <span id="total">{props.qty * props.cost}</span>
      </S.ProductTotal>
    </S.ProductLayout>
  );
};

export default RealTimeProducts;
