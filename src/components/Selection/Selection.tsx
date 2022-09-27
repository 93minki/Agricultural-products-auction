import { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import * as S from "./style";

const Selection = () => {
  const [currentMarket, setCurrentMarket] = useState("");

  const handleMarketChange = (e: SelectChangeEvent) => {
    setCurrentMarket(e.target.value as string);
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
          <MenuItem value="안양시장">안양시장</MenuItem>
          <MenuItem value="서울시장">서울시장</MenuItem>
          <MenuItem value="횡성시장">횡성시장</MenuItem>
        </Select>
      </S.SelectionItem>
      <S.SelectionItem>
        <InputLabel>대분류</InputLabel>
        <Select
          value={currentMarket}
          label="소매시장"
          onChange={handleMarketChange}
        >
          <MenuItem value="안양시장">안양시장</MenuItem>
          <MenuItem value="서울시장">서울시장</MenuItem>
          <MenuItem value="횡성시장">횡성시장</MenuItem>
        </Select>
      </S.SelectionItem>
      <S.SelectionItem>
        <InputLabel>중분류</InputLabel>
        <Select
          value={currentMarket}
          label="소매시장"
          onChange={handleMarketChange}
        >
          <MenuItem value="안양시장">안양시장</MenuItem>
          <MenuItem value="서울시장">서울시장</MenuItem>
          <MenuItem value="횡성시장">횡성시장</MenuItem>
        </Select>
      </S.SelectionItem>
      <S.SelectionItem>
        <InputLabel>소분류</InputLabel>
        <Select
          value={currentMarket}
          label="소매시장"
          onChange={handleMarketChange}
        >
          <MenuItem value="안양시장">안양시장</MenuItem>
          <MenuItem value="서울시장">서울시장</MenuItem>
          <MenuItem value="횡성시장">횡성시장</MenuItem>
        </Select>
      </S.SelectionItem>
    </S.SelectionLayout>
  );
};

export default Selection;
