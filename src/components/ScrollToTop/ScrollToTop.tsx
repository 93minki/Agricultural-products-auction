import * as S from "./style";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

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
