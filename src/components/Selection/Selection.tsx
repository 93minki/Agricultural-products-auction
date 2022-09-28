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
import { getSettlementPrice } from "../../../pages/api/settlementPrice";
import { getDataProps } from "../../Types/SettlementPriceType";

const Selection = () => {
  const getCurrentDate = useCallback(() => {
    console.log("get Current Date");
    const today = new Date();
    const year = today.getFullYear().toString();
    const month = (today.getMonth() + 1).toString();
    const date = today.getDate().toString();

    return year + "-" + month.padStart(2, "0") + "-" + date;
  }, []);
  const [currentMarket, setCurrentMarket] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [searchDate, setSearchDate] = useState(getCurrentDate());

  const handleMarketChange = (e: SelectChangeEvent) => {
    setCurrentMarket(e.target.value as string);
  };

  const handleSearchWordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.currentTarget.value);
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const date = e.currentTarget.value.replaceAll("-", "");
    setSearchDate(date);
  };

  const getPrice = async () => {
    const serviceKey = `${process.env.NEXT_PUBLIC_API_KEY}`;
    const apiType = "json";
    const pageNo = "1";
    const saleDate = searchDate;
    const whsalCd = currentMarket;

    const getData: getDataProps[] = await getSettlementPrice({
      serviceKey,
      apiType,
      pageNo,
      saleDate,
      whsalCd,
    });
    console.log("getData!!", getData);
  };

  const handleSearchButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    getPrice();
  };

  return (
    <S.SelectionLayout>
      <TextField
        id="date"
        label="날짜"
        type="date"
        defaultValue={searchDate}
        InputLabelProps={{ shrink: true }}
        onChange={handleDateChange}
      />
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
