import { useState } from "react";
import ErrorState from "../../components/ErrorState/ErrorState";
import Loading from "../../components/Loading/Loading";

import SearchButton from "../../components/SearchButton/SearchButton";
import SearchInfo from "../../components/SearchInfo/SerachInfo";
import SettlementProductList from "../../components/SettlementProductList/SettlementProductList";
import Title from "../../components/Title/Title";
import * as S from "./style";

const SettlementPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchError, setIsSearchError] = useState(false);
  const [errorStatus, setErrorStatus] = useState({
    errorCode: "",
    errorMessage: "",
  });
  return (
    <S.PageLayout>
      <Title title="정산 가격 정보" />
      <SearchInfo type="settlement" />
      <SearchButton
        setIsLoading={setIsLoading}
        setIsSearchError={setIsSearchError}
        setErrorStatus={setErrorStatus}
      />
      {/* <RecentKeyword /> */}
      {isLoading ? <Loading /> : <SettlementProductList />}
      {isSearchError ? (
        <ErrorState
          errorCode={errorStatus.errorCode}
          errorMessage={errorStatus.errorMessage}
        />
      ) : (
        ""
      )}
    </S.PageLayout>
  );
};

export default SettlementPage;
