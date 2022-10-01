import SyncIcon from "@mui/icons-material/Sync";
import * as S from "./style";

const Loading = () => {
  return (
    <S.LoadingLayout>
      <SyncIcon />
      데이터를 불러오고 있습니다. 잠시만 기다려주세요!
    </S.LoadingLayout>
  );
};

export default Loading;
