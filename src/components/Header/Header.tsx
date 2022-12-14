import { ToggleButton } from "@mui/material";
import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import * as S from "./style";

interface HeaderProps {
  currentPage: string;
  getCurrentTab: (tab: string) => void;
}

const Header = ({ currentPage, getCurrentTab }: HeaderProps) => {
  const [currentTitle, setCurrentTitle] = useState("");

  useEffect(() => {
    setCurrentTitle(currentPage);
  }, [currentPage]);

  const handleTitleChange = (e: MouseEvent<HTMLElement>, nextTitle: string) => {
    setCurrentTitle(nextTitle);
    getCurrentTab(nextTitle);
  };
  return (
    <S.HeaderLayout>
      <S.HeaderTitle>{currentTitle}</S.HeaderTitle>
      <S.HeaderToggleButtonGroup
        color="primary"
        value={currentTitle}
        exclusive
        onChange={handleTitleChange}
      >
        <ToggleButton value="정산 가격 정보">정산 가격 정보</ToggleButton>
        <ToggleButton value="실시간 경락 가격">실시간 경락 가격</ToggleButton>
      </S.HeaderToggleButtonGroup>
    </S.HeaderLayout>
  );
};

export default Header;
