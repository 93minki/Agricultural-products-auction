import * as S from "./style";

interface ErrorStateProps {
  errorMessage: string;
  errorCode: string;
}

const ErrorState = ({ errorMessage, errorCode }: ErrorStateProps) => {
  return (
    <S.ErrorStateLayout>
      <S.ErrorIcon />
      <S.ErrorCode>에러코드: {errorCode}</S.ErrorCode>
      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
    </S.ErrorStateLayout>
  );
};

export default ErrorState;
