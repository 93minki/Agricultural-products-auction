import { useCallback, useState } from "react";
import type { MouseEvent, ChangeEvent } from "react";
import { wholeMarketList } from "../../utils/wholemarketList";
import {
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import * as S from "./style";
import { SettlementDataProps } from "../../Types/SettlementPriceType";
import { RealTimeDataProps } from "../../Types/RealTimePriceType";

interface SearchObj {
  date?: string;
  market: string;
  product: string;
}
interface SelectionProps {
  searchButtonClick: (searchObj: SearchObj) => void;
  currentTab: string;
}

const Selection = ({ searchButtonClick, currentTab }: SelectionProps) => {
  console.log("currentTab", currentTab);
  const getCurrentDate = useCallback(() => {
    const today = new Date();
    const year = today.getFullYear().toString();
    const month = (today.getMonth() + 1).toString();
    const date = today.getDate().toString();

    return year + "-" + month.padStart(2, "0") + "-" + date.padStart(2, "0");
  }, []);

  const [currentMarket, setCurrentMarket] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [searchDate, setSearchDate] = useState(getCurrentDate);

  const handleMarketChange = (e: SelectChangeEvent) => {
    setCurrentMarket(e.target.value as string);
  };

  const handleSearchWordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.currentTarget.value);
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const date = e.currentTarget.value.replaceAll("-", "");
    console.log("e.target", e.currentTarget.value);
    setSearchDate(date);
  };

  const handleSearchButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (currentTab === "정산 가격 정보") {
      if (searchDate && currentMarket && searchWord) {
        searchButtonClick({
          date: searchDate.replaceAll("-", ""),
          market: currentMarket,
          product: searchWord,
        });
      }
    } else {
      if (currentMarket && searchWord) {
        searchButtonClick({
          market: currentMarket,
          product: searchWord,
        });
      }
    }
  };

  return (
    <S.SelectionLayout>
      {currentTab === "정산 가격 정보" ? (
        <TextField
          id="date"
          label="날짜"
          type="date"
          defaultValue={searchDate}
          InputLabelProps={{ shrink: true }}
          onChange={handleDateChange}
        />
      ) : (
        ""
      )}

      <S.SelectionItem>
        <InputLabel>도매시장</InputLabel>
        <Select
          value={currentMarket}
          label="소매시장"
          onChange={handleMarketChange}
        >
          {wholeMarketList.map((market) => (
            <MenuItem key={market.code} value={market.code}>
              {market.name}
            </MenuItem>
          ))}
        </Select>
      </S.SelectionItem>

      <S.SearchWord
        id="outlined-basic"
        label="상품명"
        onChange={handleSearchWordChange}
      >
        {searchWord}
      </S.SearchWord>
      <S.SearchButton variant="contained" onClick={handleSearchButtonClick}>
        검색
      </S.SearchButton>
    </S.SelectionLayout>
  );
};

export default Selection;
