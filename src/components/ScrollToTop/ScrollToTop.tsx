import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import * as S from "./style";

const ScrollToTop = () => {
  const handleClickButton = () => {
    if (!window.scrollY) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <S.ToTopButtonLayout>
      <S.ToTopButton variant="contained" onClick={handleClickButton}>
        <ArrowCircleUpIcon />
        위로가기
      </S.ToTopButton>
    </S.ToTopButtonLayout>
  );
};

export default ScrollToTop;
