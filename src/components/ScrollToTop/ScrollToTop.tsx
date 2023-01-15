import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import * as S from "./style";

interface ScrollToTopProps {
  handleToTopButtonClick: () => void;
}

const ScrollToTop = ({ handleToTopButtonClick }: ScrollToTopProps) => {
  return (
    <S.ToTopButtonLayout>
      <S.ToTopButton variant="contained" onClick={handleToTopButtonClick}>
        <ArrowCircleUpIcon />
        위로가기
      </S.ToTopButton>
    </S.ToTopButtonLayout>
  );
};

export default ScrollToTop;
