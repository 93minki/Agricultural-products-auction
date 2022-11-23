import styled from "@emotion/styled";
import { Button, FormControl, TextField } from "@mui/material";

export const SelectionLayout = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
`;

export const SelectionItem = styled(FormControl)`
  flex-grow: 1;
`;

export const SearchLayout = styled.div`
  flex-grow: 1;
`;

export const SearchWord = styled(TextField)`
  flex-grow: 1;
`;

export const SearchButton = styled(Button)`
  flex-grow: 0;
`;

export const RecentKeyword = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
