import { useState } from "react";
import type { MouseEvent } from "react";
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import * as S from "./style";

const searchWord = [
  { label: "꽈리고추" },
  { label: "옥수수" },
  { label: "블랙커런트" },
];

const Selection = () => {
  const [currentMarket, setCurrentMarket] = useState("");

  const handleMarketChange = (e: SelectChangeEvent) => {
    setCurrentMarket(e.target.value as string);
  };

  const handleSearchButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("e", e);
  };

  return (
    <S.SelectionLayout>
      <S.SelectionItem>
        <InputLabel>도매시장</InputLabel>
        <Select
          value={currentMarket}
          label="소매시장"
          onChange={handleMarketChange}
        >
          <MenuItem value="대전노은">대전노은</MenuItem>
          <MenuItem value="서울시장">서울시장</MenuItem>
          <MenuItem value="횡성시장">횡성시장</MenuItem>
        </Select>
      </S.SelectionItem>

      <S.SearchWord id="outlined-basic" label="상품명"></S.SearchWord>
      <S.SearchButton variant="contained" onClick={handleSearchButtonClick}>
        검색
      </S.SearchButton>
    </S.SelectionLayout>
  );
};

export default Selection;
