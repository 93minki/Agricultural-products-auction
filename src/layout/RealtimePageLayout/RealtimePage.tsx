import { useState } from "react";
import ErrorState from "../../components/ErrorState/ErrorState";
import Loading from "../../components/Loading/Loading";
import RealTimeProductList from "../../components/RealTimeProductList/RealTimeProductList";
import RecentKeyword from "../../components/RecentKeyword/RecentKeyword";
import SearchButton from "../../components/SearchButton/SearchButton";
import SearchInfo from "../../components/SearchInfo/SerachInfo";
import Title from "../../components/Title/Title";
import * as S from "./style";

const RealtimePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchError, setIsSearchError] = useState(false);
  const [errorStatus, setErrorStatus] = useState({
    errorCode: "",
    errorMessage: "",
  });
  return (
    <S.PageLayout>
      <Title title="실시간 가격 정보" />
      <SearchInfo type="realtime" />
      <SearchButton
        setIsLoading={setIsLoading}
        setIsSearchError={setIsSearchError}
        setErrorStatus={setErrorStatus}
      />
      <RecentKeyword />
      {isLoading ? <Loading /> : <RealTimeProductList />}
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

export default RealtimePage;
