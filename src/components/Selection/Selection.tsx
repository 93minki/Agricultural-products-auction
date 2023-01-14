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
import RecentKeyword from "../RecentKeyword/RecentKeyword";
import * as S from "./style";
import { getStorageItem, setStorageItem } from "../../utils/localStorage";

interface SearchObj {
  date: string;
  market: string;
  company: string;
  product: string;
}
interface SelectionProps {
  searchButtonClick?: ({ date, market, company, product }: SearchObj) => void;
  currentTab?: string;
  isLoading?: boolean;
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
  const [recentKeywords, setRecentKeywords] = useState<string[]>([]);

  useEffect(() => {
    const recent = getStorageItem();
    setRecentKeywords(recent);
  }, []);

  const handleMarketChange = (e: SelectChangeEvent) => {
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
        searchButtonClick &&
          searchButtonClick({
            date: searchDate.replaceAll("-", ""),
            market: currentMarket,
            company: currentCompany,
            product: searchWord,
          });
      }
    } else {
      if (currentMarket && searchWord) {
        searchButtonClick &&
          searchButtonClick({
            date: searchDate.replaceAll("-", ""),
            market: currentMarket,
            company: currentCompany,
            product: searchWord,
          });
      }
    }
    const recentKeyword = getStorageItem();
    if (!recentKeyword.includes(searchWord)) {
      setStorageItem([...recentKeyword, searchWord]);
      setRecentKeywords([...recentKeyword, searchWord]);
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
        value={searchWord}
      >
        {searchWord}
      </S.SearchWord>
      {/* <RecentKeyword
        recentKeywords={recentKeywords}
        setSearchWord={setSearchWord}
        setRecentKeywords={setRecentKeywords}
      /> */}
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
