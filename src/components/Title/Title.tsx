import Link from "next/link";
import * as S from "./style";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <S.TitleLayout>
      <h1>{title}</h1>
      <nav>
        <S.NavList>
          <S.NavItem>
            <Link href="/settlement">정산 가격</Link>
          </S.NavItem>
          <S.NavItem>
            <Link href="/realtime">실시간 가격</Link>
          </S.NavItem>
        </S.NavList>
      </nav>
    </S.TitleLayout>
  );
};

export default Title;
