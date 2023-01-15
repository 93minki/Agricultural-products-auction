/* eslint-disable react/destructuring-assignment */
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import * as S from "./style";

const Layout = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  return <S.PageLayout>{props.children}</S.PageLayout>;
};

export default Layout;
