import { useCallback, useEffect, useState } from "react";
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
import { getStorageItem } from "../../utils/localStorage";

// TODO: 로컬 저장소에서 검색어들을 가져와서 변수에 저장
// 변수에 있는 검색어들을 보여줌
// 검색을 할 때마다 검색어를 추가해야 함.

interface SearchObj {
  date: string;
  market: string;
  company: string;
  product: string;
}
interface SelectionProps {
  searchButtonClick: ({ date, market, company, product }: SearchObj) => void;
  currentTab: string;
  isLoading: boolean;
}

interface CompanyListProps {
  name: string;
  cmpCd: string;
}

const Selection = ({
  searchButtonClick,
  currentTab,
  isLoading,
}: SelectionProps) => {
  const getCurrentDate = useCallback(() => {
    const today = new Date();
    const year = today.getFullYear().toString();
    const month = (today.getMonth() + 1).toString();
    const date = today.getDate().toString();

    return year + "-" + month.padStart(2, "0") + "-" + date.padStart(2, "0");
  }, []);

  const [currentMarket, setCurrentMarket] = useState("");
  const [currentCompany, setCurrentCompany] = useState("");
  const [currentCompanyList, setCurrentCompanyList] = useState<
    CompanyListProps[]
  >([]);
  const [searchWord, setSearchWord] = useState("");
  const [searchDate, setSearchDate] = useState(getCurrentDate);
  const [recentSearchWord, setRecentSearchWord] = useState<string[]>([]);
  console.log("initial Type", typeof recentSearchWord);

  useEffect(() => {
    const recent = getStorageItem();
    console.log("get recent type", typeof recent);
    setRecentSearchWord(recent);
    console.log(
      "recentSearchWord type",
      typeof recentSearchWord,
      recentSearchWord
    );
  }, []);

  const handleMarketChange = (e: SelectChangeEvent) => {
    console.log("market change", e);
    setCurrentMarket(e.target.value);
    const companyList = wholeMarketList.filter(
      (market) => market.whsalCd === e.target.value
    );
    setCurrentCompanyList(companyList[0].cmpList);
  };

  const handleCompanyChange = (e: SelectChangeEvent) => {
    setCurrentCompany(e.target.value);
  };

  const handleSearchWordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.currentTarget.value);
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const date = e.currentTarget.value;
    setSearchDate(date);
  };

  const handleSearchButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (currentTab === "정산 가격 정보") {
      if (searchDate && currentMarket && searchWord) {
        searchButtonClick({
          date: searchDate.replaceAll("-", ""),
          market: currentMarket,
          company: currentCompany,
          product: searchWord,
        });
      }
    } else {
      if (currentMarket && searchWord) {
        searchButtonClick({
          date: searchDate.replaceAll("-", ""),
          market: currentMarket,
          company: currentCompany,
          product: searchWord,
        });
      }
    }
    setRecentSearchWord([...recentSearchWord, searchWord]);
    console.log("recentword", recentSearchWord);
    localStorage.setItem(
      "keyword",
      JSON.stringify([...recentSearchWord, searchWord])
    );
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
          disabled={isLoading}
        />
      ) : (
        ""
      )}

      <S.SelectionItem>
        <InputLabel>도매시장</InputLabel>
        <Select
          value={currentMarket}
          label="도매시장"
          onChange={handleMarketChange}
          disabled={isLoading}
        >
          {wholeMarketList.map((market) => (
            <MenuItem key={market.name} value={market.whsalCd}>
              {market.name}
            </MenuItem>
          ))}
        </Select>
      </S.SelectionItem>
      <S.SelectionItem>
        <InputLabel>법인명</InputLabel>
        <Select
          value={currentCompany}
          label="법인명"
          onChange={handleCompanyChange}
          disabled={isLoading}
        >
          {currentCompanyList.map((company) => (
            <MenuItem key={company.cmpCd} value={company.cmpCd}>
              {company.name}
            </MenuItem>
          ))}
        </Select>
      </S.SelectionItem>

      <S.SearchWord
        id="outlined-basic"
        label="상품명"
        onChange={handleSearchWordChange}
        disabled={isLoading}
      >
        {searchWord}
      </S.SearchWord>
      <div>
        {recentSearchWord &&
          recentSearchWord.map((word) => <li key={Math.random()}>{word}</li>)}
      </div>
      <S.SearchButton
        variant="contained"
        onClick={handleSearchButtonClick}
        disabled={isLoading}
      >
        검색
      </S.SearchButton>
    </S.SelectionLayout>
  );
};

export default Selection;
