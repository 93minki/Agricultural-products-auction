import styled from "@emotion/styled";
import { Button, FormControl, TextField } from "@mui/material";

export const SelectionLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SelectionItem = styled(FormControl)`
  margin: 1.5rem;
  flex-grow: 1;
`;

export const SearchLayout = styled.div`
  margin: 1.5rem;
  flex-grow: 1;
`;

export const SearchWord = styled(TextField)`
  margin: 1.5rem;
  flex-grow: 1;
`;

export const SearchButton = styled(Button)`
  margin-right: 1.5rem;
  flex-grow: 0;
`;
