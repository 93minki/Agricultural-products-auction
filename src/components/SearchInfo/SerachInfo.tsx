import { useState, useCallback, useEffect } from "react";
import type { ChangeEvent } from "react";
import { wholeMarketList } from "../../utils/wholemarketList";
import { getStorageItem } from "../../utils/localStorage";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  SelectChangeEvent,
} from "@mui/material";
import * as S from "./style";
import { useDispatch } from "react-redux";
import {
  selectCompany,
  selectDate,
  selectMarket,
  selectProduct,
} from "../../store/modules/searchInfo";

interface SearchInfoProps {
  type: string;
}

const SearchInfo = ({ type }: SearchInfoProps) => {
  const getCurrentDate = useCallback(() => {
    const today = new Date();
    const year = today.getFullYear().toString();
    const month = (today.getMonth() + 1).toString();
    const date = today.getDate().toString();

    return year + "-" + month.padStart(2, "0") + "-" + date.padStart(2, "0");
  }, []);

  const [searchDate, setSearchDate] = useState(getCurrentDate);
  const [currentMarket, setCurrentMarket] = useState("");
  const [currentCompany, setCurrentCompany] = useState("");
  const [selectCompanyList, setSelectCompanyList] = useState<
    { name: string; cmpCd: string }[]
  >([]);
  const [searchWord, setSearchWord] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectDate(getCurrentDate().replaceAll("-", "")));
  }, []);

  const handleMarketChange = (e: SelectChangeEvent) => {
    setCurrentMarket(e.target.value);
    dispatch(selectMarket(e.target.value));
    const companyList = wholeMarketList.filter(
      (market) => market.whsalCd === e.target.value
    );
    setSelectCompanyList(companyList[0].cmpList);
  };

  const handleCompanyChange = (e: SelectChangeEvent) => {
    setCurrentCompany(e.target.value);
    dispatch(selectCompany(e.target.value));
  };

  const handleSearchWordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.currentTarget.value);
    dispatch(selectProduct(e.currentTarget.value));
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const date = e.currentTarget.value;
    setSearchDate(date);
    dispatch(selectDate(date.replaceAll("-", "")));
  };

  return (
    <S.SearchInfoLayout>
      {type === "settlement" ? (
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
      <FormControl>
        <InputLabel>도매시장</InputLabel>
        <Select
          value={currentMarket}
          label="도매시장"
          onChange={handleMarketChange}
        >
          {wholeMarketList.map((market) => (
            <MenuItem key={market.name} value={market.whsalCd}>
              {market.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>법인명</InputLabel>
        <Select
          value={currentCompany}
          label="법인명"
          onChange={handleCompanyChange}
        >
          {selectCompanyList.map((company) => (
            <MenuItem key={company.cmpCd} value={company.cmpCd}>
              {company.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        id="outlined-basic"
        label="상품명"
        value={searchWord}
        onChange={handleSearchWordChange}
      >
        {searchWord}
      </TextField>

      {/* <Button variant="contained" onClick={handleSearchButtonClick}>
        검색
      </Button> */}
      {/* <SearchButton
        type={type}
        searchInfo={{ searchDate, currentMarket, currentCompany, searchWord }}
        setRecentKeywords={setRecentKeywords}
        setItemList={setItemList}
      /> */}
    </S.SearchInfoLayout>
  );
};

export default SearchInfo;
