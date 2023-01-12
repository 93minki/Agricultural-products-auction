import { useState } from "react";
import { wholeMarketList } from "../../utils/wholemarketList";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const SearchInfo = () => {
  const [currentMarket, setCurrentMarket] = useState("");
  const [currentCompany, setCurrentCompany] = useState("");
  const [selectCompanyList, setSelectCompanyList] = useState<
    { name: string; cmpCd: string }[]
  >([]);

  return (
    <FormControl>
      <InputLabel>도매시장</InputLabel>
      <Select value={currentMarket} label="도매시장">
        {wholeMarketList.map((market) => (
          <MenuItem key={market.name} value={market.whsalCd}>
            {market.name}
          </MenuItem>
        ))}
      </Select>
      <InputLabel>법인명</InputLabel>
      <Select value={currentCompany} label="법인명">
        {selectCompanyList.map((company) => (
          <MenuItem key={company.cmpCd} value={company.cmpCd}>
            {company.name}
          </MenuItem>
        ))}
      </Select>
      <TextField id="outlined-basic" label="상품명"></TextField>
    </FormControl>
  );
};

export default SearchInfo;
